import axios from 'axios';

export default class HttpClient {
    private instance = axios.create({
        baseURL: process.env.SPACEX_URL,
    });

    async get<T>(route: string): Promise<T> {
       const { data } = await this.instance.get(route);
       return data;
    }
}
