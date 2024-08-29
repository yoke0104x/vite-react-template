import { events, tasks } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
import useResultRequest from "@/hooks/useResultRequest";
import { Button, message, Space } from "antd";



const Detail = () => {
    const location = useLocationRewrite();
    const id = location.query.get('id')!;
    const { loading, data } = useResultRequest(() => tasks.getTaskDetail(id));
    console.log(data, loading)

    const deleteParticipant = async () => {
        const res = await tasks.deleteTask(id)
        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
            message.success('Delete successfully');
            location.navigate(-1)
        } else {
            message.error("Delete failed")
        }
    }

    return <div className="mt-10 bg-white rounded p-5">
        <div className="text-2xl font-bold text-center">{"Task Details"}</div>
        <ul className="mt-5 px-16 w-[60%] mx-auto">
            <li>
                <p className="font-bold text-[18px] mt-3">Related Event:</p>
                <p className="indent-1">{data?.activity_info?.name}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Task Title:</p>
                <p className="indent-1">{data?.title}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Task Description:</p>
                <p className="indent-1">{data?.description}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Deadline:</p>
                <p className="indent-1">{data?.deadline}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Assignee:</p>
                <p className="indent-1">{data?.assignee_info?.name}</p>
            </li>
            <Space size={12} className="mt-5">
                <Button type="primary" onClick={() => location.navigate(`/tasks/news?id=${id}`)}>Edit Task</Button>
                <Button type="primary" onClick={deleteParticipant} danger>Delete Task</Button>
                <Button onClick={() => location.navigate(-1)}>Back</Button>
            </Space>
        </ul>
    </div>
}
export default Detail