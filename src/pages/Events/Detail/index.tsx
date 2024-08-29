import { events } from "@/api";
import enums from "@/enums";
import useLocationRewrite from "@/hooks/useLocationRewrite";
import useResultRequest from "@/hooks/useResultRequest";
import { Button, message, Space } from "antd";



const Detail = () => {
    const location = useLocationRewrite();
    const id = location.query.get('id')!;
    const { loading, data } = useResultRequest(() => events.getEventDetail(id));
    console.log(data, loading)

    const deleteParticipant = async () => {
        const res = await events.deleteEvent(id)
        if (res?.code === enums.ResultCodeEnums.SUCCESS) {
            message.success('Delete successfully');
            location.navigate(-1)
        } else {
            message.error("Delete failed")
        }
    }

    return <div className="mt-10 bg-white rounded p-5">
        <div className="text-2xl font-bold text-center">{"Event Details"}</div>
        <ul className="mt-5 px-16 w-[60%] mx-auto">
            <li>
                <p className="font-bold text-[18px] mt-3">Event Name:</p>
                <p className="indent-1">{data?.name}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Event Date:</p>
                <p className="indent-1">{data?.date}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Event Location:</p>
                <p className="indent-1">{data?.address}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Event Description:</p>
                <p className="indent-1">{data?.description}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Event Responsible:</p>
                <p className="indent-1">{data?.leader_info?.name}</p>
            </li>
            <li>
                <p className="font-bold text-[18px] mt-3">Participants:</p>
                <p className="indent-1">{data?.participantId_list?.map((el: any) => el.name).join("，")}</p>
            </li>
            <Space size={12} className="mt-5">
                <Button type="primary" onClick={() => location.navigate(`/events/news?id=${id}`)}>Edit Event</Button>
                <Button type="primary" onClick={deleteParticipant} danger>Delete Event</Button>
                <Button onClick={() => location.navigate(-1)}>Back</Button>
            </Space>
        </ul>
    </div>
}
export default Detail