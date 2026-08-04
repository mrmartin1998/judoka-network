# Judoka Network MVP Development Plan

## 🎯 PROGRESS TRACKER

**Last Updated:** August 3, 2026  
**Overall Completion:** 12/50+ tasks (24%) - *Updated after schema/types audit*  
**Current Sprint:** Phase 0 - Foundation & Cleanup  
**Target MVP Date:** September 2026

### ✅ COMPLETED TASKS
1. **Project Scaffolding** ✅
   - npm workspaces monorepo structure created
   - React 18 + Vite frontend initialized
   - NestJS backend initialized
   - Git workflow established (master/develop)
   - Documentation framework complete

2. **README Merge Conflict** ✅
   - Branch: `bugfix/readme`
   - Resolved merge conflict markers
   - Merged to develop successfully

3. **Duplicate Folder Cleanup** ✅
   - Branch: `chore/cleanup-duplicate-folders`
   - Deleted root-level frontend/, backend/, packages/
   - Updated documentation paths
   - Verified build pipeline works

4. **Database Schema Design** ✅
   - Branch: `feat/database-schema-design`
   - Complete Prisma schema with 6 models + 2 enums
   - TypeScript types in shared/src/types/
   - Constants with belt system, validation rules, API routes
   - Ready for commit

5. **Supabase Database Setup** ✅
   - Branch: `chore/setup-supabase-database`
   - Supabase project created (judoka-network-dev, North EU)
   - Database credentials configured in .env
   - 6 tables created: users, academies, belt_progressions, verifications, achievements, user_achievements
   - 2 enums: BeltColor (16 values), VerificationStatus (4 values)
   - Manual SQL schema execution (workaround for IPv6 Prisma migration issue)
   - Prisma Client v5.22.0 generated successfully
   - Connection verified via transaction pooler (IPv4)

6. **Testing Infrastructure Setup** ✅
   - Branch: `chore/testing-infrastructure` [ecef2e75]
   - Vitest v4.1.10 installed for both backend and frontend
   - Backend: Vitest + @nestjs/testing + Node environment
   - Frontend: Vitest + @testing-library/react + jsdom environment
   - Sample tests created and passing (2 backend, 2 frontend)
   - Test scripts configured in package.json files
   - Coverage reporting with v8 provider

**Note:** Schema design in Task 4 also included types, constants, and DTOs that satisfy requirements in Phases 1-3, 5. These have been marked as complete in their respective phases.

### 🔄 IN PROGRESS
- **None** - Ready to move to Task 0.5

### ⏳ NEXT UP
- **Task 0.5:** Environment variables setup (.env files)
- **Task 0.6:** Verify npm workspaces build pipeline

### ⏳ UP NEXT (This Week)
1. ✅ ~~Merge README fix PR~~
2. ✅ ~~Clean up duplicate folder structure~~
3. ✅ ~~Design Prisma database schema~~
4. ✅ ~~Set up Supabase database~~
5. ✅ ~~Set up testing infrastructure~~
6. ⏳ Configure environment variables properly (NEXT)
7. ⏳ Verify npm workspaces build pipeline

---

## 🗂️ DEVELOPMENT PHASES

### Phase 0: Foundation & Cleanup 🔄
**Goal:** Clean codebase, establish infrastructure  
**Status:** In Progress (90%)

- ✅ Fix README merge conflict
- ✅ Remove duplicate folders (root frontend/, backend/, packages/types/)
- ✅ Design complete Prisma schema (6 models, 2 enums, TypeScript types, constants)
- ✅ Set up Supabase PostgreSQL database (manual SQL schema, Prisma Client generated)
- ✅ Configure testing infrastructure (Vitest for both workspaces)
- ⏳ Set up environment variables properly
- ⏳ Verify npm workspaces build pipeline
- ⏳ Merge testing infrastructure to develop

### Phase 1: Authentication System ⏳
**Goal:** Google OAuth + JWT auth working end-to-end  
**Status:** Foundation Complete (15%)  
**Total Tasks:** 35 | **Estimated Time:** 9-10 hours

---

#### ✅ **SECTION A: Backend Setup & Configuration**

- [x] **Task 1.1**: Install auth packages (passport, @nestjs/passport, etc.) - **COMPLETE**
- [ ] **Task 1.2**: Create Auth Module Structure (10 min)
  - Generate NestJS auth module: `nest g module auth`
  - Generate auth controller: `nest g controller auth --no-spec`
  - Generate auth service: `nest g service auth --no-spec`
  - Import AuthModule in AppModule
- [ ] **Task 1.3**: Set Up Prisma Service (15 min)
  - Create `src/prisma/prisma.service.ts`
  - Create `src/prisma/prisma.module.ts`
  - Implement Prisma client connection
  - Export PrismaService for use in other modules

**Milestone 1 Checkpoint:** Backend structure ready for auth implementation

