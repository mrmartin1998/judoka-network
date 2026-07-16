# Contributing to [Project Name]

First off, thank you for considering contributing to this project! It's people like you that make this project better.

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** to demonstrate the steps
- **Describe the behavior you observed** and what you expected to see
- **Include screenshots** if applicable
- **Note your environment** (OS, browser, version, etc.)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any examples** of how it works in other projects

### Pull Requests

1. **Fork the repo** and create your branch from `develop`
2. **Follow the branch naming convention**: `feature/your-feature-name` or `bugfix/your-bug-fix`
3. **Write clear commit messages** following our [Commit Message Guidelines](COMMIT_CONVENTIONS.md)
4. **Include tests** if you're adding new functionality
5. **Update documentation** as needed
6. **Ensure all tests pass** before submitting
7. **Fill out the PR template** completely

## Development Process

### Setting Up Your Development Environment

1. Fork and clone the repository
```bash
git clone https://github.com/your-username/project-name.git
cd project-name
```

2. Install dependencies
```bash
npm install
```

3. Create a feature branch
```bash
git checkout -b feature/your-feature-name
```

4. Make your changes and commit
```bash
git add .
git commit -m "feat: add amazing feature"
```

5. Push to your fork
```bash
git push origin feature/your-feature-name
```

6. Open a Pull Request

### Branch Strategy

We follow a modified GitFlow workflow. Please read [BRANCH_STRATEGY.md](.github/BRANCH_STRATEGY.md) for details.

### Commit Message Guidelines

We follow the Conventional Commits specification. See [COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md) for details.

### Code Style

- Follow the existing code style
- Run linter before committing: `npm run lint`
- Format code with Prettier: `npm run format`
- Ensure TypeScript types are correct: `npm run typecheck`

### Testing

- Write tests for new features
- Ensure all tests pass: `npm test`
- Maintain or improve code coverage
- Test edge cases

## Project Structure

```
project-name/
├── src/              # Source code
├── tests/            # Test files
├── docs/             # Documentation
└── public/           # Public assets
```

## Additional Notes

### Issue and Pull Request Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.
