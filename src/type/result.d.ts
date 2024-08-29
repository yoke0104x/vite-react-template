


declare global {
    interface Result<T = any> {
        data: T;
        code: number;
        message: string;
    }


    type ResponsePromise<T> = Promise<Result<T>>;
}
export { };