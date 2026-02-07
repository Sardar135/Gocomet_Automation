import { APIRequestContext } from "@playwright/test";

export class APIUtils {
  baseURL: string;
  request: APIRequestContext;

  constructor(baseURL: string, request: APIRequestContext) {
    this.baseURL = baseURL;
    this.request = request;
  }

  async get(endpoint: string) {
    const response = await this.request.get(`${this.baseURL}${endpoint}`);
    return response;
  }

  async post(endpoint: string, data: any) {
    const response = await this.request.post(`${this.baseURL}${endpoint}`, {
      data: data,
    });
    return response;
  }

  async put(endpoint: string, data: any) {
    const response = await this.request.put(`${this.baseURL}${endpoint}`, {
      data: data,
    });
    return response;
  }

  async delete(endpoint: string) {
    const response = await this.request.delete(`${this.baseURL}${endpoint}`);
    return response;
  }
}
