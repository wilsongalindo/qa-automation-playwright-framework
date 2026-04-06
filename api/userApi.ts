import { request } from '@playwright/test';

export class UserApi {
    async getUsers() {
        const apiContext = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com',
        });

        const response = await apiContext.get('/users');

        return response;
    }
}