<<<<<<< HEAD
# Judoka Network 🥋

A modern judo belt verification and social network platform. Built with TypeScript, React, NestJS, and PostgreSQL.

## 🎯 Project Overview

Judoka Network is a clone of Beltchecker (BJJ belt verification platform) but designed specifically for **Judo** practitioners. It provides community-based belt verification, training tracking, competition records, and social features for the global judo community.

### Why This Project?

- **Portfolio piece** - Demonstrates full-stack TypeScript development
- **Learning journey** - Expanding from MongoDB to PostgreSQL
- **Real-world application** - Solving a genuine need in the judo community
- **Modern architecture** - Monorepo with shared types, proper separation of concerns

## ✨ Features

### MVP (Version 1) - Current Focus
- ✅ Google OAuth authentication
- ✅ User profiles with belt progression history
- ✅ Community-based belt verification system
- ✅ Basic achievement badges
- ✅ Public profile pages
- ✅ User search (by name, belt, academy)
- ✅ Belt distribution statistics

### Version 2 (Planned)
- Training log & analytics
- Competition/medal tracking
- Profile walls (comments/social features)
- Photo gallery uploads
- Events system
- Enhanced statistics & dashboards

### Version 3 (Future)
- Forum/community discussions
- Academy management system
- Instructional content
- Digital ID cards/certificates
- Advanced analytics

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Query

**Backend:**
- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Passport (Google OAuth)
- Socket.io (real-time features)

**Shared:**
- TypeScript types/interfaces
- Validation schemas
- Constants

**DevOps:**
- Vercel (frontend deployment)
- Railway/Render (backend deployment)
- PostgreSQL (Supabase recommended)
- npm workspaces (monorepo)

## 📁 Project Structure

```
judoka-network/
├── frontend/          # React application
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # NestJS API
│   ├── src/
│   ├── prisma/
│   └── package.json
├── shared/            # Shared TypeScript code
│   ├── types/
│   ├── constants/
│   └── package.json
├── .github/           # GitHub workflows & templates
├── package.json       # Root workspace config
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- PostgreSQL database
- Google OAuth credentials

### Installation

1. Clone the repository
```bash
git clone https://github.com/mrmartin1998/judoka-network.git
cd judoka-network
```

2. Install dependencies (all workspaces)
```bash
npm install
```

3. Set up environment variables
```bash
# Frontend (.env in frontend/)
cp frontend/.env.example frontend/.env

# Backend (.env in backend/)
cp backend/.env.example backend/.env
```

Edit the `.env` files with your configuration:
- Database connection string
- Google OAuth credentials
- API URLs
- JWT secrets

4. Run database migrations
```bash
cd backend
npx prisma migrate dev
```

5. Start development servers
```bash
# From root - starts all workspaces
npm run dev

# Or individually:
cd frontend && npm run dev  # Frontend on http://localhost:5173
cd backend && npm run dev   # Backend on http://localhost:3000
```

## 📦 Available Scripts

### Root Level
- `npm run dev` - Start all workspaces in development mode
- `npm run build` - Build all workspaces
- `npm run test` - Run tests across all workspaces
- `npm run lint` - Lint all workspaces
- `npm run format` - Format code with Prettier
- `npm run typecheck` - Type-check all TypeScript code

### Frontend
- `npm run dev` - Start Vite dev server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint frontend code

### Backend
- `npm run dev` - Start NestJS in watch mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run prisma:studio` - Open Prisma Studio
- `npm run prisma:migrate` - Run database migrations

## 🧪 Running Tests

```bash
# All workspaces
npm test

# Specific workspace
npm test --workspace=frontend
npm test --workspace=backend
```

## 🌍 Environment Variables

### Frontend
- `VITE_API_URL` - Backend API URL
- `VITE_GOOGLE_CLIENT_ID` - Google OAuth client ID

### Backend
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret for JWT tokens
- `GOOGLE_CLIENT_ID` - Google OAuth client ID
- `GOOGLE_CLIENT_SECRET` - Google OAuth secret
- `FRONTEND_URL` - Frontend URL for CORS
- `PORT` - Server port (default: 3000)

## 🚢 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Railway/Render)
```bash
cd backend
npm run build
# Deploy to Railway or Render
```

## 🤝 Contributing

