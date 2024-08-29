

import { create } from 'zustand'


interface UserInfoState {
    id: string;
    username: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
}

type UserSate = {
    data: UserInfoState | null;
    setUserInfo: (userInfo: UserInfoState) => void;
}

export const useUserStore = create<UserSate>((set) => ({
    data: null,
    setUserInfo: (userInfo: UserInfoState) => {
        set({ data: userInfo })
    }
}))