---

#### ⏳ **SECTION B: JWT Configuration**

- [ ] **Task 1.4**: Configure JWT Module (10 min)
  - Import JwtModule in AuthModule with async config
  - Read JWT_SECRET and JWT_EXPIRATION from .env
  - Register JWT as a provider
- [ ] **Task 1.5**: Create JWT Strategy (20 min)
  - Create `src/auth/strategies/jwt.strategy.ts`
  - Implement JWT validation logic
  - Extract user from JWT payload

---

#### ⏳ **SECTION C: Google OAuth Implementation**

- [ ] **Task 1.6**: Configure Google OAuth Strategy (25 min)
  - Create `src/auth/strategies/google.strategy.ts`
  - Configure Google OAuth with clientID, clientSecret, callback URL
  - Implement `validate()` method
- [ ] **Task 1.7**: Implement Google OAuth Flow - Part 1 (15 min)
  - Create `/auth/google` route (initiates OAuth)
  - Create `/auth/google/callback` route (handles redirect)
- [ ] **Task 1.8**: Implement Google OAuth Flow - Part 2 (30 min)
  - Implement `findOrCreateUser()` in AuthService
  - Check if user exists by googleId
  - Create new user if doesn't exist
  - Return user data

---

#### ⏳ **SECTION D: JWT Token Generation**

- [ ] **Task 1.9**: Implement JWT Token Generation (15 min)
  - Create `generateToken()` method in AuthService
  - Generate access token with 7-day expiry
  - Include user ID, email in payload
- [ ] **Task 1.10**: Create Login Response (10 min)
  - After Google OAuth success, generate JWT
  - Return `{ user, accessToken }` in AuthResponse format

**Milestone 2 Checkpoint:** Backend OAuth flow complete

---

#### ⏳ **SECTION E: Auth Guards & Middleware**

- [ ] **Task 1.11**: Create JWT Auth Guard (10 min)
  - Create `src/auth/guards/jwt-auth.guard.ts`
  - Extend `@nestjs/passport` AuthGuard
  - Use for protecting routes
- [ ] **Task 1.12**: Create User Decorator (10 min)
  - Create `src/auth/decorators/user.decorator.ts`
  - Custom decorator to extract user from request
  - Makes `@User() user` available in controllers

---

#### ⏳ **SECTION F: Auth Endpoints**

- [ ] **Task 1.13**: Create `/auth/me` Endpoint (10 min)
  - Protected route to get current user
  - Use JwtAuthGuard
  - Return user data from request
- [ ] **Task 1.14**: Create `/auth/logout` Endpoint (5 min)
  - Simple endpoint that returns success
  - Frontend will handle token deletion

---

#### ⏳ **SECTION G: Backend Testing**

- [ ] **Task 1.15**: Write Auth Service Tests (30 min)
  - Test `findOrCreateUser()` creates new user
  - Test `findOrCreateUser()` finds existing user
  - Test `generateToken()` creates valid JWT
- [ ] **Task 1.16**: Write Auth Controller Tests - E2E (30 min)
  - Test `/auth/google` initiates OAuth
  - Test `/auth/google/callback` returns token
  - Test `/auth/me` returns user when authenticated
  - Test `/auth/me` returns 401 when not authenticated

**Milestone 3 Checkpoint:** Backend fully functional with tests

---

#### ⏳ **SECTION H: Frontend Auth Context**

- [ ] **Task 1.17**: Create Auth Context & Provider (20 min)
  - Create `src/contexts/AuthContext.tsx`
  - Define `AuthContextType` interface
  - Create `AuthProvider` component
  - Implement state: `user`, `loading`, `isAuthenticated`
- [ ] **Task 1.18**: Create Auth Hook (10 min)
  - Create `src/hooks/useAuth.ts`
  - Export `useAuth()` hook that uses AuthContext
  - Throw error if used outside AuthProvider
- [ ] **Task 1.19**: Implement Token Storage (10 min)
  - Create `src/utils/tokenStorage.ts`
  - Functions: `setToken()`, `getToken()`, `removeToken()`
  - Use localStorage

---

#### ⏳ **SECTION I: Frontend Auth API Client**

- [ ] **Task 1.20**: Create Auth API Service (20 min)
  - Create `src/services/authService.ts`
  - Function: `loginWithGoogle(token)` - sends token to backend
  - Function: `getCurrentUser()` - fetches `/auth/me`
  - Function: `logout()` - calls `/auth/logout`
- [ ] **Task 1.21**: Add Auth Interceptor (20 min)
  - Create axios instance with interceptor
  - Automatically add `Authorization: Bearer {token}` header
  - Handle 401 responses (clear token, redirect to login)

---

#### ⏳ **SECTION J: Frontend Auth Logic**

- [ ] **Task 1.22**: Implement Login Function in AuthContext (20 min)
  - Add `login(googleToken)` function
  - Call backend API with Google token
  - Store JWT token
  - Set user state
