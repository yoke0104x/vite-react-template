/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-16 17:24:51
 */


import { leader, user } from "@/api";
import enums from "@/enums";
import { PlusOutlined } from "@ant-design/icons";
import { ActionType, ModalForm, ProFormDependency, ProFormText, ProTable } from "@ant-design/pro-components";
import { Button, Form, message, Modal, Space } from "antd";
import { omit } from "lodash";
import { useRef, useState } from "react";
import { columns, Item } from "./constant";

type ResponsibleState = {
    name: string;
    email: string;
    phone: string;
    id: string;
}

const Responsible = () => {
    const [form] = Form.useForm<ResponsibleState>();
    const actionRef = useRef<ActionType>();
    const [open, setOpen] = useState<number>(0);
    const [modal, contextHolder] = Modal.useModal();
    const onResetPassword = async (data: any) => {
        const res = await user.resetPassword(data?.id);
        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
            message.success('Reset password successfully');
            modal.info({
                title: 'Reset password',
                content: (
                    <div>
                        <p>UserName: {data?.username}</p>
                        <p>Password: {res.data.password}</p>
                    </div>
                ),
            })
        } else {
            message.error("Reset password failed")
        }
    }


    const deleteResponsible = async (id: string) => {
        const res = await user.deleteUser(id);
        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
            message.success('Delete successfully');
            actionRef.current?.reload();
        } else {
            message.error("Delete failed")
        }
    }

    const optionColumns = columns.concat({
        title: 'Option',
        align: 'center',
        render: (_, record) => {
            return <Space size={12}>
                <a
                    key="1"
                    onClick={() => {
                        form.setFieldsValue(record);
                        setOpen(2);
                    }}
                    className="text-[#308CBA]"
                >
                    Edit
                </a>
                <a
                    key="2"
                    onClick={() => {
                        deleteResponsible(record.id);
                    }}
                    className="text-[#ff2222]"
                >
                    Delete
                </a>
                <a
                    key="3"
                    onClick={() => {
                        onResetPassword(record);
                    }}
                    className="text-[#ff2222]"
                >
                    Reset_Password
                </a>

            </Space>
        }
    });

    return <div className="mt-5">
        {contextHolder}
        <ProTable<Item>
            columns={optionColumns}
            cardBordered
            actionRef={actionRef}
            request={async () => {
                const res = await user.getUserList();
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
            headerTitle="User List"
            toolBarRender={() => [
                <Button
                    key="button"
                    icon={<PlusOutlined />}
                    onClick={() => {
                        setOpen(1);
                    }}
                    type="primary"
                >
                    New User
                </Button>,
            ]}
        />
        <ModalForm<ResponsibleState>
            title={open == 1 ? 'New Responsible' : 'Edit Responsible'}
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
                    const res = await user.adminCreateUser(values);
                    if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                        message.success('Submit successfully');
                        actionRef.current?.reload();
                        setOpen(0);
                    } else {
                        message.error(res?.message)
                    }
                }

                if (open == 2) {
                    const res = await user.updateUser(values.id, omit(values, ['id']));
                    if (res?.code === enums.ResultCodeEnums.SUCCESS) {
                        message.success('Submit successfully');
                        actionRef.current?.reload();
                        setOpen(0);
                    } else {
                        message.error(res?.message)
                    }
                }
            }}
        >

            <ProFormText
                name="username"
                label="UserName"
                placeholder="Please enter event name"
                rules={[{ required: true, message: "Please enter event name" }]}
                width={"xl"}
            />
            <ProFormDependency name={['id']}>
                {
                    ({ id }) => {
                        if (id) {
                            return null
                        }
                        return (
                            <>
                                <ProFormText.Password
                                    name="password"
                                    label="Password"
                                    placeholder="Please enter event password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter event password",
                                        },
                                        {
                                            pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/,
                                            message: "password must contain letters and numbers",
                                        },
                                    ]}
                                    width={"xl"}
                                />
                                <ProFormText.Password
                                    name="confirmPassword"
                                    label="Confirm password"
                                    placeholder="Please enter event password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please enter event password",
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_: any, value: any) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(new Error("The two passwords that you entered do not match!"));
                                            },
                                        }),
                                    ]}
                                    width={"xl"}
                                />
                            </>
                        )
                    }
                }
            </ProFormDependency>

            <ProFormText
                name="email"
                label="Email"
                placeholder="Please enter event email"
                rules={[{ required: true, message: "Please enter event email" }]}
                width={"xl"}
            />
            <ProFormText
                name="phone"
                label="Phone"
                placeholder="Please enter event phone"
                rules={[{ required: true, message: "Please enter event phone" }]}
                width={"xl"}
            />
            <ProFormText
                name="id"
                hidden
            />
        </ModalForm>
    </div>
}
export default Responsible