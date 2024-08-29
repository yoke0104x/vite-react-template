import { events, leader, participant } from "@/api";
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
            date: dayjs(values.date).format('YYYY-MM-DD'),
            participantIds: values.participantIds.join(',')
        }
        setLoading(true)
        if (id) {
            const res = await events.updateEvent(id, newValues);
            if (res?.code == enums.ResultCodeEnums.SUCCESS) {
                message.success("update event success")
                location.navigate(-1)
            } else {
                message.error("update event failed")
            }
        } else {
            const res = await events.addEvent(newValues);
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
                const res = await events.getEventDetail(id);
                if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                    formRef.current?.setFieldsValue({
                        ...res?.data,
                        date: dayjs(res.data.date),
                        participantIds: res?.data?.participantIds?.split(",")
                    })
                }
            }
        })()
    }, [id])

    return <div className="mt-10 bg-white rounded p-5">
        <div className="text-2xl font-bold text-center">{id ? 'Edit Event' : "Create New Event"}</div>
        <div className="mt-5 px-16 w-max mx-auto">
            <ProForm
                onFinish={async (values) => {
                    onSubmit(values)
                }}
                submitter={false}
                formRef={formRef}
                requiredMark={false}
            >
                <ProFormText
                    name="name"
                    label="Event Name"
                    placeholder="Please enter event name"
                    rules={[{ required: true, message: 'Please enter event name' }]}
                    width={'xl'}
                />
                <ProFormDatePicker
                    name="date"
                    label="Event Date"
                    rules={[{ required: true, message: 'Please select event date' }]}
                    width={'xl'}
                    placeholder="Please select event date"
                />
                <ProFormText
                    name="address"
                    label="Event Location"
                    placeholder="Please enter event location"
                    rules={[{ required: true, message: 'Please enter event location' }]}
                    width={'xl'}
                />
                <ProFormText
                    name="description"
                    label="Event Description"
                    placeholder="Please enter event description"
                    width={'xl'}
                />
                <ProFormSelect
                    name="leaderId"
                    label="Event Responsible"
                    placeholder="Please select event responsible"
                    rules={[{ required: true, message: 'Please select event responsible' }]}
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
                    name="participantIds"
                    label="Participants"
                    placeholder="Please select participants"
                    rules={[{ required: true, message: 'Please select participants' }]}
                    width={'xl'}
                    fieldProps={{
                        mode: 'multiple'
                    }}
                    request={async () => {
                        const res = await participant.getParticipantList();
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
                <Button className="w-full" loading={loading} type="primary" htmlType="submit">Submit</Button>
            </ProForm>
        </div>
    </div>
}
export default News