- [ ] **Task 1.23**: Implement Logout Function (15 min)
  - Add `logout()` function
  - Remove token from localStorage
  - Clear user state
  - Redirect to login
- [ ] **Task 1.24**: Implement Auto-Login on App Load (20 min)
  - Check for existing token on mount
  - If token exists, fetch current user
  - Set authenticated state

**Milestone 4 Checkpoint:** Frontend auth logic complete

---

#### ⏳ **SECTION K: Google OAuth Button**

- [ ] **Task 1.25**: Install Google OAuth Library (10 min)
  - Install `@react-oauth/google`
  - Wrap app with `GoogleOAuthProvider`
  - Use `VITE_GOOGLE_CLIENT_ID` from .env
- [ ] **Task 1.26**: Create Google Login Button Component (25 min)
  - Create `src/components/GoogleLoginButton.tsx`
  - Use `useGoogleLogin()` hook
  - On success, send token to backend
  - Handle loading and error states

---

#### ⏳ **SECTION L: Auth Pages**

- [ ] **Task 1.27**: Create Login Page (20 min)
  - Create `src/pages/LoginPage.tsx`
  - Display Google login button
  - Show "Judoka Network" branding
  - Redirect to dashboard after login
- [ ] **Task 1.28**: Create Protected Route Wrapper (20 min)
  - Create `src/components/ProtectedRoute.tsx`
  - Check if user is authenticated
  - Redirect to `/login` if not authenticated
  - Show loading spinner while checking auth

---

#### ⏳ **SECTION M: Frontend Routing**

- [ ] **Task 1.29**: Set Up React Router (15 min)
  - Install `react-router-dom`
  - Create route structure in App.tsx
  - Routes: `/`, `/login`, `/dashboard`
- [ ] **Task 1.30**: Apply Protected Routes (10 min)
  - Wrap `/dashboard` with ProtectedRoute
  - Public routes: `/`, `/login`

**Milestone 5 Checkpoint:** Frontend UI complete

---

#### ⏳ **SECTION N: Frontend Testing**

- [ ] **Task 1.31**: Write Auth Context Tests (30 min)
  - Test login sets user and token
  - Test logout clears user and token
  - Test auto-login fetches user on mount
- [ ] **Task 1.32**: Write Component Tests (30 min)
  - Test GoogleLoginButton renders
  - Test LoginPage redirects after login
  - Test ProtectedRoute blocks unauthenticated users

---

#### ⏳ **SECTION O: Polish & Error Handling**

- [ ] **Task 1.33**: Add Loading States (20 min)
  - Loading spinner during login
  - Loading state in ProtectedRoute
  - Skeleton screens where appropriate
- [ ] **Task 1.34**: Add Error Handling (25 min)
  - Display error messages on login failure
  - Handle network errors gracefully
  - Toast notifications for auth actions
- [ ] **Task 1.35**: Add Zod Validation Schemas (20 min)
  - Create `shared/src/validators/auth.validator.ts`
  - Zod schemas for LoginDTO, RegisterDTO, AuthResponse
  - Use in backend validation

**Final Milestone:** Phase 1 Complete - Authentication system fully functional

---

**Completed Foundation (from Phase 0):**
- [x] Auth types (User, AuthResponse, LoginDTO) - in shared/src/types/index.ts
- [x] UpdateProfileDTO - in shared/src/types/index.ts
- [x] User model in Prisma (username, email, googleId, avatar)
- [x] CORS configuration - configured in main.ts
- [x] Environment variables configured

### Phase 2: User Profiles & Belt System (Week 4-5) ⏳
**Goal:** Users can create profiles and track belt progression  
**Status:** Database Schema Complete (15%)

**Note:** Database schema, types, and constants already implemented in Phase 0!

**Backend Tasks:**
- [ ] User module (CRUD operations)
- [ ] Profile endpoints (GET, PUT /api/users/:id)
- [ ] Belt progression endpoints (POST, GET /api/belts)
- [ ] Image upload for profile pictures (Cloudinary or Vercel Blob)
- [ ] Validation middleware
- [ ] Write profile API tests

**Frontend Tasks:**
- [ ] Profile view page
- [ ] Profile edit form
- [ ] Belt progression timeline component
- [ ] Add belt promotion form
- [ ] Image upload component
- [ ] Write profile component tests

**Shared Tasks:**
- [x] Profile types (UserProfile, BeltProgression) - **COMPLETE** (in shared/src/types/index.ts)
- [x] Belt system constants (BELT_COLORS, BELT_ORDER, DAN_RANKS) - **COMPLETE** (in shared/src/constants/index.ts)
- [x] CreateBeltProgressionDTO - **COMPLETE**
- [ ] Validation schemas (Zod validation needs implementation)

