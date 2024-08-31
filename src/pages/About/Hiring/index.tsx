/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-30 22:58:54
 */
const Hiring = () => {
    return <div className="mt-20 bg-[#0BA5EC] py-20">
        <div className="w-[70vw] mx-auto flex justify-center flex-col items-center">
            <div className="text-[3rem] md:text-[2rem] font-semibold text-white leading-[1.2]">
                We're hiring!
            </div>
            <span className="text-white md:text-[1.2rem] mt-2 text-[1.4rem] text-center">
                Come discover an exciting career at Richtech Robotics!
            </span>
            <span className='mt-5 block w-max py-[.75rem] px-[1.5rem] border-[1px] cursor-pointer font-medium select-none bg-transparent text-[var(--bluelight500)] bg-white rounded-[20px] hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white'>
                Join Our Team
            </span>
        </div>
    </div>
}
export default Hiring