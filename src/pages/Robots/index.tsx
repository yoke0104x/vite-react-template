import Icon from "@/components/Icon"
import { list } from "./costant"
import { NavLink } from "react-router-dom"

/*
 * @description: Robots
 * @author: Yoke
 * @Date: 2024-08-31 11:09:49
 */
const Robots = () => {
    return <div className="md:w-max md:mx-auto">
        {
            list?.map((el, index) => {
                return <div key={index} className="flex px-2 h-8 md:w-full items-center justify-center hover:text-[var(--bluelight500)]">
                    <p className="text-base font-semibold">
                        <NavLink to={el.path}>{el.title}</NavLink>
                    </p>
                    {/* {
                        el.children?.map((item, index) => {
                            return <div key={index} className=" mt-6 md:grid-cols-1 grid grid-cols-2 gap-2">
                                <div className="p-6">
                                    <img src={item.url} alt="" />
                                </div>
                                <div>
                                    <p className="font-semibold text-base">{item.name}</p>
                                    <p className="mt-4">{item.desc}</p>
                                    <p className="mt-6 cursor-pointer font-semibold group hover:text-[var(--bluelight500)] flex items-center">
                                        Learn More
                                        <Icon size={20} className="ml-2 transition-all duration-200 group-hover:translate-x-1" type="NavigateNextRound"></Icon>
                                    </p>
                                </div>
                            </div>
                        })
                    } */}
                </div>
            })
        }
    </div>
}
export default Robots