### Phase 3: Community Verification System (Week 6) ⏳
**Goal:** Users can verify each other's belt ranks  
**Status:** Database Schema Complete (10%)

**Note:** Verification model and VerificationStatus enum already implemented in Phase 0!

**Backend Tasks:**
- [ ] Verification endpoints (POST, GET, PATCH)
- [ ] Verification business logic (min votes, dispute handling)
- [ ] Notification system for verification requests
- [ ] Write verification API tests

**Frontend Tasks:**
- [ ] Verification request modal
- [ ] Verification badge component
- [ ] Verification history view
- [ ] Dispute resolution UI
- [ ] Write verification component tests

### Phase 4: Search & Discovery (Week 7) ⏳
**Goal:** Find users by name, belt, academy  
**Status:** Not Started (0%)

**Backend Tasks:**
- [ ] Search endpoint with filters (name, belt, academy, location)
- [ ] Pagination logic
- [ ] Belt distribution statistics endpoint
- [ ] Write search API tests

**Frontend Tasks:**
- [ ] Search page with filters
- [ ] User card component
- [ ] Search results list with pagination
- [ ] Belt distribution chart (Chart.js or Recharts)
- [ ] Write search component tests

### Phase 5: Achievements & Stats (Week 8) ⏳
**Goal:** Basic achievement badges and user statistics  
**Status:** Database Schema & Constants Complete (20%)

**Note:** Achievement models and constants already implemented in Phase 0!
- ✅ Achievement & UserAchievement models (in schema.prisma)
- ✅ ACHIEVEMENT_CATEGORIES constants
- ✅ Predefined ACHIEVEMENTS (5 achievements)

**Backend Tasks:**
- [ ] Achievement system logic
- [ ] User statistics endpoint
- [ ] Achievement unlock logic
- [ ] Write achievement tests

**Frontend Tasks:**
- [ ] Achievement badge grid
- [ ] Statistics dashboard
- [ ] Progress bars for achievements
- [ ] Write stats component tests

### Phase 6: Polish & Deployment (Week 8) ⏳
**Goal:** Production-ready MVP  
**Status:** Not Started (0%)

**Testing & Optimization:**
- [ ] Final testing (E2E with Playwright)
- [ ] Performance optimization
- [ ] Security audit (helmet, rate limiting)
- [ ] SEO meta tags
- [ ] Error boundaries
- [ ] Loading states and skeletons

**Deployment:**
- [ ] Deploy frontend to Vercel
- [ ] Deploy backend (Choose: Vercel, Railway, or Render)
- [ ] Configure production environment variables
- [ ] Set up production Supabase database
- [ ] Configure Prisma for production
- [ ] Set up monitoring (Sentry)

**Launch Prep:**
- [ ] Create demo account with mock data
- [ ] Take screenshots for README
- [ ] Update README with live demo link
- [ ] Create demo video (optional)

---

## 🚨 CRITICAL ISSUES & BLOCKERS

### Severity: Critical 🔴
**All critical blockers resolved! ✅**

~~1. **Duplicate Folder Structure**~~
   - **Status:** ✅ RESOLVED - Root-level folders deleted, clean `apps/` structure

~~2. **Empty Prisma Schema**~~
   - **Status:** ✅ RESOLVED - Complete schema with 6 models, 2 enums

~~3. **No Database Configured**~~
   - **Status:** ✅ RESOLVED - Supabase PostgreSQL configured and migrated

### Severity: High 🟠
~~1. **No Testing Infrastructure**~~
   - **Status:** ✅ RESOLVED - Vitest configured for both workspaces, tests passing

2. **Socket.io Not Needed for MVP**
   - **Issue:** Socket.io installed but not used
   - **Impact:** Unnecessary complexity
   - **Fix:** Remove Socket.io dependencies, add back in v2
   - **Status:** ⏳ Pending (deferred to v2)

### Severity: Medium 🟡
1. **Missing .env Files**
   - **Issue:** .env.example exists but no actual .env
   - **Impact:** Can't run dev servers
   - **Fix:** Create .env files with placeholder values
   - **Status:** ⏳ Pending

2. **CI/CD Workflow Incomplete**
   - **Issue:** GitHub Actions workflow exists but not configured
   - **Impact:** No automated testing on PR
   - **Fix:** Configure workflow after testing setup
   - **Status:** ⏳ Pending Phase 1

3. **Validation Strategy Unclear**
   - **Issue:** Both Zod and class-validator installed
   - **Impact:** Need to decide on single approach
   - **Recommendation:** Use class-validator for NestJS DTOs (better integration), Zod for shared validation schemas
   - **Status:** ⏳ Needs decision in Phase 1

---

## 📝 DETAILED TASK BREAKDOWN

### 🔧 PHASE 0 TASKS (THIS WEEK)

#### Task 0.1: Clean Up Duplicate Folders
**Branch:** `chore/cleanup-duplicate-folders`  
**Priority:** `severity: critical`  
**Estimated Time:** 30 minutes

