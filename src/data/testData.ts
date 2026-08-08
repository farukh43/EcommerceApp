export const testData = {
  // Existing registered user for login tests
  validUser: {
    email: 'farukh43@gmail.com',
    password: 'farukh43@gmail.com',
  },

  // Invalid credentials for negative tests
  invalidUser: {
    email: 'invalid@example.com',
    password: 'wrongpassword',
  },

  // Products available on the site
  products: {
    macbook: 'MacBook',
    iphone: 'iPhone',
    samsungGalaxy: 'Samsung Galaxy',
    canonEOS: 'Canon EOS',
    hpLP3065: 'HP LP3065',
    imac: 'iMac',
  },

  searchTerms: {
    valid: 'mac',
    invalid: 'xyzabc123',
    partial: 'phone',
  },

  couponCodes: {
    valid: 'DISCOUNT10',
    invalid: 'INVALID123',
  },

  shipping: {
    country: 'United Kingdom',
    region: 'Aberdeenshire',
    postcode: 'AB10 1AB',
  },
};

export const generateRandomEmail = (): string => {
  return `test${Date.now()}${Math.floor(Math.random() * 1000)}@example.com`;
};

export const generateUserData = () => {
  return {
    firstName: 'Test',
    lastName: 'User',
    email: generateRandomEmail(),
    telephone: '1234567890',
    password: 'Test@123',
  };
};
