import IHttpClient from "../../interfaces/IHttpClient";

export default class HttpClientStub implements IHttpClient {
    private requests: string[] = [];

    private response: any = {};

    private error?: Error;

    public setResponse(response: any) {
        this.response = response;
    }

    public setError(error: Error) {
        this.error = error;
    }

    private pushRequest(url: string) {
        this.requests = this.requests.concat(url);
    }

    async get<T>(url: string) {
        this.pushRequest(url);
        if (this.error)
            throw this.error;
        return Promise.resolve(<T>this.response);
    }

    public get requestUrls() {
        return this.requests;
    }
}
