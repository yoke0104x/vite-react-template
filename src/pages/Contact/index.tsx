import Maps from "./Maps"
import Tel from "./Tel"

/*
 * @description: Contact
 * @author: Yoke
 * @Date: 2024-08-30 23:47:16
 */
const Contact = () => {
    return <div>
        <div className="bg-[#0BA5EC]">
            <div className="w-[70vw] md:w-auto md:grid-cols-1 pt-20 md:px-[5%] mx-auto grid grid-cols-2">
                <div className="py-20 md:flex md:justify-center md:flex-col md:items-center">
                    <div className="text-[3rem] md:text-[2rem] font-semibold text-white leading-[1.2]">
                        Our team is here to help!
                    </div>
                    <div className="text-white md:text-center mt-6 md:text-[1.2rem] w-[70%] text-[1.3rem]">
                        Let's talk about your business. Fill out the contact form below or give us a call and we will be in contact shortly.
                    </div>
                    <span className='mt-10 block w-max py-[.75rem] px-[1.5rem] border-[1px] cursor-pointer font-medium select-none bg-transparent text-[var(--bluelight500)] bg-white rounded-[20px] hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white'>
                        Get in Touch
                    </span>
                </div>
                <div className="flex justify-end md:hidden">
                    <img className="object-contain" src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/63780e0c7127a3b64f76ce94_adam-the-robot-waves-p-1080.webp" alt="" />
                </div>
            </div>
        </div>
        <Tel />
        <Maps />
    </div>
}
export default Contact