import { list } from "./constans"

/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-30 22:04:14
 */
const Different = () => {
    return <div>
        <div className="bg-[#F3F4F7]">
            <div className="w-[70vw] md:w-auto md:px-[5%] mx-auto md:grid-cols-1 py-20 grid grid-cols-2 gap-8">
                <div className="text-[4rem] md:text-[2rem] leading-[1.2] font-semibold">
                    What sets us apart from other robotics companies?
                </div>
                <div>
                    <p className="text-[1.2rem] md:mt-10">
                        We pride ourselves on offering a complete robotics solution. Whether you're looking to automate production, cleaning, or delivery, we have robust automated solutions that generate revenue and solve your business problems.
                    </p>
                    <p className="text-[1.2rem] mt-14">
                        Since its inception, Richtech Robotics solutions have been implemented across the country in restaurants, hotels, casinos, senior living homes, factories and retail centers. Our goal is to bring people together by automating the tasks that keep them apart.
                    </p>
                </div>
            </div>
        </div>
        <div className="w-[70vw] mx-auto md:w-auto md:px-[5%] md:grid-cols-1 py-10 grid grid-cols-2 gap-8">
            <div className="py-10">
                <img className="w-[94%] h-[94%]" src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/632e12408d55f5324db0a07a_logos-aligned-right-p-1080.png" alt="" />
            </div>
            <div className="py-10">
                <p className="font-semibold text-[3rem] md:text-[2rem] leading-[1.2]">Experience in technology that's unrivaled</p>
                <p className="mt-12 text-base" >Since 2016, Richtech has created robotic ecosystems to optimize business operations in the chaotic world we live in. Our products automate repetitive and mundane tasks, giving human staff more time to handle complex and revenue-generating things that really matter. At Richtech we define ourselves by our steadfast commitment to our clients and tireless pursuit of innovation. With partnerships in 120 countries and a rapidly growing clientele of 1000+ US customers, Richtech Robotics is perfectly positioned to help in an era when meeting customer needs efficiently is more important than ever.</p>
                <div className="grid grid-cols-2 gap-10 mt-10">
                    <div>
                        <span className="font-semibold text-[3rem] leading-[1.2]">1000+</span>
                        <p>B2B USA clients</p>
                    </div>
                    <div>
                        <span className="font-semibold text-[3rem] leading-[1.2]">120+</span>
                        <p>Countries we have partners in</p>
                    </div>
                    <div>
                        <span className="font-semibold text-[3rem] leading-[1.2]">A+</span>
                        <p>BBB rating</p>
                    </div>
                    <div>
                        <span className="font-semibold text-[3rem] leading-[1.2]">16 yrs</span>
                        <p>In business</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-[#F3F4F7]">
            <div className="w-[70vw] md:w-auto md:p-[5%] mx-auto py-20">
                <p className="text-[3rem] text-center">Loved by our customers</p>
                <p className="text-center mt-6 text-xl">Our commitment to our clients sets us apart from other robotics companies.</p>
                <div className="columns-3 md:columns-1 gap-4 mt-10">
                    {
                        list?.map((el, index) => {
                            return <div key={index} className="p-6 break-inside-avoid transition-all duration-300 hover:scale-105 cursor-default mt-8 first:mt-0 border-[var(--bluelight500)] border-[1px] bg-white">
                                <div className="text-xl leading-7">{el.text}</div>
                                <p className="mt-6 font-semibold text-xl">{el.title}</p>
                                <div className="mt-1 text-xl">{el.text1}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
}
export default Different