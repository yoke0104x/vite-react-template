import Api from "@/utils/request";



export const getEventList = (params: any) => {
    return Api.get<any, any>("/api/activity", {
        params
    })
}



export const addEvent = <T = any>(data: T) => {
    return Api.post<T, any>("/api/activity", data)
}



export const updateEvent = <T = any>(id: string, data: T) => {
    return Api.put<T, any>(`/api/activity/${id}`, data)
}



export const deleteEvent = (id: string) => {
    return Api.delete<any, any>(`/api/activity/${id}`)
}



export const getEventDetail = (id: string) => {
    return Api.get<any, any>(`/api/activity/${id}`)
}



export const getRecentEvent = () => {
    return Api.get<any, any>("api/activity/get/upcoming")
}