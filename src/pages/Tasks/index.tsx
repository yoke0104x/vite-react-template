import { ActionType, ProTable } from "@ant-design/pro-components";
import { Button, message, Space } from "antd";
import { columns, Item } from "./constant";
import { PlusOutlined } from "@ant-design/icons";
import { events, tasks } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
import { useRef } from "react";



const Task = () => {
    const location = useLocationRewrite();
    const actionRef = useRef<ActionType>();
    const optionColumns = columns.concat({
        title: 'Option',
        align: 'center',
        render: (_, record) => {
            return <Space size={12}>
                <a
                    onClick={() => {
                        location.navigate(`/tasks/detail?id=${record.id}`)
                    }}
                    className="text-[#308CBA]"
                >
                    Detail
                </a>
                <a
                    onClick={() => {
                        location.navigate(`/tasks/news?id=${record.id}`)
                    }}
                    className="text-[#308CBA]"
                >
                    Edit
                </a>
                <a
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
            request={async () => {
                const res = await tasks.getTaskList();
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
            search={false}
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
                        location.navigate('/tasks/news')
                    }}
                    type="primary"
                >
                    New Task
                </Button>,
            ]}
        />
    </div>
}
export default Task