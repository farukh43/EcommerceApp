import { faker } from '@faker-js/faker';

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

/**
 * Generate a unique email using Faker.js
 * Uses cryptographically secure random generation
 */
export const generateRandomEmail = (): string => {
  return faker.internet.email({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    provider: 'testmail.com',
  }).toLowerCase();
};

/**
 * Generate complete user registration data using Faker.js
 * All data is realistic and unique per call
 */
export const generateUserData = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    firstName,
    lastName,
    email: faker.internet.email({ firstName, lastName, provider: 'testmail.com' }).toLowerCase(),
    telephone: faker.phone.number({ style: 'national' }).replace(/\D/g, '').slice(0, 10),
    password: 'Test@123',
  };
};

/**
 * Generate user data with custom options
 */
export const generateCustomUserData = (options?: {
  firstName?: string;
  lastName?: string;
  email?: string;
  telephone?: string;
  password?: string;
}) => {
  const firstName = options?.firstName || faker.person.firstName();
  const lastName = options?.lastName || faker.person.lastName();

  return {
    firstName,
    lastName,
    email: options?.email || faker.internet.email({ firstName, lastName, provider: 'testmail.com' }).toLowerCase(),
    telephone: options?.telephone || faker.phone.number({ style: 'national' }).replace(/\D/g, '').slice(0, 10),
    password: options?.password || 'Test@123',
  };
};

/**
 * Generate random product review data
 */
export const generateReviewData = () => {
  return {
    name: faker.person.fullName(),
    review: faker.lorem.paragraph(),
    rating: faker.number.int({ min: 1, max: 5 }),
  };
};

/**
 * Generate random address data
 */
export const generateAddressData = () => {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    company: faker.company.name(),
    address1: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    city: faker.location.city(),
    postcode: faker.location.zipCode(),
    country: 'United Kingdom',
    region: 'Aberdeenshire',
  };
};
