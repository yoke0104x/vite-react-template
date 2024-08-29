import { Spin } from "antd"

const Loading = () => {
    return <Spin size="large" spinning >
        <div className="w-screen h-screen"></div>
    </Spin>
}
export default Loading