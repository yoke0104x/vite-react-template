/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-14 23:39:04
 */

import Footer from "@/components/Footer";
import Icon from "@/components/Icon";
import { useEffect, useState } from "react";
import { NavLink, useLocation, useOutlet } from "react-router-dom";
import "./index.css";
import Robots from "../Robots";

const Layout = () => {
    const [menuShow, setMenuShow] = useState(false);
    const location = useLocation();
    const [robotShow, setRobotShow] = useState(false);
    const list = [
        {
            name: "Home",
            path: "/home",
        },
        {
            name: "Robots",
            icon: (
                <Icon
                    size={24}
                    type={"NavigateNextFilled"}
                    className={` transition-all duration-100 rotate-90 origin-center ml-2 ${robotShow ? 'rotate-[270deg]' : ''}`}
                />
            ),
            children: true,
        },
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Blog",
            path: "/blog",
        },
        {
            name: "Investors",
            path: "/tasks",
        },
    ]
    const currentOutlet = useOutlet();


    const openMenu = () => {
        setMenuShow(!menuShow);
    };

    useEffect(() => {
        setMenuShow(false);
        console.log(location)
    }, [location.pathname])

    const onMouseEnter = (item: any) => {
        if (item?.children) {
            setRobotShow(true)
        }
    }

    const onMouseLeave = (item: any) => {
        if (item?.children) {
            setRobotShow(false)
        }
    }

    const onClick = (item: any) => {
        if (item?.children) {
            setRobotShow(!robotShow)
        }
    }

    return (
        <div className="w-screen h-screen overflow-auto overflow-x-hidden bg-white">
            <div
                className={`h-[72px] relative bg-white text-black ${menuShow ? "shadow-none" : "shadow-md"
                    } flex justify-between items-center px-[5%]`}
            >
                <div>
                    <img
                        className="w-[160px] h-[48px]"
                        src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631ba3cbbcd59c0b010000b0_richtech-logo-nav.webp"
                        alt=""
                    />
                </div>
                <div className="flex items-center md:hidden h-full">
                    {list?.map((item: any, index) => {
                        return (
                            <span
                                key={index}
                                onMouseEnter={() => onMouseEnter(item)}
                                onMouseLeave={() => onMouseLeave(item)}
                                onClick={() => onClick(item)}
                                className="cursor-pointer hover:text-[var(--bluelight500)] select-none flex items-center px-5 h-full"
                            >
                                {
                                    item?.path ? <NavLink
                                        to={item.path}
                                        className={({ isActive, isPending }) =>
                                            (isPending ? "pending " : isActive ? "" : "") +
                                            "flex justify-center items-center font-medium w-full h-full"
                                        }
                                    >
                                        {item.name}
                                    </NavLink> : <span className="flex justify-center items-center font-medium">{item.name}</span>
                                }
                                {item?.icon}
                                {item?.children ? (
                                    <div className={`${robotShow ? 'block' : 'hidden'} group-hover:block z-50 absolute top-[72px] right-0 w-full h-[calc(80vh_-_72px)] bg-white text-black shadow-md overflow-y-auto`}>
                                        <Robots />
                                    </div>
                                ) : null}
                            </span>
                        );
                    })}
                </div>
                <div
                    className={`absolute z-50 bg-white top-[72px] shadow-md right-0 w-full transition-all overflow-auto duration-1000 ease-in-out ${menuShow ? "h-[calc(100vh_-_72px)] " : "h-0"
                        }`}
                >
                    {list?.map((item: any, index) => {
                        return (
                            <span
                                key={index}
                                onMouseEnter={() => onMouseEnter(item)}
                                onMouseLeave={() => onMouseLeave(item)}
                                onClick={() => onClick(item)}
                                className="cursor-pointer group hover:text-[var(--bluelight500)] select-none"
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive, isPending }) =>
                                        (isPending ? "pending " : isActive ? "" : "") +
                                        "flex justify-center items-center px-5 font-medium py-3 hover:text-[var(--bluelight500)]"
                                    }
                                >
                                    {item.name}
                                    {item?.icon}
                                </NavLink>

                                {item?.children ? (
                                    <div className={`${robotShow ? 'h-[calc(80vh_-_72px)]' : ''} text-black  h-0 w-screen transition-all duration-500 bg-white overflow-y-auto`}>
                                        <Robots />
                                    </div>
                                ) : null}
                            </span>
                        );
                    })}
                    <div className="w-[40%] mx-auto text-center">
                        <span className="sm:block hidden py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[36px] hover:bg-white hover:text-[var(--bluelight500)] hover:border-[2px] hover:border-[var(--bluelight500)]">
                            <NavLink to="/contact">Contact us</NavLink>
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-8">
                    <span className="sm:hidden py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[36px] hover:bg-white hover:text-[var(--bluelight500)] hover:border-[2px] hover:border-[var(--bluelight500)]">
                        <NavLink to="/contact">Contact us</NavLink>
                    </span>
                    <div
                        className={`md:block hidden menu-icon-wrapper ${menuShow ? "close" : "open"
                            }`}
                        onClick={openMenu}
                    >
                        <div className="menu-icon-first"></div>
                        <div className="menu-icon-second"></div>
                        <div className="menu-icon-thrid"></div>
                    </div>
                </div>
            </div>
            <div>{currentOutlet}</div>
            <Footer />
        </div>
    );
};
export default Layout;
