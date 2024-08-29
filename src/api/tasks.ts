

import Api from '@/utils/request';



export const getTaskList = () => {
    return Api.get<any, any>('/api/task');
}



export const addTask = <T = any>(data: T) => {
    return Api.post<T, any>('/api/task', data);
}



export const updateTask = <T = any>(id: string, data: T) => {
    return Api.put<T, any>(`/api/task/${id}`, data);
}



export const deleteTask = (id: string) => {
    return Api.delete<any, any>(`/api/task/${id}`);
}



export const getTaskDetail = (id: string) => {
    return Api.get<any, any>(`/api/task/${id}`);
}