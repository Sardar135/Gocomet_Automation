import { test, expect } from "../../fixtures";
const postData = require('../../testData/postData.json');

test.describe('New API Test', () => {

    test('useer should be able to create a new post @api', async ({apiUtils}) => {
        const postDataWithRandomId = {
            ...postData[0],
            userId: Math.floor(Math.random() * 1000000),
        };

        const response = await apiUtils.post('/posts', postDataWithRandomId);

        expect(response.status()).toBe(201);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({
            userId: postDataWithRandomId.userId,
            title: postDataWithRandomId.title,
            body: postDataWithRandomId.body,
        });
    });

    test('user should be able to get the posts data @api', async ({apiUtils}) => {
        const response = await apiUtils.get('/posts');
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toBeInstanceOf(Array);
        expect(responseBody.length).toBeGreaterThan(0);
    });

    test('user should be able to update the post data @api', async ({apiUtils}) => {
        const updatedData = {
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1,
        };

        const response = await apiUtils.put('/posts/1', updatedData);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        expect(responseBody).toMatchObject({
            id: 1,
            ...updatedData,
        });
    });

    test('user should be able to delete the post data @api', async ({apiUtils}) => {
        const response = await apiUtils.delete('/posts/1');
        expect(response.status()).toBe(200);
    });
});