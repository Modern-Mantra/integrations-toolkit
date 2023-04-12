import { Client } from "@notionhq/client";
import {
  UpdatePageResponse,
  CreatePageResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  QueryDatabaseParameters,
  CreatePageParameters,
  UpdatePageParameters,
} from "@notionhq/client/build/src/api-endpoints";



class NotionAPIService {
  private client: Client;

  constructor(config: NotionAPIConfig) {
    this.client = new Client({ auth: config.authToken });
  }

  async queryDatabase(
    params: QueryDatabaseParameters
  ): Promise<Array<PageObjectResponse | PartialPageObjectResponse>> {
    try {
      const response = await this.client.databases.query(params);
      const results = response.results;
      return results;
    } catch (error) {
      console.error("Error querying database:", error);
      throw new Error("Error querying database.");
    }
  }

  async createItemInDatabase<T>(
    params: CreatePageParameters
  ): Promise<CreatePageResponse> {
    try {
      const response = await this.client.pages.create(params);
      return response;
    } catch (error) {
      console.error("Error creating item in database:", error);
      throw new Error("Error creating item in database.");
    }
  }

  async updateItemInDatabase(
    params: UpdatePageParameters
  ): Promise<UpdatePageResponse> {
    try {
      const response = await this.client.pages.update(params);
      return response;
    } catch (error) {
      console.error("Error updating item in database:", error);
      throw new Error("Error updating item in database.");
    }
  }
}

export default NotionAPIService;
