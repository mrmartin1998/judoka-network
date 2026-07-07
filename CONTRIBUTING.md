# Contributing to Judoka Network

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
- **Note your environment** (OS, browser, Node version, etc.)

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
git clone https://github.com/your-username/judoka-network.git
cd judoka-network
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp frontend/.env.example frontend/.env
cp backend/.env.example backend/.env
# Edit .env files with your credentials
```

4. Run database migrations
```bash
cd backend
npx prisma migrate dev
```

5. Create a feature branch
```bash
git checkout -b feature/your-feature-name
```

6. Start development servers
```bash
npm run dev
```

7. Make your changes and commit
```bash
git add .
git commit -m "feat(scope): add amazing feature"
```

8. Push to your fork
```bash
git push origin feature/your-feature-name
```

9. Open a Pull Request

### Branch Strategy

We follow a modified GitFlow workflow. Please read [.github/BRANCH_STRATEGY.md](.github/BRANCH_STRATEGY.md) for details.

**Main branches:**
- `main` - Production-ready code
- `develop` - Integration branch for features

**Supporting branches:**
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `release/*` - Release preparation
- `hotfix/*` - Production hotfixes

### Commit Message Guidelines

We follow the Conventional Commits specification. See [COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md) for details.

**Format:**
```
<type>(<scope>): <subject>
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Code style/formatting
- `refactor` - Code refactoring
- `test` - Adding/updating tests
- `chore` - Maintenance tasks

**Scopes (examples):**
- `frontend` - Frontend changes
- `backend` - Backend changes
- `shared` - Shared code changes
- `auth` - Authentication related
- `profile` - User profile features
- `verification` - Belt verification system

### Code Style

- Follow the existing code style
- Run linter before committing: `npm run lint`
- Format code with Prettier: `npm run format`
- Ensure TypeScript types are correct: `npm run typecheck`
- Use strict TypeScript mode
- Write meaningful variable and function names
- Add JSDoc comments for public APIs

### Testing

- Write tests for new features
- Ensure all tests pass: `npm test`
- Maintain or improve code coverage
- Test edge cases
- Include both unit and integration tests

### TypeScript Guidelines

- Use strict mode
- Avoid `any` type
- Define proper interfaces/types in `shared/` for cross-workspace usage
- Use Zod for runtime validation
- Leverage type inference when possible

## Project Structure

```
judoka-network/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API services
│   │   ├── utils/         # Utility functions
│   │   └── types/         # Frontend-specific types
│   └── public/            # Static assets
├── backend/           # NestJS API
│   ├── src/
│   │   ├── modules/       # Feature modules
│   │   ├── common/        # Shared code
│   │   ├── config/        # Configuration
│   │   └── prisma/        # Database schema
│   └── test/              # E2E tests
├── shared/            # Shared TypeScript code
│   ├── types/             # Shared interfaces/types
│   ├── constants/         # Shared constants
│   └── validators/        # Shared validation schemas
└── .github/               # GitHub templates & workflows
```

## Monorepo Workflow

This is a monorepo using npm workspaces. Keep these points in mind:

- Shared types go in `shared/types`
- Install workspace dependencies from root: `npm install <package> --workspace=frontend`
- Run commands in specific workspace: `npm run dev --workspace=backend`
- Changes to `shared/` affect all workspaces

## Database Changes

When modifying the database schema:

1. Update `backend/prisma/schema.prisma`
2. Create migration: `npx prisma migrate dev --name descriptive-name`
3. Update relevant TypeScript types in `shared/types`
4. Update seed data if necessary
5. Document breaking changes

## Additional Notes

### Issue and Pull Request Labels

- `severity: critical` - Blocking core functionality
- `severity: high` - Major feature disruption
- `severity: medium` - Minor issues
- `severity: low` - Cosmetic issues
- `priority: must-have` - Essential for MVP
- `priority: nice-to-have` - Enhancements
- `component: frontend` - Frontend related
- `component: backend` - Backend related
- `type: feature` - New feature
- `type: bug` - Bug fix
- `type: enhancement` - Improvement

## Questions?

Feel free to open an issue with your question or reach out to the maintainers.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Judoka Network!** 🥋
