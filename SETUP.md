# Quick Setup Guide

## ✅ Initial Setup Complete!

Your Judoka Network monorepo is ready to go! Here's what was set up:

### 📁 Structure Created
- ✅ **frontend/** - React + Vite + TypeScript
- ✅ **backend/** - NestJS + PostgreSQL + Prisma
- ✅ **shared/** - Shared TypeScript types & constants
- ✅ **. github/** - Issue templates, PR templates, workflows
- ✅ Root npm workspace configuration

### 🔧 Configuration Files
- ✅ TypeScript configs for each workspace
- ✅ ESLint + Prettier + Commitlint setup
- ✅ Environment variable templates (`.env.example`)
- ✅ Git workflow with main/develop branches

### 📝 Documentation
- ✅ Comprehensive README.md
- ✅ CONTRIBUTING.md with development guidelines
- ✅ COMMIT_CONVENTIONS.md for commit standards
- ✅ MIT License

---

## 🚀 Next Steps

### 1. Install Dependencies
```bash
# Install all workspace dependencies
npm install
```

### 2. Set Up Environment Variables
```bash
# Frontend
cp frontend/.env.example frontend/.env
# Edit frontend/.env with your Google Client ID and API URL

# Backend
cp backend/.env.example backend/.env
# Edit backend/.env with your database URL, JWT secret, and Google OAuth credentials
```

### 3. Set Up Database
```bash
# You'll need PostgreSQL running
# Recommended: Use Supabase for free PostgreSQL hosting
# Or install PostgreSQL locally

# Then create the database schema (we'll do this next)
cd backend
npx prisma init  # Already done
# Design your schema in prisma/schema.prisma
npx prisma migrate dev --name init
```

### 4. Get Google OAuth Credentials
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add to your `.env` files:
   - `GOOGLE_CLIENT_ID`
   - `GOOGLE_CLIENT_SECRET` (backend only)

### 5. Start Development
```bash
# From root directory

# Option A: Start all workspaces together
npm run dev

# Option B: Start individually in separate terminals
cd frontend && npm run dev  # http://localhost:5173
cd backend && npm run dev   # http://localhost:3000
```

---

## 📦 Workspace Commands

### Root Level
- `npm run dev` - Start all workspaces
- `npm run build` - Build all workspaces
- `npm run lint` - Lint all workspaces
- `npm run format` - Format with Prettier
- `npm run typecheck` - Type-check TypeScript

### Frontend Workspace
```bash
npm run dev --workspace=frontend
npm run build --workspace=frontend
npm run lint --workspace=frontend
```

### Backend Workspace
```bash
npm run dev --workspace=backend
npm run build --workspace=backend
npm run test --workspace=backend
```

### Shared Workspace
```bash
npm run build --workspace=shared  # Compile TypeScript types
npm run dev --workspace=shared    # Watch mode
```

---

## 🌿 Git Workflow

### Default Branch: `develop`
All development happens on `develop` branch.

### Creating a Feature
```bash
git checkout develop
git pull origin develop
git checkout -b feature/your-feature-name

# ... make changes ...

git add .
git commit -m "feat(scope): add amazing feature"
git push -u origin feature/your-feature-name

# Then create PR: feature/your-feature-name → develop
```

### Commit Message Format
```
<type>(<scope>): <subject>

<optional body>

<optional footer>
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

**Scopes**: `frontend`, `backend`, `shared`, `auth`, `profile`, `verification`, etc.

**Example**:
```bash
git commit -m "feat(auth): implement Google OAuth login"
git commit -m "fix(backend): resolve CORS issue"
git commit -m "docs: update README installation steps"
```

---

## 🗂️ Project Structure

```
judoka-network/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom hooks
│   │   ├── services/       # API calls
│   │   └── types/          # Frontend-specific types
│   ├── public/             # Static assets
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── src/
│   │   ├── modules/        # Feature modules
│   │   ├── common/         # Shared backend code
│   │   └── config/         # Configuration
│   ├── prisma/
│   │   └── schema.prisma   # Database schema
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── shared/
│   ├── src/
│   │   ├── types/          # Shared TypeScript types
│   │   └── constants/      # Shared constants
│   ├── package.json
│   └── tsconfig.json
│
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── pull_request_template.md
│
├── .gitignore
├── package.json            # Root workspace config
├── README.md
├── CONTRIBUTING.md
├── COMMIT_CONVENTIONS.md
└── LICENSE
```

---

## 🎯 MVP Features to Build

### Phase 1 - Authentication & Profiles
- [ ] Google OAuth login
- [ ] User registration/profile creation
- [ ] Profile editing
- [ ] Profile photo upload

### Phase 2 - Belt System
- [ ] Belt progression tracking
- [ ] Add promotion history
- [ ] View promotion timeline
- [ ] Upload belt certificates

### Phase 3 - Verification
- [ ] Community voting system
- [ ] Verify belt ranks
- [ ] Dispute resolution
- [ ] Verified badge display

### Phase 4 - Discovery
- [ ] Search users by name/belt/academy
- [ ] Filter and sort results
- [ ] Public profile pages
- [ ] Belt distribution statistics

---

## 📚 Resources

- [NestJS Docs](https://docs.nestjs.com/)
- [React Docs](https://react.dev/)
- [Prisma Docs](https://www.prisma.io/docs)
- [Vite Docs](https://vitejs.dev/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Frontend (Vite) default: 5173
# Backend (NestJS) default: 3000
# Change in .env files if needed
```

### TypeScript Errors in Shared Types
```bash
# Rebuild shared workspace
cd shared
npm run build

# Then restart your dev servers
```

### Database Connection Issues
```bash
# Check your DATABASE_URL in backend/.env
# Make sure PostgreSQL is running
# Test connection:
cd backend
npx prisma studio
```

---

**Happy coding!** 🥋 Let's build something awesome!
