import { setupAllureEnvironment } from '../utils/allure-setup';

async function globalSetup() {
  // Setup Allure environment files
  setupAllureEnvironment();

  console.log('Global setup completed');
}

export default globalSetup;
