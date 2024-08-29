

import Api from "@/utils/request";



export const getLeaderList = () => {
    return Api.get<any, any>("/api/leader")
}



export const addLeader = <T = any>(data: T) => {
    return Api.post<T, any>("/api/leader", data)
}



export const updateLeader = <T = any>(id: string, data: T) => {
    return Api.put<T, any>(`/api/leader/${id}`, data)
}



export const deleteLeader = (id: string) => {
    return Api.delete<any, any>(`/api/leader/${id}`)
}