export const config = {
  baseURL: process.env.BASE_URL || 'https://tutorialsninja.com/demo/',
  credentials: {
    email: process.env.TEST_USER_EMAIL || '',
    password: process.env.TEST_USER_PASSWORD || '',
  },
  timeouts: {
    default: parseInt(process.env.DEFAULT_TIMEOUT || '30000'),
    short: 5000,
    long: 60000,
  },
};
