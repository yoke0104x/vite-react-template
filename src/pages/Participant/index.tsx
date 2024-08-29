

import { ActionType, ModalForm, ProFormText, ProTable } from "@ant-design/pro-components";
import { columns, Item } from "./constant";
import { Button, Form, message, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { participant } from "@/api";
import enums from "@/enums";
import { useRef, useState } from "react";
import { omit } from "lodash";

type ParticipantState = {
    name: string;
    email: string;
    phone: string;
    id: string;
}

const Participant = () => {
    const [form] = Form.useForm<ParticipantState>();
    const actionRef = useRef<ActionType>();
    const [open, setOpen] = useState<number>(0);

    const optionColumns = columns.concat({
        title: 'Option',
        align: 'center',
        render: (_, record) => {
            return <Space size={12}>
                <a
                    key="editable"
                    onClick={() => {
                        form.setFieldsValue(record);
                        setOpen(2);
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
        const res = await participant.deleteParticipant(id);
        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
            message.success('Delete successfully');
            actionRef.current?.reload();
        }
    }

    return <div className="mt-5">
        <ProTable<Item>
            columns={optionColumns}
            cardBordered
            actionRef={actionRef}
            request={async () => {
                const res = await participant.getParticipantList();
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
                        setOpen(1);
                    }}
                    type="primary"
                >
                    New Participant
                </Button>,
            ]}
        />
        <ModalForm<ParticipantState>
            title={open == 1 ? 'New Participant' : 'Edit Participant'}
            form={form}
            layout="vertical"
            autoFocusFirstInput
            open={Boolean(open)}
            modalProps={{
                destroyOnClose: true,
                onCancel: () => setOpen(0),
                centered: true,
                width: 500,
                okText: 'Submit',
                cancelText: 'Cancel',
            }}
            submitTimeout={2000}
            onFinish={async (values) => {
                if (open == 1) {
                    const res = await participant.addParticipant(values);
                    if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                        message.success('Submit successfully');
                        actionRef.current?.reload();
                        setOpen(0);
                    }
                }

                if (open == 2) {
                    const res = await participant.updateParticipant(values.id, omit(values, ['id']));
                    if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                        message.success('Submit successfully');
                        actionRef.current?.reload();
                        setOpen(0);
                    }
                }
            }}
        >

            <ProFormText
                name="name"
                label="Person Name"
                placeholder={'Please enter the name'}
                rules={[{ required: true, message: 'Please enter the name' }]}
            />
            <ProFormText
                name="email"
                label="Person Email"
                placeholder={'Please enter the email'}
                rules={[{ required: true, message: 'Please enter the email' }, { type: 'email', message: 'The input is not valid E-mail!' }]}
            />
            <ProFormText
                name="phone"
                label="Person Phone"
                placeholder={'Please enter the phone'}
                rules={[{ required: true, message: 'Please enter the phone' }, { pattern: /^1[3456789]\d{9}$/, message: 'The phone number is in the wrong format' }]}
            />
            <ProFormText
                name="id"
                hidden
            />
        </ModalForm>
    </div>
}
export default Participant