-- Judoka Network - Manual Database Setup
-- Run this SQL in Supabase SQL Editor to bypass IPv6 migration issues
-- Dashboard → SQL Editor → New Query → Paste & Run

-- ============================================
-- ENUMS
-- ============================================

CREATE TYPE "BeltColor" AS ENUM (
  'WHITE',
  'YELLOW',
  'ORANGE',
  'GREEN',
  'BLUE',
  'BROWN',
  'BLACK_1DAN',
  'BLACK_2DAN',
  'BLACK_3DAN',
  'BLACK_4DAN',
  'BLACK_5DAN',
  'BLACK_6DAN',
  'BLACK_7DAN',
  'BLACK_8DAN',
  'BLACK_9DAN',
  'BLACK_10DAN'
);

CREATE TYPE "VerificationStatus" AS ENUM (
  'PENDING',
  'APPROVED',
  'DISPUTED',
  'REJECTED'
);

-- ============================================
-- TABLES
-- ============================================

-- Academies
CREATE TABLE "academies" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "instructor" TEXT,
  "website" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Users
CREATE TABLE "users" (
  "id" TEXT PRIMARY KEY,
  "email" TEXT UNIQUE NOT NULL,
  "username" TEXT UNIQUE NOT NULL,
  "googleId" TEXT UNIQUE,
  "avatar" TEXT,
  "bio" TEXT,
  "location" TEXT,
  "currentBelt" "BeltColor" NOT NULL,
  "currentDan" INTEGER,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "academyId" TEXT,
  CONSTRAINT "users_academyId_fkey" FOREIGN KEY ("academyId") REFERENCES "academies"("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- Belt Progressions
CREATE TABLE "belt_progressions" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "beltColor" "BeltColor" NOT NULL,
  "danRank" INTEGER,
  "promotedAt" TIMESTAMP(3) NOT NULL,
  "promotedBy" TEXT,
  "certificateUrl" TEXT,
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "belt_progressions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Verifications
CREATE TABLE "verifications" (
  "id" TEXT PRIMARY KEY,
  "beltProgressionId" TEXT NOT NULL,
  "verifierId" TEXT NOT NULL,
  "verifiedUserId" TEXT NOT NULL,
  "status" "VerificationStatus" NOT NULL,
  "comment" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "verifications_beltProgressionId_fkey" FOREIGN KEY ("beltProgressionId") REFERENCES "belt_progressions"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "verifications_verifierId_fkey" FOREIGN KEY ("verifierId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "verifications_verifiedUserId_fkey" FOREIGN KEY ("verifiedUserId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Achievements
CREATE TABLE "achievements" (
  "id" TEXT PRIMARY KEY,
  "name" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "icon" TEXT NOT NULL,
  "criteria" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- User Achievements
CREATE TABLE "user_achievements" (
  "id" TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "achievementId" TEXT NOT NULL,
  "earnedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "user_achievements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "user_achievements_achievementId_fkey" FOREIGN KEY ("achievementId") REFERENCES "achievements"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- ============================================
-- INDEXES
-- ============================================

CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
CREATE UNIQUE INDEX "users_googleId_key" ON "users"("googleId");
CREATE UNIQUE INDEX "user_achievements_userId_achievementId_key" ON "user_achievements"("userId", "achievementId");

-- ============================================
-- SUCCESS MESSAGE
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '✅ Database schema created successfully!';
  RAISE NOTICE 'Next step: Run "npx prisma generate" in your backend folder';
END $$;
