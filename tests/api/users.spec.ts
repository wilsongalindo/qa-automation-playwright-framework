import { test, expect } from '@playwright/test';
import { UserApi } from '../../api/userApi';

test('should get users', async () => {
    const userApi = new UserApi();

    const response = await userApi.getUsers();

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
});