import Api from "@/utils/request"



export const sendEmail = <T = any>(data: T) => {
    return Api.post<T, any>("/api/send/email", data)
}