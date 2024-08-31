import FormContainer from "@/components/FormContainer"
import Icon from "@/components/Icon"

/*
 * @description: Contact
 * @author: Yoke
 * @Date: 2024-08-30 17:03:56
 */
const Contact = () => {
    return <div className="w-[80vw] md:grid-cols-1 md:w-auto mx-auto px-[5%] mt-20 grid grid-cols-2 gap-7">
        <div>
            <div className="text-[2.5rem] font-bold">Contact Us</div>
            <div className="text-[1.25rem] mt-4">
                <span>Our friendly team would love to hear from you.</span>
            </div>
            <p className="mt-8 text-[1.2rem] flex items-center">
                <Icon size={24} className="mr-4" type="LocalPhoneFilled" />
                Sales Line: (866) 236-3835
            </p>
            <p className="mt-4 text-[1.2rem] flex items-center pl-10">
                Support Line: (702) 534-0050
            </p>
            <p className="mt-4 text-[1.2rem] flex items-center">
                <Icon size={24} className="mr-4" type="LocationOnFilled" />
                Support Line: (702) 534-0050
            </p>
        </div>
        <div className="md:mt-10">
            <FormContainer />
        </div>
    </div>
}
export default Contact