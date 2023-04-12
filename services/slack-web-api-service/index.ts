import SlackWebAPIService from "./SlackWebAPIService";
const slackWebAPIService = new SlackWebAPIService(
  process.env.SLACK_TOKEN || ""
);
export default slackWebAPIService;
