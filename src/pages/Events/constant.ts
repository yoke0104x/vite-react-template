

import { leader, participant } from "@/api";
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
        title: 'Name',
        dataIndex: 'name',
        fieldProps: {
            placeholder: 'Please enter the name'
        }
    },
    {
        title: 'Date',
        dataIndex: 'date',
        valueType: 'date',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        search: false,
    },
    {
        title: 'Responsible Name',
        dataIndex: ['leader_info', 'name'],
        valueType: "select",
        request: async () => {
            const res = await leader.getLeaderList();
            return res.data.map((item: any) => ({ label: item.name, value: item.id }));
        },
        fieldProps: {
            placeholder: 'Please select the responsible person'
        }
    },
    {
        title: 'Participant Names',
        renderText: (_, record) => {
            if (!record?.participantId_list) return ''
            return record?.participantId_list?.map((item: any) => item.name).join(', ')
        },
        dataIndex: 'participantId',
        valueType: 'select',
        fieldProps: {
            placeholder: 'Please select the participants'
        },
        request: async () => {
            const res = await participant.getParticipantList();
            return res.data.map((item: any) => ({ label: item.name, value: item.id }));
        },
    },
]