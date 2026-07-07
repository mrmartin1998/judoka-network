// Application constants

export const BELT_COLORS = {
  WHITE: 'White',
  YELLOW: 'Yellow',
  ORANGE: 'Orange',
  GREEN: 'Green',
  BLUE: 'Blue',
  BROWN: 'Brown',
  BLACK: 'Black',
} as const;

export const DAN_RANKS = {
  MIN: 1,
  MAX: 10,
} as const;

export const VERIFICATION_THRESHOLD = {
  VOTES_REQUIRED: 3,
  CONFIRMATION_PERCENTAGE: 66,
} as const;

export const ACHIEVEMENT_CATEGORIES = {
  TRAINING: 'training',
  SOCIAL: 'social',
  COMPETITION: 'competition',
  MILESTONE: 'milestone',
} as const;
