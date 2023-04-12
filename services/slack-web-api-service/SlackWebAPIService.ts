// SlackWebAPIService.ts

import { WebClient } from "@slack/web-api";

type TemplateFunction<T> = (variables: T) => any[];

class SlackWebAPIService {
  private readonly client: WebClient;

  constructor(token: string) {
    this.client = new WebClient(token);
  }

  private generateBlocks<T>(
    templateFunction: TemplateFunction<T>,
    variables: T
  ): any[] {
    return templateFunction(variables);
  }

  public async postMessage<T>(
    channel: string,
    templateFunction: TemplateFunction<T>,
    variables: T
  ): Promise<void> {
    try {
      const blocks = this.generateBlocks(templateFunction, variables);

      const result = await this.client.chat.postMessage({
        channel,
        blocks,
      });

      console.log(result, "slack result");
      if (!result.ok) {
        throw new Error(
          `Failed to send message to channel ${channel}: ${result.error}`
        );
      }
    } catch (error) {
      console.log(error.data);
      if (error.data) {
        const responseData = JSON.parse(error.data.responseBody);
        if (responseData.error) {
          if (responseData.error === "channel_not_found") {
            throw new Error(`Channel ${channel} not found.`);
          }
          if (responseData.error === "not_in_channel") {
            throw new Error(`Not a member of channel ${channel}.`);
          }
        }
      }
      console.error(`Error sending message to channel ${channel}:`, error);
      throw new Error(`Error sending message to channel ${channel}.`);
    }
  }
}

export default SlackWebAPIService;
