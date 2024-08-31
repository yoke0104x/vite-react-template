/*
 * @description: apart
 * @author: Yoke
 * @Date: 2024-08-30 17:34:00
 */
const Apart = () => {
    return <div className="mt-20 bg-[#0BA5EC] py-20">
        <div className="w-[70vw] md:w-auto md:grid-cols-1 md:px-[5%] mx-auto grid grid-cols-2">
            <div className="text-[3rem] md:text-[2rem] font-semibold text-white leading-[1.2]">
                Bringing people together by automating the tasks that keep them apart.
            </div>
            <div className="md:mt-10">
                <span className="text-white md:text-[1.2rem] text-[1.6rem]">
                    This has been our goal since the start of our company. Automation is the future, and we're utilizing it to create a better world for generations to come.
                </span>
                <span className='mt-5 block w-max py-[.75rem] px-[1.5rem] border-[1px] cursor-pointer font-medium select-none bg-transparent text-white rounded-[20px] hover:bg-white hover:text-[var(--bluelight500)] hover:border-[1px] hover:border-white'>
                    Explore Titan for Automotive
                </span>
            </div>
        </div>
    </div>
}
export default Apart