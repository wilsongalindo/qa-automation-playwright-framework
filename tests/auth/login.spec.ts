import { test, expect } from '../../fixtures/baseTest';

test('user should login successfully', async ({ loginPage, page }) => {
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory/);
});