Contributions are welcome! This is primarily a portfolio/learning project, but feel free to:
- Report bugs
- Suggest features
- Submit pull requests

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on the development process.

## 📋 Development Workflow

- **Branch strategy**: GitFlow (main/develop/feature/bugfix)
- **Commit convention**: Conventional Commits (`feat:`, `fix:`, `docs:`, etc.)
- **Code style**: ESLint + Prettier
- **Type safety**: Strict TypeScript mode

See [COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md) for commit message guidelines.

## 🗺️ Roadmap

- [x] Project initialization and monorepo setup
- [ ] Database schema design
- [ ] Authentication system (Google OAuth)
- [ ] User profile CRUD
- [ ] Belt progression tracking
- [ ] Community verification system
- [ ] Search and filtering
- [ ] Basic statistics dashboard
- [ ] Deployment setup

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Martin Emil Brabenec**
- GitHub: [@mrmartin1998](https://github.com/mrmartin1998)

## 🙏 Acknowledgements

- Inspired by [Beltchecker](https://beltchecker.com) - BJJ belt verification platform
- Built as a portfolio project to demonstrate full-stack skills
- Part of my learning journey

## 📸 Screenshots

_Coming soon - Project under active development_

---

**Status**: 🚧 Under Development (MVP Phase)  
**Started**: July 2026  
**Tech Focus**: TypeScript, React, NestJS, PostgreSQL, Monorepo Architecture

🥋 Building the future of judo community platforms!
=======
# GitHub Resources Library

Your one-stop resource folder for setting up professional GitHub projects. No more hunting through old repos for that perfect `.gitignore` or issue template!

## 📁 What's Inside

### Quick Access Files
- **[QUICK_START_GUIDE.md](QUICK_START_GUIDE.md)** - Start here! Complete checklist for new projects
- **[GIT_COMMANDS_CHEATSHEET.md](GIT_COMMANDS_CHEATSHEET.md)** - All the git commands you'll need
- **[COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md)** - Write better commit messages

### Project Management Guides
- **[GITHUB_PROJECT_SETUP.md](GITHUB_PROJECT_SETUP.md)** - GitHub Projects, automation, workflows
- **[Project-Organization-and-Execution-Manual.md](Project-Organization-and-Execution-Manual.md)** - Labels, sprints, solo dev tips

### Templates Folder
```
templates/
├── gitignore/           # .gitignore for different stacks
│   ├── nodejs.gitignore
│   ├── python.gitignore
│   ├── nextjs.gitignore
│   ├── react-vite.gitignore
│   └── general.gitignore
├── licenses/            # Common open source licenses
│   ├── MIT.txt
│   ├── APACHE-2.0.txt
│   ├── GPL-3.0.txt
│   └── LICENSE-GUIDE.md
├── README-template.md
└── CONTRIBUTING-template.md
```

### .github Folder (Copy to Your Projects)
```
.github/
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   ├── feature_request.md
│   └── task.md
├── workflows/
│   └── ci.yml
├── BRANCH_STRATEGY.md
├── CODE_REVIEW_CHECKLIST.md
└── pull_request_template.md
```

## 🚀 How to Use

### For a New Project

1. **Start with the Quick Start Guide**
   ```bash
   # Read this first
   cat QUICK_START_GUIDE.md
   ```

2. **Copy what you need**
   ```bash
   # Example: Setting up a Node.js project
   cp templates/gitignore/nodejs.gitignore ../my-new-project/.gitignore
   cp templates/README-template.md ../my-new-project/README.md
   cp templates/licenses/MIT.txt ../my-new-project/LICENSE
   cp -r .github ../my-new-project/.github
   ```

3. **Customize files** with your project details

4. **Commit and push**
   ```bash
   git add .
   git commit -m "chore: initial project setup"
   git push -u origin develop
   ```

### Daily Workflow

- **Need a git command?** → Check [GIT_COMMANDS_CHEATSHEET.md](GIT_COMMANDS_CHEATSHEET.md)
- **Forgot commit format?** → See [COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md)
- **Setting up labels?** → Reference [GITHUB_PROJECT_SETUP.md](GITHUB_PROJECT_SETUP.md)

## 📊 Label System (Unified)

We use a 4-level severity system for bugs:

### Bug Severity
- `severity: critical` (red) - Blocking core functionality
- `severity: high` (orange) - Major feature disruption
- `severity: medium` (yellow) - Minor disruptions
- `severity: low` (green) - Cosmetic issues

### Enhancement Priority
- `priority: must-have` - Essential features
- `priority: nice-to-have` - Nice but not required
- `priority: future-feature` - Planned for later

### Type Labels
- `type: feature` - New functionality
- `type: bug` - Bug fixes
- `type: enhancement` - Improvements
- `type: documentation` - Docs only
- `type: task` - General tasks

See [GITHUB_PROJECT_SETUP.md](GITHUB_PROJECT_SETUP.md) for complete label list.

## 🎯 Common Tasks

### Starting a New Feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/amazing-feature
# ... code ...
git add .
git commit -m "feat: add amazing feature"
git push -u origin feature/amazing-feature
```

### Fixing a Bug
```bash
git checkout develop
git pull origin develop
git checkout -b bugfix/fix-login
# ... fix ...
git add .
git commit -m "fix: resolve login validation issue"
git push -u origin bugfix/fix-login
```

### After PR Merge
```bash
git checkout develop
git pull origin develop
git branch -d feature/amazing-feature
git push origin --delete feature/amazing-feature
```

## 📚 Complete File Index

| File | Purpose |
|------|---------|
| [QUICK_START_GUIDE.md](QUICK_START_GUIDE.md) | Step-by-step new project setup |
| [GIT_COMMANDS_CHEATSHEET.md](GIT_COMMANDS_CHEATSHEET.md) | Git command reference |
| [COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md) | Commit message standards |
| [GITHUB_PROJECT_SETUP.md](GITHUB_PROJECT_SETUP.md) | GitHub Projects configuration |
| [Project-Organization-and-Execution-Manual.md](Project-Organization-and-Execution-Manual.md) | Task management system |
| [.github/BRANCH_STRATEGY.md](.github/BRANCH_STRATEGY.md) | GitFlow workflow guide |
| [.github/CODE_REVIEW_CHECKLIST.md](.github/CODE_REVIEW_CHECKLIST.md) | PR review checklist |
| [templates/README-template.md](templates/README-template.md) | Professional README template |
| [templates/CONTRIBUTING-template.md](templates/CONTRIBUTING-template.md) | Contribution guidelines |

## 💡 Pro Tips

1. **Bookmark this folder** - You'll reference it constantly
2. **Keep it updated** - Found something missing? Add it!
3. **Share with your team** - Everyone should use the same standards
4. **Use the checklists** - Don't skip steps
5. **Customize as needed** - Not every project needs everything

## 🔧 Customization

Feel free to modify these templates for your needs:

- Add your own `.gitignore` patterns
- Customize issue templates for your workflow
- Add project-specific labels
- Create your own checklists

Just remember to update this README when you make changes!

## 📖 Recommended Reading Order

If this is your first time:

1. [QUICK_START_GUIDE.md](QUICK_START_GUIDE.md) - Set up your first project
2. [.github/BRANCH_STRATEGY.md](.github/BRANCH_STRATEGY.md) - Learn the workflow
3. [COMMIT_CONVENTIONS.md](COMMIT_CONVENTIONS.md) - Write good commits
4. [GIT_COMMANDS_CHEATSHEET.md](GIT_COMMANDS_CHEATSHEET.md) - Git reference
5. [Project-Organization-and-Execution-Manual.md](Project-Organization-and-Execution-Manual.md) - Stay organized

## 🎓 Learning Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Docs](https://docs.github.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Choose a License](https://choosealicense.com/)
- [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow)

## 🆘 Need Help?

- **Git issues?** → Check [GIT_COMMANDS_CHEATSHEET.md](GIT_COMMANDS_CHEATSHEET.md)
- **Setup questions?** → Read [QUICK_START_GUIDE.md](QUICK_START_GUIDE.md)
- **Workflow confusion?** → See [.github/BRANCH_STRATEGY.md](.github/BRANCH_STRATEGY.md)
- **Still stuck?** → Google it, you got this! 💪

---

**Last Updated:** December 28, 2025
**Maintained by:** You (keep this up to date!)

Happy coding! 🚀
>>>>>>> 27aad181 (chore: initial project structure with GitHub workflow files)
