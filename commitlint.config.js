module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'frontend',
        'backend',
        'shared',
        'auth',
        'profile',
        'verification',
        'belt',
        'academy',
        'search',
        'stats',
        'api',
        'ui',
        'database',
        'config',
        'deps'
      ]
    ]
  }
};
