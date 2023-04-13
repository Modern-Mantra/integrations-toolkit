# Integrations Toolkit

The Integrations Toolkit is a library to connect core technologies such as Notion, Slack, and Gmail. It simplifies the process of integrating these services into your projects by providing ready-to-use TypeScript classes and functions.

## Installation

To install the Integrations Toolkit, simply run the following command in your project directory:

```
npm install @modern-mantra/integrations-toolkit
```

Make sure you have an .npmrc file in your project directory with the following content:

```
@modern-mantra:registry=https://npm.pkg.github.com/
```

## Usage

The library checks for the following environment variables at runtime:

- NotionAPIService checks for \`NOTION_AUTH_TOKEN\`
- SlackWebAPIService checks for \`SLACK_TOKEN\`

Make sure these environment variables are set in your application.

Here's an example of how to use the Integrations Toolkit in your project:

```typescript
import { notionAPIService } from '@modern-mantra/integrations-toolkit';

async function getDatabaseResults(databaseId: string) {
  try {
    const params = {
      database_id: databaseId,
      filter: {
        // Add your filter conditions here
      },
    };

    const results = await notionAPIService.queryDatabase(params);
    console.log('Database results:', results);
  } catch (error) {
    console.error('Error querying database:', error);
  }
}

// Replace with your database ID
const databaseId = 'your-database-id';
getDatabaseResults(databaseId);
```


You can use \`notionAPIService\` and \`slackWebAPIService\` without passing any API keys or tokens, as they will be automatically picked up from the environment variables.

## Documentation

For more detailed usage and examples, please refer to the official documentation (link to your documentation, if available).

## Contributing

If you'd like to contribute to the Integrations Toolkit, please feel free to submit a pull request or open an issue on the [GitHub repository](https://github.com/modern-mantra/integrations-toolkit).

## License

The Integrations Toolkit is licensed under the [MIT License](LICENSE).
