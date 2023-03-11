import axios from 'axios';
import IHttpClient from '../interfaces/IHttpClient';

export default class HttpClient implements IHttpClient {
    private instance = axios.create({
        baseURL: process.env.SPACEX_URL,
    });

    async get<T>(route: string): Promise<T> {
       const { data } = await this.instance.get(route);
       return data;
    }
}
