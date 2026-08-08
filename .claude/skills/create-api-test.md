# Skill: Create API Test

Create API tests using Playwright's request context.

## Usage
```
/create-api-test <endpoint-name>
```

## Instructions
1. Create test file in `src/tests/api/<name>.spec.ts`
2. Use Playwright's `request` fixture
3. Add proper assertions for status codes and response body
4. Include Allure decorators

## Template
```typescript
import { test, expect } from '@playwright/test';
import * as allure from 'allure-playwright';

const BASE_URL = 'https://tutorialsninja.com/demo/index.php';

test.describe('API: <Endpoint Name>', () => {
  test.beforeEach(async () => {
    await allure.epic('API');
    await allure.feature('<Feature>');
  });

  test('should GET <resource>', async ({ request }) => {
    await allure.story('GET Request');
    await allure.severity('critical');

    const response = await request.get(`${BASE_URL}?route=api/endpoint`);

    await allure.step('Verify status code', async () => {
      expect(response.status()).toBe(200);
    });

    await allure.step('Verify response body', async () => {
      const body = await response.json();
      expect(body).toHaveProperty('key');
    });
  });

  test('should POST <resource>', async ({ request }) => {
    await allure.story('POST Request');
    await allure.severity('critical');

    const response = await request.post(`${BASE_URL}?route=api/endpoint`, {
      data: {
        key: 'value'
      }
    });

    expect(response.status()).toBe(201);
  });
});
```

## Common Assertions
```typescript
expect(response.status()).toBe(200);
expect(response.ok()).toBeTruthy();
expect(await response.json()).toMatchObject({});
expect(response.headers()['content-type']).toContain('application/json');
```
