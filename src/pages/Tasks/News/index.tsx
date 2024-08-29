import { events, leader, participant, tasks } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
import { ProForm, ProFormDatePicker, ProFormInstance, ProFormSelect, ProFormText } from "@ant-design/pro-components";
import { Button, message } from "antd";
import dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";



const News = () => {
    const formRef = useRef<ProFormInstance<any>>();
    const location = useLocationRewrite();
    const id = location.query.get('id');
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (values: any) => {
        const newValues = {
            ...values,
            deadline: dayjs(values.deadline).format('YYYY-MM-DD'),
        }
        setLoading(true)
        if (id) {
            const res = await tasks.updateTask(id, newValues);
            if (res?.code == enums.ResultCodeEnums.SUCCESS) {
                message.success("update event success")
                location.navigate(-1)
            } else {
                message.error("update event failed")
            }
        } else {
            const res = await tasks.addTask(newValues);
            if (res?.code == enums.ResultCodeEnums.SUCCESS) {
                location.navigate(-1)
                message.success("create event success")
            } else {
                message.error("create event failed")
            }
        }
        setLoading(false)
    }

    useEffect(() => {
        (async () => {
            if (id) {
                const res = await tasks.getTaskDetail(id);
                if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                    formRef.current?.setFieldsValue({
                        ...res?.data,
                        deadline: dayjs(res.data.deadline),
                    })
                }
            }
        })()
    }, [id])

    return <div className="mt-10 bg-white rounded p-5">
        <div className="text-2xl font-bold text-center">{id ? 'Edit Task' : "Create New Task"}</div>
        <div className="mt-5 px-16 w-max mx-auto">
            <ProForm
                onFinish={async (values) => {
                    onSubmit(values)
                }}
                submitter={false}
                formRef={formRef}
                requiredMark={false}
            >
                <ProFormSelect
                    name="activityId"
                    label="Related Event"
                    placeholder="Please select related event"
                    rules={[{ required: true, message: 'Please select  related event' }]}
                    width={'xl'}
                    request={async () => {
                        const res = await events.getEventList();
                        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                            return res.data.map((item: any) => {
                                return {
                                    label: item.name,
                                    value: item.id
                                }
                            })
                        }
                        return []
                    }}
                />
                <ProFormText
                    name="title"
                    label="Task Title"
                    placeholder="Please enter task title"
                    rules={[{ required: true, message: 'Please enter task title' }]}
                    width={'xl'}
                />
                <ProFormText
                    name="description"
                    label="Task Description"
                    placeholder="Please enter task description"
                    rules={[{ required: true, message: 'Please enter task description' }]}
                    width={'xl'}
                />
                <ProFormDatePicker
                    name="deadline"
                    label="Deadline"
                    rules={[{ required: true, message: 'Please select deadline' }]}
                    placeholder="Please select deadline"
                    width={'xl'}
                />
                <ProFormSelect
                    name="assigneeId"
                    label="Assignee"
                    placeholder="Please select assignee"
                    rules={[{ required: true, message: 'Please select assignee' }]}
                    width={'xl'}
                    request={async () => {
                        const res = await leader.getLeaderList();
                        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                            return res.data.map((item: any) => {
                                return {
                                    label: item.name,
                                    value: item.id
                                }
                            })
                        }
                        return []
                    }}
                />

                <ProFormSelect
                    name="status"
                    label="Status"
                    placeholder="Please select status"
                    rules={[{ required: true, message: 'Please select status' }]}
                    width={'xl'}
                    options={[
                        {
                            label: 'Processed',
                            value: "1"
                        },
                        {
                            label: 'Pending processing',
                            value: "0"
                        },
                    ]}
                />
                <Button className="w-full" loading={loading} type="primary" htmlType="submit">Submit</Button>
            </ProForm>
        </div>
    </div>
}
export default News