# Commit Message Conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification for commit messages.

## Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

The type must be one of the following:

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (white-space, formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Code change that improves performance
- **test**: Adding missing tests or correcting existing tests
- **build**: Changes that affect the build system or external dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files
- **revert**: Reverts a previous commit

### Scope (Optional)

The scope should be the name of the affected component/module:

- `auth`
- `api`
- `ui`
- `database`
- `config`
- etc.

### Subject

The subject contains a succinct description of the change:

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No period (.) at the end
- Limit to 50 characters or less

### Body (Optional)

The body should include:

- Motivation for the change
- Contrast with previous behavior
- Wrap at 72 characters

### Footer (Optional)

The footer should contain:

- **Breaking Changes**: Start with `BREAKING CHANGE:` followed by description
- **Issue References**: `Closes #123`, `Fixes #456`, `Relates to #789`

## Examples

### Feature
```
feat(auth): add JWT authentication

Implement JWT token-based authentication for API endpoints.
Includes token generation, validation, and refresh logic.

Closes #123
```

### Bug Fix
```
fix(api): resolve null pointer in user service

Check for null before accessing user properties to prevent crashes.

Fixes #456
```

### Documentation
```
docs: update installation instructions

Add missing steps for environment variable setup.
```

### Breaking Change
```
feat(api): change user endpoint structure

BREAKING CHANGE: /api/user endpoint now requires authentication.
All requests must include Bearer token in Authorization header.

Closes #789
```

### Simple Changes
```
chore: update dependencies
```

```
style: format code with prettier
```

```
test: add unit tests for auth service
```

## Git Hooks (Optional)

To enforce commit message format, you can use commit-msg hooks:

### Using Husky + Commitlint

1. Install dependencies:
```bash
npm install --save-dev @commitlint/cli @commitlint/config-conventional husky
```

2. Create `commitlint.config.js`:
```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
};
```

3. Set up Husky:
```bash
npx husky install
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

## Best Practices

1. **Keep commits atomic** - One logical change per commit
2. **Write clear subjects** - Should complete: "If applied, this commit will..."
3. **Use the body** - Explain what and why, not how
4. **Reference issues** - Link to relevant issues/tickets
5. **Test before commit** - Ensure code works and tests pass
6. **Review your diff** - Double-check what you're committing

## Common Mistakes to Avoid

❌ **Bad:**
```
Updated files
Fixed bug
WIP
asdfgh
```

✅ **Good:**
```
feat(auth): add password reset functionality
fix(api): handle edge case in payment processing
docs: clarify installation steps
refactor(database): optimize user query performance
```

## Quick Reference

| When you... | Use type... | Example |
|-------------|-------------|---------|
| Add a new feature | `feat` | `feat(ui): add dark mode toggle` |
| Fix a bug | `fix` | `fix(auth): prevent token expiration crash` |
| Update documentation | `docs` | `docs: add API endpoint examples` |
| Refactor code | `refactor` | `refactor(database): simplify query logic` |
| Improve performance | `perf` | `perf(api): cache frequent queries` |
| Add/update tests | `test` | `test: add integration tests for auth` |
| Update dependencies | `build` | `build: upgrade React to v18` |
| Update CI config | `ci` | `ci: add automated deployment` |
| Format/style changes | `style` | `style: apply ESLint rules` |
| Miscellaneous tasks | `chore` | `chore: remove unused files` |

## Interactive Commit Tool

For easier commit message creation, you can use commitizen:

```bash
npm install -g commitizen
commitizen init cz-conventional-changelog --save-dev --save-exact
```

Then use `git cz` instead of `git commit` for an interactive prompt.
