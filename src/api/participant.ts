

import Api from "@/utils/request";




export const getParticipantList = () => {
    return Api.get<any, any>("/api/participant")
}



export const addParticipant = <T = any>(data: T) => {
    return Api.post<T, any>("/api/participant", data)
}



export const updateParticipant = <T = any>(id: string, data: T) => {
    return Api.put<T, any>(`/api/participant/${id}`, data)
}



export const deleteParticipant = (id: string) => {
    return Api.delete<any, any>(`/api/participant/${id}`)
}