import Enums from "@/enums";
import LocalStorage from '@/utils/LocalStorage';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { history } from "./history";
import { message } from "antd";
type AxiosRequestConfigWithNoInterceptors<T = any> = AxiosRequestConfig<T> & {
    noInterceptors?: boolean;
};

export const getEntryId = () => LocalStorage.getItem('entryInfo')?.id;


class Api {

    public request;

    constructor(options?: any) {
        this.request = axios.create(options);


        this.request.interceptors.request.use((config: AxiosRequestConfig) => {
            const tokenKey = LocalStorage.getItem('token');
            config.headers = {
                Authorization: `Bearer ${tokenKey}`,
            };

            return config;
        });

        const reBack = () => {
            history.push('/user/login');
        }


        this.request.interceptors.response.use(
            async (response: AxiosResponse) => {

                if ((response.config as any).noInterceptors) {
                    return response.data;
                }

                const code = response?.data?.code;
                const data = response?.data;
                if (code === '40101') {
                    message.error('login failed, please try again');
                    reBack();
                    return;
                }

                if (
                    code === Enums.ResultCodeEnums.FAIL
                ) {

                }

                if (
                    code === Enums.ResultCodeEnums.TOKEN_ERROR ||
                    code === Enums.ResultCodeEnums.TOKEN_INVALID ||
                    code === Enums.ResultCodeEnums.NOT_LOGIN
                ) {

                }

                return response.data;
            },
            (error) => {
                if (error.response?.status === 401) {
                    if (error.response.data.code === Enums.ResultCodeEnums.NOT_LOGIN) {
                        message.error('Please login first');
                        reBack();
                    }

                    if (
                        error.response.data.code === Enums.ResultCodeEnums.TOKEN_ERROR ||
                        error.response.data.code === Enums.ResultCodeEnums.TOKEN_INVALID
                    ) {
                        message.error('Token error, please login again');
                        reBack();
                    }
                }
                return Promise.reject(error);
            },
        );
    }

    public get<P, T>(
        url: string,
        config?: AxiosRequestConfigWithNoInterceptors<P>,
    ): ResponsePromise<T> {
        return this.request.get(url, config);
    }

    public post<P, T>(
        url: string,
        data?: P,
        config?: AxiosRequestConfigWithNoInterceptors<P>,
    ): ResponsePromise<T> {
        return this.request.post(url, data, config);
    }

    public put<P, T>(
        url: string,
        data?: P,
        config?: AxiosRequestConfigWithNoInterceptors<P>,
    ): ResponsePromise<T> {
        return this.request.put(url, data, config);
    }

    public delete<P, T>(
        url: string,
        config?: AxiosRequestConfigWithNoInterceptors<P>,
    ): ResponsePromise<T> {
        return this.request.delete(url, config);
    }
}
export default new Api({
    timeout: 30000,
});