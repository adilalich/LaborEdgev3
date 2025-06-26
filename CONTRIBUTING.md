# Contributing to LaborEdge v3

Thank you for your interest in contributing to LaborEdge v3! This document provides guidelines and instructions for contributing.

## Development Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## Setting Up Development Environment

1. Install Node.js (v16 or later)
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/LaborEdgev3.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create `.env` file with required environment variables:
   - `LABOR_EDGE_API_KEY`
   - `LABOR_EDGE_API_URL`

## Testing

Run the test suite:
```bash
npm test
```

## Code Organization

### Triggers
Located in `triggers/` directory:
- List operations (professions, specialties, etc.)
- Status retrieval operations

### Creates
Located in `creates/` directory:
- Creation operations
- Update operations
- Document handling

### Searches
Located in `searches/` directory:
- Find operations
- Query operations

## Code Style

- Use ES6+ features
- Include JSDoc comments for all exports
- Use async/await for promises
- Follow existing code patterns

## Pull Request Process

1. Update README.md with any new features
2. Update tests if needed
3. Ensure CI passes
4. Get code review
5. Squash commits before merging

## Questions?

Open an issue or contact the maintainers. 