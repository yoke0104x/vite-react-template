import { user } from "@/api";
import enums from "@/enums";
import { useUserStore } from "@/store";
import {
    ProForm,
    ProFormDependency,
    ProFormInstance,
    ProFormText
} from "@ant-design/pro-components";
import { Button, message } from "antd";
import { useEffect, useRef, useState } from "react";



const Profile = () => {
    const formRef = useRef<ProFormInstance<any>>();
    const { data } = useUserStore();
    const [loading, setLoading] = useState<boolean>(false);

    const onSubmit = async (values: any) => {
        const res = await user.updateUserInfo(values);
        if (res?.code == enums.ResultCodeEnums.SUCCESS) {
            message.success("update event success")
        } else {
            message.error("update event failed")
        }
        setLoading(false);
    };

    useEffect(() => {
        (async () => {
            if (data) {
                formRef.current?.setFieldsValue({
                    ...data,
                });
            }
        })();
    }, [data]);

    return (
        <div className="mt-10 bg-white rounded p-5">
            <div className="text-2xl font-bold text-center">{"Edit Profile"}</div>
            <div className="mt-5 px-16 w-max mx-auto">
                <ProForm
                    onFinish={async (values) => {
                        onSubmit(values);
                    }}
                    submitter={false}
                    formRef={formRef}
                    requiredMark={false}
                >
                    <ProFormText
                        name="username"
                        label="UserName"
                        placeholder="Please enter event name"
                        rules={[{ required: true, message: "Please enter event name" }]}
                        width={"xl"}
                    />
                    <ProFormText.Password
                        name="originalPassword"
                        label="Original password"
                        placeholder="Please enter event password"
                        rules={
                            [
                                {
                                    pattern: /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,18}$/,
                                    message: "password must contain letters and numbers",
                                },
                            ]
                        }
                        width={"xl"}
                    />
                    <ProFormDependency name={["originalPassword"]}>
                        {({ originalPassword }) => {
                            return (
                                <>
                                    <ProFormText.Password
                                        name="password"
                                        label="Password"
                                        placeholder="Please enter event password"
                                        rules={[
                                            {
                                                required: Boolean(originalPassword),
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
                                                required: Boolean(originalPassword),
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
                            );
                        }}
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
                    <Button
                        className="w-full"
                        loading={loading}
                        type="primary"
                        htmlType="submit"
                    >
                        Submit
                    </Button>
                </ProForm>
            </div>
        </div>
    );
};
export default Profile;
