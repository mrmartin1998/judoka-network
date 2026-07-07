// User types
export interface User {
  id: string;
  email: string;
  name: string;
  profilePhoto?: string;
  currentBelt: BeltRank;
  academy?: string;
  bio?: string;
  location?: string;
  verified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Belt system
export enum BeltColor {
  WHITE = 'WHITE',
  YELLOW = 'YELLOW',
  ORANGE = 'ORANGE',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  BROWN = 'BROWN',
  BLACK = 'BLACK',
}

export interface BeltRank {
  color: BeltColor;
  degree?: number; // For dan ranks (1-10)
  stripes?: number; // For kyu ranks
}

// Promotion history
export interface Promotion {
  id: string;
  userId: string;
  belt: BeltRank;
  date: Date;
  academy?: string;
  instructor?: string;
  location?: string;
  notes?: string;
  certificatePhoto?: string;
}

// Verification
export interface Verification {
  id: string;
  userId: string;
  promotionId: string;
  voterId: string;
  vote: 'confirm' | 'dispute';
  comment?: string;
  createdAt: Date;
}

// Achievement
export interface Achievement {
  id: string;
  code: string;
  name: string;
  description: string;
  icon: string;
  category: 'training' | 'social' | 'competition' | 'milestone';
}

// User Achievement
export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  earnedAt: Date;
}
