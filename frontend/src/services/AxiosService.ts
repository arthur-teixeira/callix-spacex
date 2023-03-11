import axios from 'axios';

export default class AxiosService {
    private instance = axios.create({
        baseURL: process.env.BACKEND_URL,
    });

    async get<T>(route: string): Promise<T> {
       const { data } = await this.instance.get(route);
       return data;
    }
}
