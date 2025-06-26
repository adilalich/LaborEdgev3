# LaborEdge v3

A Node.js application for LaborEdge's Zapier integration, providing automated workflows for healthcare recruitment processes.

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

## Project Structure

```
LaborEdgev3/
├── creates/           # Creation operations
├── triggers/          # Trigger operations
└── test/             # Test files
```

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
- Create `.env` file in the root directory
- Required variables:
  - `LABOR_EDGE_API_KEY` - Your LaborEdge API key
  - `LABOR_EDGE_API_URL` - LaborEdge API URL

## Testing

Run tests with:
```bash
npm test
```

## Environment Requirements

This project requires:
- Node.js >= v16
- NPM >= 8.0.0

## License

MIT License - see LICENSE file for details 