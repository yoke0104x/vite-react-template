import { useEffect } from "react";

const FormContainer = () => {
    useEffect(() => {
        window.hbspt.forms.create({
            region: "na1",
            portalId: "46549432",
            formId: "7e1d5543-e4ff-46b0-a481-324e3b3fc12a",
            target: "#formContainer"
        });
    }, [])
    return <div id="formContainer"></div>
}
export default FormContainer