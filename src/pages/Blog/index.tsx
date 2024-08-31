import Icon from "@/components/Icon"
import Api from "@/utils/request"
import { useEffect, useState } from "react"
/*
 * @description: blog
 * @author: Yoke
 * @Date: 2024-08-30 23:06:05
 */
const Blog = () => {
    const [list, setList] = useState([]);
    const getList = () => {
        Api.get("https://appsw.usemock.com/list").then(res => {
            if (res?.code == 1) {
                setList(res?.data?.list)
            }
        })
    }
    useEffect(() => {
        getList()
    }, [])
    return <div className="w-[70vw] md:w-auto px-[5%] mx-auto">
        <div className="w-[80%] mt-20">
            <span>Insights</span>
            <h1 className='text-[3rem] md:text-[2rem] leading-tight font-bold'>Richtech Robotics Blog</h1>
            <p className='text-[1.25rem] mt-4'>In this technology blog, we discuss automation, innovations in the hospitality and medical industry, and valuable resources for powering businesses with robotics.</p>
        </div>
        <div className="grid md:grid-cols-1 grid-cols-[1.2fr_1fr] gap-8 mt-20">
            <div>
                <img src="https://cdn.prod.website-files.com/631f7486d81fe59fd5a2cd63/669fe649cc3aea5e4c52c2d4_globe-life-field-install-small-p-1080.jpg" alt="" />
            </div>
            <div>
                <p className="text-[2.1rem] leading-tight mt-[20%] md:mt-[8%] font-bold">First Humanoid Bartender to Join the MLB Serves Cocktails at 2024 All-Star Game</p>
                <span className="mt-3 block leading-tight"> The first humanoid bartender robot, ADAM, at Globe Life Field, enhancing the stadium's hospitality experience by serving drinks.</span>
                <p className="mt-6 cursor-pointer font-semibold group hover:text-[var(--bluelight500)] flex items-center">
                    Learn More
                    <Icon size={20} className="ml-2 transition-all duration-200 group-hover:translate-x-1" type="NavigateNextRound"></Icon>
                </p>
            </div>
        </div>
        <div className="mt-20 md:grid-cols-1 grid grid-cols-2 gap-8 mb-10">
            {
                list?.map((el, index) => {
                    return <div key={index} className="flex flex-col md:mt-0 mt-20">
                        <div className="md:mt-10 md:first:mt-0">
                            <img className="w-full h-full" src={el.url} alt="" />
                        </div>
                        <div className="mt-6 text-[1.5rem] leading-tight">{el.title}</div>
                        <p className="mt-4">{el.text}</p>
                        <p className="mt-4 cursor-pointer font-semibold group hover:text-[var(--bluelight500)] flex items-center">
                            Learn More
                            <Icon size={20} className="ml-2 transition-all duration-200 group-hover:translate-x-1" type="NavigateNextRound"></Icon>
                        </p>
                    </div>
                })
            }
        </div>
    </div>
}
export default Blog