/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-14 23:39:04
 */

import { user } from "@/api";
import enums from "@/enums";
import { useEffect, useState } from "react";
import { NavLink, useOutlet } from "react-router-dom";
import "./index.css";
import { history } from "@/utils/history";
import { useUserStore } from "@/store";
import FormContainer from "@/components/FormContainer";
import Icon from "@/components/Icon";

const Layout = () => {
    const [menuShow, setMenuShow] = useState(false);
    const [list, setList] = useState([
        {
            name: "Home",
            path: "/home",
        },
        {
            name: "Robots",
            path: "/responsible",
            icon: (
                <Icon
                    size={24}
                    type={"NavigateNextFilled"}
                    className=" transition-all duration-100 rotate-90 origin-center ml-2 group-hover:rotate-[270deg]"
                />
            ),
            children: true,
        },
        {
            name: "About",
            path: "/participant",
        },
        {
            name: "Blog",
            path: "/events",
        },
        {
            name: "Investors",
            path: "/tasks",
        },
    ]);
    const currentOutlet = useOutlet();

    const openMenu = () => {
        setMenuShow(!menuShow);
    };

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
                                className="cursor-pointer group hover:text-[var(--bluelight500)] select-none flex items-center px-5 h-full"
                            >
                                <NavLink
                                    to={item.path}
                                    className={({ isActive, isPending }) =>
                                        (isPending ? "pending " : isActive ? "" : "") +
                                        "flex justify-center items-center font-medium"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                                {item?.icon}
                                {item?.children ? (
                                    <div className=" hidden hover:block group-hover:block z-50 absolute top-[72px] right-0 w-screen h-[calc(80vh_-_72px)] bg-white shadow-md overflow-y-auto">
                                        121212
                                    </div>
                                ) : null}
                            </span>
                        );
                    })}
                </div>
                <div
                    className={`absolute bg-white top-[72px] shadow-md right-0 w-full transition-all overflow-auto duration-1000 ease-in-out ${menuShow ? "h-[calc(100vh_-_72px)] " : "h-0"
                        }`}
                >
                    {list?.map((item: any, index) => {
                        return (
                            <span
                                key={index}
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
                                    <div className="h-0 w-screen transition-all duration-500 group-hover:h-[calc(80vh_-_72px)] bg-white overflow-y-auto">
                                        121212
                                    </div>
                                ) : null}
                            </span>
                        );
                    })}
                    <div className="w-[130px] mx-auto">
                        <span className="sm:block hidden py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[36px] hover:bg-white hover:text-[var(--bluelight500)] hover:border-[2px] hover:border-[var(--bluelight500)]">
                            Contact us
                        </span>
                    </div>
                </div>
                <div className="flex items-center space-x-8">
                    <span className="sm:hidden py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[36px] hover:bg-white hover:text-[var(--bluelight500)] hover:border-[2px] hover:border-[var(--bluelight500)]">
                        Contact us
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
        </div>
    );
};
export default Layout;
