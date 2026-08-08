# Skill: Project Status

Get current project status and test coverage.

## Usage
```
/project-status
```

## Instructions
1. Read `graphify-out/GRAPH_REPORT.md` for structure
2. List existing page objects
3. List existing test suites
4. Show test counts per category
5. Identify gaps in coverage

## Quick Commands
```bash
# View project structure
cat graphify-out/GRAPH_REPORT.md

# Count tests
find src/tests -name "*.spec.ts" | wc -l

# List all page objects
ls src/pages/

# List all test files
find src/tests -name "*.spec.ts"

# Update graph
graphify . --update
```

## Coverage Areas
| Area | Page Object | UI Tests | API Tests | E2E Tests |
|------|-------------|----------|-----------|-----------|
| Auth | LoginPage, RegisterPage, AccountPage | login, register, logout | - | - |
| Search | SearchPage | - | - | - |
| Products | ProductPage | - | - | - |
| Cart | CartPage | - | - | - |
| Home | HomePage | - | - | - |

## Next Steps
- Add search/product UI tests
- Add cart functionality tests
- Create API tests
- Create E2E purchase flow test
