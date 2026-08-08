import * as fs from 'fs';
import * as path from 'path';

export function setupAllureEnvironment() {
  const resultsDir = path.join(process.cwd(), 'allure-results');

  // Create allure-results directory if it doesn't exist
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
  }

  // Copy environment.properties
  const envSource = path.join(process.cwd(), 'allure-environment.properties');
  const envDest = path.join(resultsDir, 'environment.properties');
  if (fs.existsSync(envSource)) {
    fs.copyFileSync(envSource, envDest);
  }

  // Copy categories.json
  const categoriesSource = path.join(process.cwd(), 'allure-categories.json');
  const categoriesDest = path.join(resultsDir, 'categories.json');
  if (fs.existsSync(categoriesSource)) {
    fs.copyFileSync(categoriesSource, categoriesDest);
  }
}
