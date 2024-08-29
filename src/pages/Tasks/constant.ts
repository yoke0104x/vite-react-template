

import { ProColumns } from "@ant-design/pro-components";
export interface Item {
    id: string;
    userId: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    participantId_list: any;
    leader_info: any;
    address: string;
    date: string;
    leaderId: string;
    participantIds: string[];
}

export const columns: ProColumns<Item>[] = [
    {
        title: 'key',
        dataIndex: 'index',
        valueType: 'index',
        align: 'center',
    },
    {
        title: 'Related Event',
        dataIndex: ["activity_info", "name"],
    },
    {
        title: 'Title',
        dataIndex: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
    },
    {
        title: 'Deadline',
        dataIndex: "deadline",
    },
    {
        title: 'Participant Names',
        dataIndex: ['assignee_info', 'name'],
    },
]