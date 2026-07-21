// ============================================
// JUDO BELT SYSTEM
// ============================================

export const BELT_COLORS = {
  WHITE: 'White',
  YELLOW: 'Yellow',
  ORANGE: 'Orange',
  GREEN: 'Green',
  BLUE: 'Blue',
  BROWN: 'Brown',
  BLACK_1DAN: '1st Dan (Black)',
  BLACK_2DAN: '2nd Dan (Black)',
  BLACK_3DAN: '3rd Dan (Black)',
  BLACK_4DAN: '4th Dan (Black)',
  BLACK_5DAN: '5th Dan (Black)',
  BLACK_6DAN: '6th Dan (Black)',
  BLACK_7DAN: '7th Dan (Red & White)',
  BLACK_8DAN: '8th Dan (Red & White)',
  BLACK_9DAN: '9th Dan (Red)',
  BLACK_10DAN: '10th Dan (Red)',
} as const;

export const BELT_ORDER = [
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
  'BLACK_10DAN',
] as const;

export const DAN_RANKS = {
  MIN: 1,
  MAX: 10,
} as const;

// ============================================
// VERIFICATION SYSTEM
// ============================================

export const VERIFICATION_THRESHOLD = {
  VOTES_REQUIRED: 3,
  CONFIRMATION_PERCENTAGE: 66,
  DISPUTE_THRESHOLD: 2, // Number of disputes to flag for review
} as const;

export const VERIFICATION_STATUS = {
  PENDING: 'Pending Review',
  APPROVED: 'Verified',
  DISPUTED: 'Disputed',
  REJECTED: 'Rejected',
} as const;

// ============================================
// ACHIEVEMENTS
// ============================================

export const ACHIEVEMENT_CATEGORIES = {
  TRAINING: 'training',
  SOCIAL: 'social',
  COMPETITION: 'competition',
  MILESTONE: 'milestone',
  PROFILE: 'profile',
} as const;

// Predefined achievements
export const ACHIEVEMENTS = {
  FIRST_BELT: {
    code: 'FIRST_BELT',
    name: 'First Promotion',
    description: 'Recorded your first belt promotion',
    category: 'milestone',
  },
  VERIFIED_BELT: {
    code: 'VERIFIED_BELT',
    name: 'Community Verified',
    description: 'Had your belt rank verified by the community',
    category: 'social',
  },
  FIVE_VERIFICATIONS: {
    code: 'FIVE_VERIFICATIONS',
    name: 'Helpful Judoka',
    description: 'Verified 5 other practitioners',
    category: 'social',
  },
  BLACK_BELT: {
    code: 'BLACK_BELT',
    name: 'Shodan',
    description: 'Achieved 1st Dan (Black Belt)',
    category: 'milestone',
  },
  PROFILE_COMPLETE: {
    code: 'PROFILE_COMPLETE',
    name: 'Profile Master',
    description: 'Completed your profile with bio, location, and academy',
    category: 'profile',
  },
} as const;

// ============================================
// PAGINATION
// ============================================

export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const;

// ============================================
// API ROUTES
// ============================================

export const API_ROUTES = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    GOOGLE: '/auth/google',
    REFRESH: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },
  USERS: {
    ME: '/users/me',
    PROFILE: '/users/:id',
    UPDATE: '/users/me',
    SEARCH: '/users/search',
  },
  BELTS: {
    LIST: '/belts',
    CREATE: '/belts',
    BY_USER: '/belts/user/:userId',
    BY_ID: '/belts/:id',
  },
  VERIFICATIONS: {
    CREATE: '/verifications',
    BY_BELT: '/verifications/belt/:beltId',
    MY_VERIFICATIONS: '/verifications/me',
  },
  ACADEMIES: {
    LIST: '/academies',
    BY_ID: '/academies/:id',
    CREATE: '/academies',
  },
  ACHIEVEMENTS: {
    LIST: '/achievements',
    MY_ACHIEVEMENTS: '/achievements/me',
  },
} as const;

// ============================================
// VALIDATION RULES
// ============================================

export const VALIDATION = {
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
    PATTERN: /^[a-zA-Z0-9_-]+$/,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  PASSWORD: {
    MIN_LENGTH: 8,
    MAX_LENGTH: 128,
  },
  BIO: {
    MAX_LENGTH: 500,
  },
  COMMENT: {
    MAX_LENGTH: 1000,
  },
} as const;
