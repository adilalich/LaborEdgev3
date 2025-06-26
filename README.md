# LaborEdge v3 - Zapier Integration

A Zapier integration for LaborEdge, providing automated workflows for healthcare recruitment processes.

## Features

### Triggers
- List Professions
- List Specialties
- List States
- List Countries
- List Candidate Statuses
- List Reference Sources
- List Recruiters
- List Candidate Types
- List Document Types
- List Journal Types

### Searches
- Find Candidate
- Find Specialty

### Creates
- Create Candidate
- Upload Candidate Document
- Create Candidate Note

### Search or Create
- Find or Create Candidate

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Install Zapier CLI (if not already installed):
```bash
npm install -g zapier-platform-cli
```

3. Login to Zapier:
```bash
zapier login
```

4. Test the integration:
```bash
npm test
```

## Deployment

To deploy to Zapier:

```bash
zapier push
```

To validate your integration:

```bash
zapier validate
```

## Testing

The integration includes tests for each component. Run tests with:

```bash
npm test
```

## Environment Variables

The following environment variables are required:

- `LABOR_EDGE_API_KEY` - Your LaborEdge API key
- `LABOR_EDGE_API_URL` - LaborEdge API URL

## Local Development

1. Create a `.env` file in the root directory
2. Add your environment variables
3. Use `zapier test` to run individual tests

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests
4. Submit a pull request

## Zapier Version Support

This integration requires:
- Node.js >= v16
- Zapier Platform Core: 14.0.1

## License

MIT License - see LICENSE file for details 