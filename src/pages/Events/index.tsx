import { ActionType, ProTable } from "@ant-design/pro-components";
import { Button, message, Space } from "antd";
import { columns, Item } from "./constant";
import { DownOutlined, PlusOutlined, UpOutlined } from "@ant-design/icons";
import { events } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
import { useRef } from "react";



const Events = () => {
    const location = useLocationRewrite();
    const actionRef = useRef<ActionType>();
    const optionColumns = columns.concat({
        title: 'Option',
        align: 'center',
        search: false,
        render: (_, record) => {
            return <Space size={12}>
                <a
                    key="editable"
                    onClick={() => {
                        location.navigate(`/events/detail?id=${record.id}`)
                    }}
                    className="text-[#308CBA]"
                >
                    Detail
                </a>
                <a
                    key="editable"
                    onClick={() => {
                        location.navigate(`/events/news?id=${record.id}`)
                    }}
                    className="text-[#308CBA]"
                >
                    Edit
                </a>
                <a
                    key="editable"
                    onClick={() => {
                        deleteParticipant(record.id);
                    }}
                    className="text-[#ff2222]"
                >
                    Delete
                </a>
            </Space>
        }
    });


    const deleteParticipant = async (id: string) => {
        const res = await events.deleteEvent(id)
        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
            message.success('Delete successfully');
            actionRef.current?.reload();
        } else {
            message.error("Delete failed")
        }
    }

    return <div className="mt-5">
        <ProTable<Item>
            columns={optionColumns}
            cardBordered
            actionRef={actionRef}
            request={async (params) => {
                console.log(params)
                const res = await events.getEventList(
                    {
                        date: params?.date,
                        name: params?.name,
                        leaderId: params?.leader_info?.name,
                        participantId: params?.participantId
                    }
                );
                if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                    return {
                        data: res.data,
                        success: true,
                        total: res.data.length
                    }
                }
                return {
                    data: [],
                    success: false,
                    total: 0
                }
            }}
            rowKey="id"
            search={{
                searchText: 'Search',
                resetText: 'Reset',
                collapseRender: (collapsed) => {
                    return collapsed ? <span className="flex">
                        Expand
                        <DownOutlined className="ml-2" />
                    </span> : <span className="flex">
                        Collapse
                        <UpOutlined className="ml-2" />
                    </span>
                }
            }}
            form={{
                labelWidth: 'auto',
                wrapperCol: { span: 16 },
            }}
            options={{}}
            pagination={{
                pageSize: 10,
            }}
            dateFormatter="string"
            headerTitle="Participant List"
            toolBarRender={() => [
                <Button
                    key="button"
                    icon={<PlusOutlined />}
                    onClick={() => {
                        location.navigate('/events/news')
                    }}
                    type="primary"
                >
                    New Events
                </Button>,
            ]}
        />
    </div>
}
export default Events