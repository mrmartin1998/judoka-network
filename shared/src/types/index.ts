// ============================================
// ENUMS
// ============================================

export enum BeltColor {
  WHITE = 'WHITE',
  YELLOW = 'YELLOW',
  ORANGE = 'ORANGE',
  GREEN = 'GREEN',
  BLUE = 'BLUE',
  BROWN = 'BROWN',
  BLACK_1DAN = 'BLACK_1DAN',
  BLACK_2DAN = 'BLACK_2DAN',
  BLACK_3DAN = 'BLACK_3DAN',
  BLACK_4DAN = 'BLACK_4DAN',
  BLACK_5DAN = 'BLACK_5DAN',
  BLACK_6DAN = 'BLACK_6DAN',
  BLACK_7DAN = 'BLACK_7DAN',
  BLACK_8DAN = 'BLACK_8DAN',
  BLACK_9DAN = 'BLACK_9DAN',
  BLACK_10DAN = 'BLACK_10DAN',
}

export enum VerificationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DISPUTED = 'DISPUTED',
  REJECTED = 'REJECTED',
}

// ============================================
// USER & AUTHENTICATION
// ============================================

export interface User {
  id: string;
  email: string;
  username: string;
  googleId?: string | null;
  avatar?: string | null;
  bio?: string | null;
  location?: string | null;
  currentBelt: BeltColor;
  currentDan?: number | null;
  createdAt: Date;
  updatedAt: Date;
  academyId?: string | null;
}

// ============================================
// ACADEMY / DOJO
// ============================================

export interface Academy {
  id: string;
  name: string;
  location: string;
  instructor?: string | null;
  website?: string | null;
  createdAt: Date;
}

// ============================================
// BELT PROGRESSION
// ============================================

export interface BeltProgression {
  id: string;
  userId: string;
  beltColor: BeltColor;
  danRank?: number | null;
  promotedAt: Date;
  promotedBy?: string | null;
  certificateUrl?: string | null;
  notes?: string | null;
  createdAt: Date;
}

// ============================================
// VERIFICATION
// ============================================

export interface Verification {
  id: string;
  beltProgressionId: string;
  verifierId: string;
  verifiedUserId: string;
  status: VerificationStatus;
  comment?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================
// ACHIEVEMENTS
// ============================================

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  criteria: string; // JSON string
  createdAt: Date;
}

export interface UserAchievement {
  id: string;
  userId: string;
  achievementId: string;
  earnedAt: Date;
}

// ============================================
// DTOs & API TYPES
// ============================================

// Auth DTOs
export interface LoginDTO {
  email: string;
  password?: string;
  googleToken?: string;
}

export interface RegisterDTO {
  email: string;
  username: string;
  password?: string;
  googleToken?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
}

// Profile DTOs
export interface UpdateProfileDTO {
  username?: string;
  bio?: string;
  location?: string;
  avatar?: string;
  academyId?: string | null;
}

// Belt Progression DTOs
export interface CreateBeltProgressionDTO {
  beltColor: BeltColor;
  danRank?: number | null;
  promotedAt: Date | string;
  promotedBy?: string;
  certificateUrl?: string;
  notes?: string;
}

export interface BeltProgressionWithVerifications extends BeltProgression {
  verifications: Verification[];
  user: Pick<User, 'id' | 'username' | 'avatar'>;
}

// Verification DTOs
export interface CreateVerificationDTO {
  beltProgressionId: string;
  status: VerificationStatus;
  comment?: string;
}

export interface VerificationWithUsers extends Verification {
  verifier: Pick<User, 'id' | 'username' | 'avatar'>;
  verifiedUser: Pick<User, 'id' | 'username' | 'avatar'>;
  beltProgression: BeltProgression;
}

// Search & Discovery DTOs
export interface SearchUsersDTO {
  query?: string;
  beltColor?: BeltColor;
  academyId?: string;
  location?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

// User Profile with Relations
export interface UserProfile extends User {
  academy?: Academy | null;
  beltHistory: BeltProgression[];
  achievements: UserAchievement[];
}

// API Response wrapper
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Health Check
export interface HealthCheck {
  status: 'ok' | 'error';
  timestamp: string;
  database?: 'connected' | 'disconnected';
}
