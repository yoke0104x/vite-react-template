


import Api from "@/utils/request";

export type CaptchaCodeSvgDataType = {
    captchaId?: 'string',
    captcha?: 'string'
}




export const getVerifyCode = () => {
    return Api.get<any, CaptchaCodeSvgDataType>("/api/user/captcha/90.66/40")
}

export type LoginDataType = {
    username: string,
    password: string,
    captcha: string,
    captchaId: string
}

export type LoginResultDataType = {
    token: string
}



export const login = <T = LoginDataType>(data: T) => {
    return Api.post<T, LoginResultDataType>("/api/user/login", data)
}



export const loginStatus = () => {
    return Api.get<any, boolean>("/api/user/status")
}

type RegisterDataType = {
    username: string,
    password: string,
    email: string,
    emailCode: string,
    phone?: string,
}



export const register = <T = RegisterDataType>(data: T) => {
    return Api.post<T, any>("/api/user/create", data)
}



export const getUserInfo = () => {
    return Api.get<any, any>("/api/user/info")
}



export const logout = () => {
    return Api.get<any, any>("/api/user/logout")
}



export const updateUserInfo = <T = any>(data: T) => {
    return Api.put<T, any>("/api/user/edit", data)
}

export const getUserList = () => {
    return Api.get<any, any>("/api/user/index")
}

export const createUser = (data: any) => {
    return Api.post<any, any>("/api/user/create", data)
}

export const deleteUser = (id: any) => {
    return Api.delete<any, any>(`/api/user/delete/${id}`)
}

export const updateUser = (id: any, data: any) => {
    return Api.put<any, any>(`/api/user/update/${id}`, data)
}

export const resetPassword = (id: any) => {
    return Api.get<any, any>(`/api/user/reset/${id}`)
}

export const adminCreateUser = (data: any) => {
    return Api.post<any, any>("/api/user/admin/create", data)
}