**Steps:**
1. ✅ Verified `apps/frontend`, `apps/backend` have all the code
2. ✅ Deleted root-level `frontend/`, `backend/`, `packages/` folders
3. ✅ Updated documentation paths (README, CONTRIBUTING, SETUP)
4. ✅ Tested `npm run dev` - all workspaces start correctly
5. ⏳ Commit: `chore: remove duplicate folder structure`

**Acceptance Criteria:**
- ✅ Only `apps/` structure remains (frontend/, backend/, packages/ deleted)
- ✅ All npm workspaces still function (Vite started on port 5174)
- ✅ Documentation updated (README, CONTRIBUTING, SETUP)

---

#### Task 0.2: Database Schema Design
**Branch:** `feat/database-schema-design`  
**Priority:** `priority: must-have`  
**Estimated Time:** 2-3 hours

**Schema Models Needed:**

```prisma
// User & Auth
model User {
  id            String   @id @default(cuid())
  email         String   @unique
  username      String   @unique
  googleId      String?  @unique
  avatar        String?
  bio           String?
  location      String?
  currentBelt   BeltColor
  currentDan    Int?     // For black belts
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  // Relations
  beltHistory    BeltProgression[]
  givenVerifications Verification[] @relation("Verifier")
  receivedVerifications Verification[] @relation("Verified")
  academyId      String?
  academy        Academy? @relation(fields: [academyId], references: [id])
  achievements   UserAchievement[]
}

model Academy {
  id          String @id @default(cuid())
  name        String
  location    String
  instructor  String?
  website     String?
  createdAt   DateTime @default(now())
  users       User[]
}

model BeltProgression {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  beltColor   BeltColor
  danRank     Int?
  promotedAt  DateTime
  promotedBy  String?  // Instructor name
  certificateUrl String?
  notes       String?
  createdAt   DateTime @default(now())
  
  verifications Verification[]
}

model Verification {
  id                 String   @id @default(cuid())
  beltProgressionId  String
  beltProgression    BeltProgression @relation(fields: [beltProgressionId], references: [id])
  verifierId         String
  verifier           User     @relation("Verifier", fields: [verifierId], references: [id])
  verifiedUserId     String
  verifiedUser       User     @relation("Verified", fields: [verifiedUserId], references: [id])
  status             VerificationStatus
  comment            String?
  createdAt          DateTime @default(now())
  updatedAt          DateTime @updatedAt
}

model Achievement {
  id          String @id @default(cuid())
  name        String
  description String
  icon        String
  criteria    String  // JSON string
  createdAt   DateTime @default(now())
  
  userAchievements UserAchievement[]
}

model UserAchievement {
  id            String   @id @default(cuid())
  userId        String
  user          User     @relation(fields: [userId], references: [id])
  achievementId String
  achievement   Achievement @relation(fields: [achievementId], references: [id])
  earnedAt      DateTime @default(now())
  
  @@unique([userId, achievementId])
}

enum BeltColor {
  WHITE
  YELLOW
  ORANGE
  GREEN
  BLUE
  BROWN
  BLACK_1DAN
  BLACK_2DAN
  BLACK_3DAN
  BLACK_4DAN
  BLACK_5DAN
  BLACK_6DAN
  BLACK_7DAN
  BLACK_8DAN
  BLACK_9DAN
  BLACK_10DAN
}

enum VerificationStatus {
  PENDING
  APPROVED
  DISPUTED
  REJECTED
}
```

**Steps:**
1. ✅ Copy schema to `apps/backend/prisma/schema.prisma`
2. ✅ Run `npx prisma format`
3. ⏳ Create migration: `npx prisma migrate dev --name init-schema` (requires Supabase)
4. ⏳ Generate Prisma Client: `npx prisma generate` (after migration)
5. ✅ Create corresponding TypeScript types in `shared/src/types/`
6. ✅ Update constants in `shared/src/constants/`
7. ⏳ Commit: `feat(database): add complete Prisma schema for MVP`

**What's Been Created:**
- ✅ Complete Prisma schema with all 6 models (User, Academy, BeltProgression, Verification, Achievement, UserAchievement)
- ✅ Two enums (BeltColor with 16 values, VerificationStatus with 4 values)
- ✅ All relationships and foreign keys configured
- ✅ Cascade delete rules for data integrity
- ✅ TypeScript interfaces matching all models
- ✅ DTOs for API requests/responses
- ✅ Updated constants with belt system, achievements, validation rules

**Acceptance Criteria:**
- ✅ All 6 models defined in Prisma schema
- ✅ Relationships correct with proper cascade rules
- ⏳ Migration created successfully (needs database URL - Task 0.3)
- ⏳ Prisma Client generated (after migration - Task 0.3)
- ✅ TypeScript types match Prisma models
- ✅ DTOs created for API operations
- ✅ Constants updated with judo belt system

