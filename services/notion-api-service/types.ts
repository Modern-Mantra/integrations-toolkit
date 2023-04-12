interface QueryObject {
  filter?: {
    and?: Array<{
      property: string;
      multi_select?: {
        contains?: string;
      };
      select?: {
        equals?: string;
      };
      checkbox?: {
        equals?: boolean;
      };
    }>;
  };
  page_size?: number;
  [key: string]: any;
}

interface NotionAPIConfig {
  authToken: string;
}
