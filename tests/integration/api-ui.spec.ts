import { test, expect } from '@playwright/test';
import { request } from '@playwright/test';

test('API + UI integration', async ({ page }) => {
    const apiContext = await request.newContext({
        baseURL: 'https://jsonplaceholder.typicode.com',
    });

    // 1. API
    const response = await apiContext.get('/users/1');
    const user = await response.json();

    // 2. UI
    await page.goto('https://jsonplaceholder.typicode.com/users/1');

    // 3. Validación
    await expect(page.locator('body')).toContainText(user.name);
});