**Status:** ✅ CODE COMPLETE - Ready for commit

---

#### Task 0.3: Set Up Supabase Database
**Branch:** `chore/setup-supabase-database`  
**Priority:** `severity: critical`  
**Estimated Time:** 1 hour

**Steps:**
1. Go to [supabase.com](https://supabase.com)
2. Create new project: "judoka-network-dev"
3. Copy connection string
4. Add to `apps/backend/.env`:
   ```
   DATABASE_URL="postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres"
   ```
5. Test connection: `npx prisma db push`
6. Create production database: "judoka-network-prod"
7. Add production URL to Vercel environment variables (later)
8. Update `.env.example` with placeholder format
9. Commit: `chore: configure Supabase PostgreSQL database`

**Acceptance Criteria:**
- ✅ Dev database created
- ✅ Connection string works
- ✅ Prisma can connect
- ✅ `.env.example` updated

---

#### Task 0.4: Testing Infrastructure Setup ✅
**Branch:** `chore/testing-infrastructure` [ecef2e75]  
**Priority:** `priority: must-have`  
**Completed:** August 3, 2026

**DECISION: Used Vitest for both backend and frontend** (not Jest)
- Reasoning: Single test runner for monorepo, better Vite integration, faster execution
- Impact: Consistent testing patterns across workspaces, simpler CI/CD

**Backend Testing (NestJS + Vitest):**
1. Vitest v4.1.10 installed with @nestjs/testing
2. Create `apps/backend/test/jest.config.js`
3. Add test scripts to `apps/backend/package.json`:
   ```json
   {
     "scripts": {
       "test": "jest",
       "test:watch": "jest --watch",
       "test:cov": "jest --coverage",
       "test:e2e": "jest --config ./test/jest-e2e.json"
     }
   }
   ```
4. Create sample test: `apps/backend/src/app.controller.spec.ts`
5. Verify tests run: `npm test --workspace=@judoka-network/backend`

**Frontend Testing (Vitest + React Testing Library):**
1. Install dependencies:
   ```bash
   npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/ui --workspace=@judoka-network/frontend
   ```
2. Create `apps/frontend/vitest.config.ts`:
   ```typescript
   import { defineConfig } from 'vitest/config';
   import react from '@vitejs/plugin-react';
   import path from 'path';

   export default defineConfig({
     plugins: [react()],
     test: {
       globals: true,
       environment: 'jsdom',
       setupFiles: './vitest.setup.ts',
       css: true,
       coverage: {
         provider: 'v8',
         reporter: ['text', 'json', 'html'],
         exclude: [
           'node_modules/',
           'dist/',
           '**/*.spec.ts',
           '**/*.test.tsx',
         ],
       },
     },
     resolve: {
       alias: {
         '@': path.resolve(__dirname, './src'),
       },
     },
   });
   ```
3. Create `apps/frontend/vitest.setup.ts`:
   ```typescript
   import { expect, afterEach, vi } from 'vitest';
   import { cleanup } from '@testing-library/react';
   import * as matchers from '@testing-library/jest-dom/matchers';

   expect.extend(matchers);

   afterEach(() => {
     cleanup();
   });

   // Mock window.matchMedia
   Object.defineProperty(window, 'matchMedia', {
     writable: true,
     value: vi.fn().mockImplementation(query => ({
       matches: false,
       media: query,
       onchange: null,
       addListener: vi.fn(),
       removeListener: vi.fn(),
       addEventListener: vi.fn(),
       removeEventListener: vi.fn(),
       dispatchEvent: vi.fn(),
     })),
   });
   ```
4. Update `apps/frontend/package.json` scripts:
   ```json
   {
     "scripts": {
       "test": "vitest",
       "test:ui": "vitest --ui",
       "test:coverage": "vitest --coverage"
     }
   }
   ```
5. Create sample test: `apps/frontend/src/__tests__/App.test.tsx`
6. Verify tests run: `npm test --workspace=@judoka-network/frontend`

**Root Testing Scripts:**
Update root `package.json`:
```json
{
  "scripts": {
    "test": "npm run test --workspaces --if-present",
    "test:coverage": "npm run test:coverage --workspaces --if-present"
  }
}
```

**Commit:** ✅ `chore: implement vitest testing infrastructure for backend and frontend` [ecef2e75]

**Acceptance Criteria:**
- ✅ Backend tests run with Vitest (2 tests passing)
- ✅ Frontend tests run with Vitest (2 tests passing)
- ✅ Sample tests pass in both workspaces
- ✅ Coverage reports configured with v8 provider
- ✅ Root `npm test` runs all workspace tests
- ✅ Test scripts configured (test, test:watch, test:ui, test:cov)

**Status:** ✅ COMPLETE - Branch ready to merge to develop

---

#### Task 0.5: Environment Variables Setup
**Branch:** `chore/environment-setup`  
**Priority:** `severity: medium`  
**Estimated Time:** 30 minutes

**Frontend .env.example:**
```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# Google OAuth
VITE_GOOGLE_CLIENT_ID=your-google-client-id

# Environment
VITE_ENV=development
```

**Backend .env.example:**
```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/judoka_network

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRATION=7d

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/api/auth/google/callback

# Frontend URL (CORS)
FRONTEND_URL=http://localhost:5173

# Server
PORT=3000
NODE_ENV=development

# File Upload (Cloudinary or Vercel Blob)
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

**Steps:**
1. Create `.env` files from examples
2. Add placeholder values
3. Add `.env` to `.gitignore` (already done)
4. Document how to get Google OAuth credentials in README
5. Commit: `chore: set up environment variable templates`

**Acceptance Criteria:**
- ✅ Both .env.example files updated
- ✅ .env files created locally
- ✅ README documents how to get credentials

---

## 🎯 CURRENT SPRINT (Week 1)

### Phase 0 Progress (July 21 - August 3, 2026)
- [x] Fix README merge conflict
- [x] Clean up duplicate folders
- [x] Design & implement Prisma schema
- [x] Set up Supabase database
- [x] Configure testing infrastructure
- [ ] Set up environment variables (IN PROGRESS)
- [ ] Verify npm workspaces build pipeline
- [ ] Merge testing branch to develop

### Current Focus (August 3, 2026)
- [ ] Create plan document (this file)
- [ ] Clean up duplicate folders

**Tuesday:**
- [ ] Design Prisma schema
- [ ] Set up Supabase account
- [ ] Initial migration

**Wednesday:**
- [ ] Testing infrastructure (backend)
- [ ] Testing infrastructure (frontend)
- [ ] Write sample tests

**Thursday:**
- [ ] Environment variables setup
- [ ] Verify entire dev environment works
- [ ] Merge Phase 0 PRs

**Friday:**
- [ ] Start Phase 1: Auth module planning
- [ ] Google OAuth setup
- [ ] User model implementation

---

## 🚀 RISK ASSESSMENT

### High Risk ⚠️
1. **Timeline Too Aggressive**
   - **Risk:** 8 weeks might not be enough for full MVP
   - **Mitigation:** Prioritize core features, defer nice-to-haves to v2
   - **Backup Plan:** Extend to 10 weeks if needed

2. **Learning Curve (PostgreSQL + Prisma)**
   - **Risk:** First time using PostgreSQL (user used MongoDB before)
   - **Mitigation:** Follow Prisma docs closely, ask for help early
   - **Backup Plan:** Budget Buddy used different stack, can reference

3. **Google OAuth Complexity**
   - **Risk:** OAuth flow can be tricky
   - **Mitigation:** Use Passport strategy, follow NestJS docs
   - **Backup Plan:** Start with email/password if blocked, add OAuth later

### Medium Risk 🟡
1. **Verification System Complexity**
   - **Risk:** Business logic for "community verification" is complex
   - **Mitigation:** Start simple (3 votes = verified), iterate later
   - **Backup Plan:** Make verification optional for MVP

2. **Image Upload**
   - **Risk:** Need third-party service (Cloudinary or Vercel Blob)
   - **Mitigation:** Use Vercel Blob (simpler, same platform)
   - **Backup Plan:** Store URLs only, actual upload in v2

### Low Risk ✅
1. **Deployment**
   - **Risk:** Minimal - Vercel is straightforward
   - **Mitigation:** Deploy early and often

2. **Search Implementation**
   - **Risk:** Minimal - basic Prisma queries
   - **Mitigation:** PostgreSQL full-text search built-in

---

## 📚 TECHNICAL DECISIONS LOG

### Database: PostgreSQL + Prisma
**Why:** Portfolio demonstrates broader skill set than MongoDB, Prisma ORM is industry standard, type-safe queries

### Auth: JWT + Google OAuth
**Why:** JWT is stateless (scalable), Google OAuth reduces friction for users, matches Beltchecker

### Frontend State: React Context + React Query
**Why:** Context for auth state, React Query for server state caching, avoid Redux complexity for MVP

### Styling: TailwindCSS + shadcn/ui
**Why:** Already set up, rapid development, professional components, Budget Buddy proved success

### Monorepo: npm workspaces
**Why:** Demonstrates enterprise architecture, shared types between frontend/backend, clean separation, lightweight and built into npm

### Testing: Vitest + React Testing Library
**Why:** Fast, modern, TypeScript-first, better Vite integration than Jest, single test runner for monorepo

### Deployment: Vercel (frontend) + Railway/Render (backend)
**Why:** Vercel for frontend (optimal for React+Vite), Railway or Render for NestJS backend (better for long-running Node.js apps), free tiers available for both

### Real-time: Defer Socket.io to v2
**Why:** MVP doesn't need real-time, adds complexity, can add later for notifications

---

## 🎨 UI/UX WIREFRAME PRIORITIES

### High Priority Pages (MVP)
1. **Landing Page** - Hero with "Join the Judo Community" CTA
2. **Login/Register** - Google OAuth button prominent
3. **Dashboard** - User's belt progression, recent verifications
4. **Profile View** - Public profile with belt history timeline
5. **Profile Edit** - Form to update bio, academy, add belt promotion
6. **Search** - Filters for name, belt, academy, location
7. **Verification Request** - Modal to request/give verification

### Medium Priority (Can Simplify)
1. **Achievements** - Grid of badges
2. **Statistics** - Belt distribution chart

### Low Priority (v2)
1. **Training Log**
2. **Competition Tracking**
3. **Forum**
4. **Events**

---

## 💡 PARTNERSHIP EXPECTATIONS

### What I Will Flag 🚩

**Tech Debt:**
- ❌ "This code is hard to maintain"
- ❌ "We're repeating ourselves here"
- ❌ "This will break if we scale"

**Over-Engineering:**
- ❌ "This abstraction is unnecessary for MVP"
- ❌ "We're building features we don't need yet"
- ❌ "This pattern is too complex for the problem"

**Edge Cases:**
- ❌ "What if user enters empty string?"
- ❌ "What happens if API call fails?"
- ❌ "What if user has no academy?"

**Security Issues:**
- ❌ "This endpoint isn't protected"
- ❌ "We're not validating user input"
- ❌ "Passwords stored in plain text" (if any)

**Performance:**
- ❌ "This query will be slow with 1000+ users"
- ❌ "We're fetching too much data"
- ❌ "This component re-renders unnecessarily"

**UX Problems:**
- ❌ "No loading state"
- ❌ "Error message not helpful"
- ❌ "User can't tell what happened"

### What I Won't Do ✋

- ❌ **Make decisions for you** - I'll present options, you choose
- ❌ **Write code without explaining** - I'll teach, not just do
- ❌ **Skip testing** - Quality over speed
- ❌ **Ignore your questions** - Ask anything, anytime

---

## 📖 RESOURCES & REFERENCES

### Documentation
- [NestJS Docs](https://docs.nestjs.com/)
- [Prisma Docs](https://www.prisma.io/docs)
- [Passport Google OAuth](https://www.passportjs.org/packages/passport-google-oauth20/)
- [React Query Docs](https://tanstack.com/query/latest)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vitest Docs](https://vitest.dev/)

### Inspirations
- [Beltchecker.com](https://beltchecker.com) - Original BJJ platform
- Budget Buddy - Your previous project (structure reference)

### Judo Belt System Reference
**Kyu (Color Belts):**
1. White (6th Kyu)
2. Yellow (5th Kyu)
3. Orange (4th Kyu)
4. Green (3rd Kyu)
5. Blue (2nd Kyu)
6. Brown (1st Kyu)

**Dan (Black Belt Degrees):**
1. Shodan (1st Dan) - 16+ years old
2. Nidan (2nd Dan) - 2 years after 1st
3. Sandan (3rd Dan) - 3 years after 2nd
4. Yondan (4th Dan) - 4 years after 3rd
5. Godan (5th Dan) - 5 years after 4th
6. Rokudan (6th Dan) - 6 years after 5th
7. Shichidan (7th Dan) - 7 years after 6th
8. Hachidan (8th Dan) - 8 years after 7th
9. Kudan (9th Dan) - 9 years after 8th
10. Judan (10th Dan) - Extremely rare, honorary

---

## 🔄 UPDATE LOG

**July 21, 2026:**
- ✅ Initial plan created
- ✅ README merge conflict resolved
- Phase 0 in progress

**To be updated weekly...**

---

## 🎯 SUCCESS METRICS

### Technical Quality
- ✅ 80%+ test coverage
- ✅ Zero critical security vulnerabilities
- ✅ All TypeScript strict mode enabled
- ✅ Lighthouse score 90+ (Performance, Accessibility)
- ✅ Zero console errors/warnings in production

### Feature Completeness (MVP)
- ✅ User can sign up with Google
- ✅ User can create profile with belt history
- ✅ User can request/give belt verifications
- ✅ User can search for other judokas
- ✅ User can view belt statistics
- ✅ User can earn basic achievements

### Portfolio Readiness
- ✅ Professional README with screenshots
- ✅ Live demo deployed
- ✅ Demo account available
- ✅ Code is clean and documented
- ✅ GitHub has proper project structure

---

## 🚀 LET'S BUILD THIS! 🥋

Partner, we've got a solid plan. Let's execute it one task at a time, learn along the way, and build something you'll be proud to show employers.

**First task after merging README fix:** Clean up those duplicate folders!

Questions? Concerns? Adjustments needed? Let me know! 💪
