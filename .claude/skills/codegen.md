# Skill: Generate Test Code

Use Playwright's codegen to record browser interactions.

## Usage
```
/codegen [url]
```

## Instructions
1. Run Playwright codegen to record interactions
2. Copy generated code
3. Refactor into Page Object pattern
4. Add to appropriate test file

## Command
```bash
# Default URL
npm run codegen

# Custom URL
npx playwright codegen https://tutorialsninja.com/demo/index.php?route=account/login
```

## After Recording
1. Copy the generated locators to Page Object
2. Convert actions to Page Object methods
3. Create test using the page object
4. Add Allure decorators
5. Run `/graphify . --update`

## Tips
- Use `--save-storage=auth.json` to save login state
- Use `--load-storage=auth.json` to reuse login state
- Use `--viewport-size=1280,720` for specific viewport
- Use `--device="iPhone 13"` for mobile testing
