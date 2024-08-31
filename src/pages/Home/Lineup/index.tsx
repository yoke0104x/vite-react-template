import CatchRobots from "@/components/CatchRobots"
import Icon from "@/components/Icon"
import { RightOutlined } from "@ant-design/icons"

/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-30 14:13:41
 */
const Lineup = () => {
    const list = [
        {
            src: 'https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66b5516cf461c0738afbb047_adam-robot-lineup.avif',
            title: 'ADAM',
            subtitle: <div>A <span className="text-[var(--bluelight500)]">friendly, interactive, two-armed robot</span> that can perform a variety of tasks including food and beverage preparation</div>
        },
        {
            src: 'https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66b557565c1fc866f3e222e8_arm-robot-lineup.avif',
            title: 'ADAM',
            subtitle: <div>An intelligent and highly efficient robotic arm that can<span className="text-[var(--bluelight500)]">execute programmed sequences with unmatched precision</span></div>
        }
    ]

    const list1 = [
        {
            src: 'https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66b50a00f5f74cbd5ed2d513_matradee-robot-lineup.avif',
            title: 'Matradee L',
            subtitle: <div>A standard capacity server robot designed for<span className="text-[var(--bluelight500)]">complex restaurant layouts</span></div>
        },
        {
            src: 'https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66b50a00402c42fac28234d5_medbot-robot-lineup.avif',
            title: 'Medbot',
            subtitle: <div>Seamless medical deliveries.<span className="text-[var(--bluelight500)]">All day, every day.</span></div>
        },
        {
            src: 'https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66b50a005f2951e94352d1cd_titan-robot-lineup.avif',
            title: 'Titan',
            subtitle: <div>Streamline parts delivery with this<span className="text-[var(--bluelight500)]">heavy-duty delivery robot.</span></div>
        }
    ]

    const list2 = [
        {
            src: 'https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66b5516cf7d91a9b1b73e3d4_dust-e-s-robot-lineup.avif',
            title: 'DUST-E S',
            subtitle: <div>A compact floor cleaning robot that<span className="text-[var(--bluelight500)]">sweeps, vacuums, and scrubs</span>in tight spaces</div>
        },
        {
            src: 'https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66b50a00402c42fac28234d5_medbot-robot-lineup.avif',
            title: 'DUST-E MX',
            subtitle: <div>A industrial floor scrubbing robot that is designed to professionally<span className="text-[var(--bluelight500)]">clean at a rate of ~22,000 sqft/hr</span></div>
        },
    ]

    return <div className="lineup mt-40">
        <div className="px-[5%]">
            <p className="font-semibold text-[3rem] text-center mt-20">Our Robot Lineup</p>
            <p className="font-semibold text-[2.5rem] text-center mt-20">
                Production Robots
            </p>
            <div className="text-center text-[1.2rem] mt-4">Robots that generate revenue and execute tasks with extreme precision and consistency</div>
            <div className="w-[60vw] sm:w-auto mx-auto grid grid-cols-2 gap-10 sm:grid-cols-1">
                {list?.map((item: any, index) => {
                    return <div key={index} className="flex items-center mt-10 flex-col">
                        <div className="bg-[#F2F4F7] w-[100%] rounded-2xl overflow-hidden">
                            <img src={item.src} alt="" className="object-cover rounded-[40px]" />
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <p className="font-semibold text-[2rem] mt-10">{item.title}</p>
                            <p className="w-[80%] text-[1.2rem] mt-4 text-center">{item.subtitle}</p>

                            <p className="mt-6 cursor-pointer font-semibold group hover:text-[var(--bluelight500)] flex items-center">
                                Learn More
                                <Icon size={20} className="ml-2 transition-all duration-200 group-hover:translate-x-1" type="NavigateNextRound"></Icon>
                            </p>
                        </div>
                    </div>
                })}
            </div>


            <p className="font-semibold text-[3rem] text-center mt-20">Delivery Robots</p>
            <div className="w-[48%] text-center mx-auto text-[1.2rem] mt-4">Autonomous mobile robots that enhance operational efficiency and optimize your labor resources</div>
            <div className="w-[70vw] sm:w-auto mx-auto grid grid-cols-3 gap-10 sm:grid-cols-1">
                {list1?.map((item: any, index) => {
                    return <div key={index} className="flex items-center mt-10 flex-col">
                        <div className="bg-[#F2F4F7] w-[100%] rounded-2xl overflow-hidden">
                            <img src={item.src} alt="" className="object-cover rounded-[40px]" />
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <p className="font-semibold text-[2rem] mt-10">{item.title}</p>
                            <p className="w-[80%] text-[1.2rem] mt-4 text-center">{item.subtitle}</p>

                            <p className="mt-6 cursor-pointer font-semibold group hover:text-[var(--bluelight500)] flex items-center">
                                Learn More
                                <Icon size={20} className="ml-2 transition-all duration-200 group-hover:translate-x-1" type="NavigateNextRound"></Icon>
                            </p>
                        </div>
                    </div>
                })}
            </div>


            <p className="font-semibold text-[3rem] text-center mt-20">Floor Cleaning Robots</p>
            <div className="w-[48%] text-center mx-auto text-[1.2rem] mt-4">Robots that automatically conduct cleaning tasks to keep your environment spotless</div>
            <div className="w-[60vw] sm:w-auto mx-auto grid grid-cols-2 gap-10 sm:grid-cols-1">
                {list2?.map((item: any, index) => {
                    return <div key={index} className="flex items-center mt-10 flex-col">
                        <div className="bg-[#F2F4F7] w-[100%] rounded-2xl overflow-hidden">
                            <img src={item.src} alt="" className="object-cover rounded-[40px]" />
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <p className="font-semibold text-[2rem] mt-10">{item.title}</p>
                            <p className="w-[80%] text-[1.2rem] mt-4 text-center">{item.subtitle}</p>

                            <p className="mt-6 cursor-pointer font-semibold group hover:text-[var(--bluelight500)] flex items-center">
                                Learn More
                                <Icon size={20} className="ml-2 transition-all duration-200 group-hover:translate-x-1" type="NavigateNextRound"></Icon>
                            </p>
                        </div>
                    </div>
                })}
            </div>


            <div className="w-[70vw] md:w-auto mx-auto mt-20">
                <div className="w-full p-5 h-full bg-[#F2F4F7] sm:grid-cols-1 grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
                    <div className="sm:order-last">
                        <img src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/65b837887b51d881bd9e878e_skylark-home-image.webp" alt="" />
                    </div>

                    <div>
                        <p className="font-semibold leading-[1] text-[2.6rem] sm:mt-4 mt-[30%]">Introducing Skylark:<br /> The first multifunction hospitality robot in the US</p>
                        <p className="mt-10">Skylark is more than a robot. It can communicate to guests, deliver items using elevators, clean up messes, and even dispatch human employees for more complicated tasks. Learn more using the button below.</p>
                        <span className='mx-auto sm:mx-0 mt-4 block w-max py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[20px] hover:bg-transparent hover:text-[var(--bluelight500)] hover:border-[1px] hover:border-[var(--bluelight500)]'>
                            Learn More About Skylark
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-screen bg-[#F2F4F7] mx-auto mt-20">
            <div className="w-[70vw] xs:w-auto mx-auto">
                <div className="w-full p-5 h-full bg-[#F2F4F7] sm:grid-cols-1 grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
                    <div>
                        <p className="font-semibold leading-[1] text-[1.6rem] sm:mt-4 mt-[8%]">Trusted across the nation.</p>
                        <p className="mt-6 w-[90%] text-[1.2rem]">Richtech has a rich background in delivering cutting edge enterprise solutions to America’s largest corporations. As a world leader in B2B automation solutions, we define ourselves through our commitment to our clients and endless drive for innovation.</p>
                        <div className="mt-8 w-[90%] flex ">
                            <div className="flex-1">
                                <p className="text-[3rem] font-bold">120+</p>
                                <p className="text-[1.3rem] font-semibold">Global partners</p>
                            </div>
                            <div className="flex-1">
                                <p className="text-[3rem] font-bold">A+</p>
                                <p className="text-[1.3rem] font-semibold">BBB Rating</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/6352f937db028e5c67799714_richtech-service-coverage-p-1080.webp" alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className="px-[5%]">
            <p className="font-semibold leading-[1] text-center text-[1.6rem] sm:mt-4 mt-[8%]">Watch our robots in action!</p>

            <div className="w-[46rem] md:w-auto mx-auto mt-20">
                <div className="rounded-2xl overflow-hidden relative">
                    <img src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/6695b52987b22146ac5ec4bc_titan-vid-thumbnail.webp" alt="" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] flex justify-center items-center">
                        <span>
                            <svg className="text-white w-20 h-20" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z" fill="CurrentColor"></path>
                            </svg>
                        </span>
                    </div>
                </div>

                <div className="font-bold text-[1.16rem] mt-4">
                    Mercedes-Benz Revolutionizes Auto Shops with Cutting-Edge Robot Parts Delivery
                </div>
            </div>

            <div className="w-[55vw] md:w-auto md:grid-cols-1 md:mt-4 mx-auto mt-20 grid grid-cols-3 gap-6">
                <div>
                    <div className="rounded-2xl overflow-hidden relative">
                        <img src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/6695b52987b22146ac5ec4bc_titan-vid-thumbnail.webp" alt="" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] flex justify-center items-center">
                            <span>
                                <svg className="text-white w-20 h-20" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z" fill="CurrentColor"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="font-bold text-[1.16rem] mt-4">
                        The Future of Coffee Service at Ghost Kitchens in Walmart
                    </div>
                </div>
                <div>
                    <div className="rounded-2xl overflow-hidden relative">
                        <img src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/6695b52987b22146ac5ec4bc_titan-vid-thumbnail.webp" alt="" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] flex justify-center items-center">
                            <span>
                                <svg className="text-white w-20 h-20" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z" fill="CurrentColor"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="font-bold text-[1.16rem] mt-4">
                        ADAM Serves Specialty Coffee for Google
                    </div>
                </div>
                <div>
                    <div className="rounded-2xl overflow-hidden relative">
                        <img src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/6695b52987b22146ac5ec4bc_titan-vid-thumbnail.webp" alt="" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.6)] flex justify-center items-center">
                            <span>
                                <svg className="text-white w-20 h-20" width="100%" height="100%" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.33301 32C5.33301 17.2724 17.2721 5.33334 31.9997 5.33334C39.0721 5.33334 45.8549 8.14286 50.8559 13.1438C55.8568 18.1448 58.6663 24.9276 58.6663 32C58.6663 46.7276 46.7273 58.6667 31.9997 58.6667C17.2721 58.6667 5.33301 46.7276 5.33301 32ZM27.1198 43.4134L42.6664 33.7067C43.2482 33.3341 43.6001 32.6909 43.6001 32C43.6001 31.3092 43.2482 30.6659 42.6664 30.2934L27.0664 20.5867C26.452 20.1993 25.6758 20.1755 25.0388 20.5244C24.4018 20.8734 24.004 21.5403 23.9998 22.2667V41.7334C23.9912 42.4774 24.3963 43.1647 25.0514 43.5174C25.7065 43.8702 26.5033 43.8301 27.1198 43.4134Z" fill="CurrentColor"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    <div className="font-bold text-[1.16rem] mt-4">
                        ADAM Makes Cocktails & Pranks Golden Retriever
                    </div>
                </div>
            </div>
        </div>

        <div className="w-screen bg-[#F2F4F7] mx-auto mt-20">
            <div className="w-[70vw] md:px-[5%] md:w-auto mx-auto">
                <div className="w-full pb-5 h-full bg-[#F2F4F7] sm:grid-cols-1 grid grid-cols-3 gap-8 rounded-2xl overflow-hidden">
                    <div className="flex justify-center items-center flex-col">
                        <img className="w-12 h-12 md:mt-4 mt-10" src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631f94a37d4fda33826cc4c3_checkmark.svg" alt="" />
                        <p className="text-center md:my-4 my-8 text-[1.2rem] font-semibold leading-[1.5]">We supply complete robotic solutions for businesses with varying needs</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img className="w-12 h-12 md:mt-4 mt-10" src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/6324b80495448d1859193402_thumbs-up-icon.svg" alt="" />
                        <p className="text-center md:my-4 my-8 text-[1.2rem] font-semibold leading-[1.5]">We've been delivering B2B solutions in emerging markets for over 20 years</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <img className="w-12 h-12 md:mt-4 mt-10" src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631f94a33e6d5b96661c35c3_cloud.svg" alt="" />
                        <p className="text-center md:my-4 my-8 text-[1.2rem] font-semibold leading-[1.5]">We provide a cloud platform that provides metrics on efficiency & production</p>
                    </div>
                </div>
            </div>
        </div>

        <CatchRobots />
    </div >
}
export default Lineup