

import { history } from "@/utils/history";
import { Button, Result } from "antd"

type NotPageProps = {
    showBackButton?: boolean
}
const NotPage = (props: NotPageProps) => {
    const { showBackButton = true } = props;

    const goHome = () => {
        history.push('/home')
    }

    return <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={showBackButton ? <Button type="primary" onClick={goHome}>Go Home</Button> : false}
    />
}
export default NotPage