/**
 * Dynamically generates project structure for README
 * Run: npm run docs:structure
 */

const fs = require('fs');
const path = require('path');

const IGNORE_DIRS = [
  'node_modules',
  '.git',
  'allure-results',
  'allure-report',
  'reports',
  'graphify-out',
  'test-results',
  '.claude',
  'docs'
];

const IGNORE_FILES = [
  '.DS_Store',
  'Thumbs.db',
  '.env',
  'package-lock.json'
];

function generateTree(dir, prefix = '', isLast = true) {
  const name = path.basename(dir);
  const stats = fs.statSync(dir);
  let output = '';

  if (stats.isDirectory()) {
    const items = fs.readdirSync(dir)
      .filter(item => !IGNORE_DIRS.includes(item) && !IGNORE_FILES.includes(item))
      .sort((a, b) => {
        const aIsDir = fs.statSync(path.join(dir, a)).isDirectory();
        const bIsDir = fs.statSync(path.join(dir, b)).isDirectory();
        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;
        return a.localeCompare(b);
      });

    items.forEach((item, index) => {
      const itemPath = path.join(dir, item);
      const isLastItem = index === items.length - 1;
      const connector = isLastItem ? '└── ' : '├── ';
      const newPrefix = prefix + (isLastItem ? '    ' : '│   ');

      output += prefix + connector + item;

      if (fs.statSync(itemPath).isDirectory()) {
        output += '/\n';
        output += generateTree(itemPath, newPrefix, isLastItem);
      } else {
        output += '\n';
      }
    });
  }

  return output;
}

function main() {
  const rootDir = path.resolve(__dirname, '..');
  const projectName = path.basename(rootDir);

  console.log('Generating project structure...\n');

  let structure = projectName + '/\n';
  structure += generateTree(rootDir);

  console.log(structure);

  // Count statistics
  const countFiles = (dir) => {
    let count = { files: 0, dirs: 0, tests: 0, pages: 0 };
    const items = fs.readdirSync(dir);

    items.forEach(item => {
      if (IGNORE_DIRS.includes(item)) return;
      const itemPath = path.join(dir, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        count.dirs++;
        const sub = countFiles(itemPath);
        count.files += sub.files;
        count.dirs += sub.dirs;
        count.tests += sub.tests;
        count.pages += sub.pages;
      } else {
        count.files++;
        if (item.endsWith('.spec.ts')) count.tests++;
        if (item.endsWith('Page.ts')) count.pages++;
      }
    });

    return count;
  };

  const stats = countFiles(rootDir);
  console.log('\n--- Statistics ---');
  console.log(`Total Files: ${stats.files}`);
  console.log(`Total Directories: ${stats.dirs}`);
  console.log(`Test Files: ${stats.tests}`);
  console.log(`Page Objects: ${stats.pages}`);
}

main();
