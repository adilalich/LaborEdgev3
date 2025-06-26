# Contributing to LaborEdge Zapier Integration

Thank you for your interest in contributing to the LaborEdge Zapier integration! This document provides guidelines and instructions for contributing.

## Development Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## Setting Up Development Environment

1. Install Node.js (v16 or later)
2. Install Zapier CLI:
   ```bash
   npm install -g zapier-platform-cli
   ```
3. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LaborEdgev3.git
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Create `.env` file with required environment variables

## Testing

### Running Tests

```bash
npm test
```

### Testing Individual Components

```bash
zapier test triggers/list_professions.js
zapier test creates/create_candidate.js
```

## Zapier Integration Guidelines

### Adding New Triggers

1. Create a new file in `triggers/` directory
2. Export an object with:
   - `key`
   - `noun`
   - `display`
   - `operation`
3. Register in `index.js`

Example:
```javascript
module.exports = {
  key: 'new_trigger',
  noun: 'Thing',
  display: {
    label: 'New Thing',
    description: 'Triggers when a new thing happens'
  },
  operation: {
    perform: () => {
      // Implementation
    }
  }
};
```

### Adding New Creates

1. Create a new file in `creates/` directory
2. Include input fields
3. Implement perform method
4. Register in `index.js`

### Adding New Searches

1. Create a new file in `searches/` directory
2. Define search fields
3. Implement perform method
4. Register in `index.js`

## Code Style

- Use ES6+ features
- Follow Zapier's best practices
- Include JSDoc comments for all exports
- Use async/await for promises

## Pull Request Process

1. Update README.md with new features
2. Update tests
3. Ensure CI passes
4. Get code review
5. Squash commits

## Release Process

Releases are automated through CI/CD:
1. Merge to main triggers deployment
2. Version is automatically updated
3. Changes are pushed to Zapier

## Questions?

Open an issue or contact the maintainers. 