import useLocationRewrite from "@/hooks/useLocationRewrite";
import { useUserStore } from "@/store";
import { Button, Space } from "antd";



const Profile = () => {
    const location = useLocationRewrite();
    const { data } = useUserStore();


    return (
        <div className="mt-10 bg-white rounded p-5">
            <div className="text-2xl font-bold text-center">{"Profile"}</div>
            <ul className="mt-5 px-16 w-[60%] mx-auto">
                <li>
                    <p className="font-bold text-[18px] mt-3">User Name:</p>
                    <p className="indent-1">{data?.username}</p>
                </li>
                <li>
                    <p className="font-bold text-[18px] mt-3">User Email:</p>
                    <p className="indent-1">{data?.email}</p>
                </li>
                <li>
                    <p className="font-bold text-[18px] mt-3">User Phone:</p>
                    <p className="indent-1">{data?.phone}</p>
                </li>

                <Space size={12} className="mt-5">
                    <Button type="primary" onClick={() => location.navigate(`/profile/edit`)}>Edit Profile</Button>
                </Space>
            </ul>
        </div>
    );
};
export default Profile;
