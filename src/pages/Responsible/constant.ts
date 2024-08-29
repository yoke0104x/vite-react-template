

import { ProColumns } from "@ant-design/pro-components";
export interface Item {
    id: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
    updatedAt: string;
}

export const columns: ProColumns<Item>[] = [
    {
        title: 'key',
        dataIndex: 'index',
        valueType: 'index',
        align: 'center',
    },
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
    },
    {
        title: 'Created At',
        dataIndex: 'createdAt',
        valueType: 'date',
    },
]