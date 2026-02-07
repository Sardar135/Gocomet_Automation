import { APIRequestContext } from '@playwright/test';

export class APIUtils {
    baseURL: string;
    request: APIRequestContext;

    constructor(baseURL: string, request: APIRequestContext) {
        this.baseURL = baseURL;
        this.request = request;
    }

    /**
     * Make a GET request
     * @param endpoint - API endpoint (e.g., '/posts')
     * @returns Promise containing the response
     */
    async get(endpoint: string) {
        const response = await this.request.get(`${this.baseURL}${endpoint}`);
        return response;
    }

    /**
     * Make a POST request
     * @param endpoint - API endpoint (e.g., '/posts')
     * @param data - Request body data
     * @returns Promise containing the response
     */
    async post(endpoint: string, data: any) {
        const response = await this.request.post(`${this.baseURL}${endpoint}`, {
            data: data,
        });
        return response;
    }

    /**
     * Make a PUT request
     * @param endpiont - API endpoint (e.g., '/posts/1')
     * @param data - Request body data
     * @returns Promise containing the respnse
     */
    async put(endpoint: string, data: any) {
        const response = await this.request.put(`${this.baseURL}${endpoint}`, {
            data: data,
        });
        return response;
    }

    /**
     * Make a DELETE request
     * @param endpoint - API endpoint (e.g., '/posts/1')
     * @returns Promise containig the response
     */
    async delete(endpoint: string) {
        const response = await this.request.delete(`${this.baseURL}${endpoint}`);
        return response;
    }
}
