import NotionAPIService from "./NotionAPIService";
const notionAPIService = new NotionAPIService({
  authToken: process.env.NOTION_AUTH_TOKEN || "",
});

export default notionAPIService;
