import FormContainer from "@/components/FormContainer"

/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-31 00:02:30
 */
const Tel = () => {
    return <div className="my-20">
        <div className="w-[70vw] md:w-auto md:grid-cols-1 pt-20 md:px-[5%] gap-16 mx-auto grid grid-cols-[2fr_1fr]">
            <FormContainer />
            <div>
                <p className="text-[1.5rem] md:mt-10 font-semibold">
                    Give us a call:
                </p>
                <span className="block mt-6 text-[1.3rem]">
                    Sales Line
                </span>
                <p className="text-[var(--bluelight500)] text-[1.3rem]">
                    +866-236-3835
                </p>
                <span className="block mt-6 text-[1.3rem]">
                    Support Line
                </span>
                <p className="text-[var(--bluelight500)] text-[1.3rem]">
                    +702-534-0050
                </p>
            </div>
        </div>
    </div>
}
export default Tel