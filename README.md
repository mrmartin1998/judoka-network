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
