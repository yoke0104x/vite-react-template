import Icon from "../Icon"

const CatchRobots = () => {

    const list = [
        {
            title: "Humanoid Bartender Robot ADAM Debuts at Texas Rangers Stadium",
            src: 'https://cdn.prod.website-files.com/631f7486d81fe59fd5a2cd63/66ce2703e2388c2aba01fe1e_robot-report-thumbnail.jpg',
            by: 'By:The Robot Report',
            august: 'August 24, 2024'
        },
        {
            title: "Robot Bartender Joins MLB, Serves Drinks with Accuracy, Emulates Human Actions",
            src: 'https://cdn.prod.website-files.com/631f7486d81fe59fd5a2cd63/66ce28deb9cf514f7b362d22_interesting-engineering-thumbnail.png',
            by: 'By:The Robot Report',
            august: 'August 24, 2024'
        },
        {
            title: "Humanoid AI Robot Serves Tea at Walmart",
            src: 'https://cdn.prod.website-files.com/631f7486d81fe59fd5a2cd63/66c7c66866eeb3aec70fb9a3_iot-world-today-logo.png',
            by: 'By:The Robot Report',
            august: 'August 24, 2024'
        }
    ]
    return <div className="px-[5%]">
        <p className="mt-14 md:text-[2rem] text-[3rem] font-medium text-center">Catch our robots in the news</p>
        <p className="w-[40%] md:w-auto mx-auto text-[1.2rem] text-center leading-[1] mt-4">Our innovative food robotics solutions have been deployed and covered across the country.</p>

        <div className="w-[70vw] md:w-auto mx-auto grid md:grid-cols-1 grid-cols-3 gap-3">
            {
                list?.map((el, index) => {
                    return <div key={index} className="flex flex-col mt-14 md:mt-6">
                        <div className="">
                            <img className="w-full object-cover" src={el.src} alt="" />
                        </div>
                        <div className="">
                            <p className="text-[1.5rem] font-medium">{el.title}</p>
                            <p className="text-[1rem] mt-4">{el.by}</p>
                            <p className="text-[1rem] mt-4">{el.august}</p>
                        </div>
                        <p className="mt-6 cursor-pointer font-semibold group hover:text-[var(--bluelight500)] flex items-center">
                            Learn More
                            <Icon size={20} className="ml-2 transition-all duration-200 group-hover:translate-x-1" type="NavigateNextRound"></Icon>
                        </p>
                    </div>
                })
            }
        </div>
        <div className="flex justify-center mt-20">
            <span className='mx-auto mt-4 block w-max py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[20px] hover:bg-transparent hover:text-[var(--bluelight500)] hover:border-[1px] hover:border-[var(--bluelight500)]'>
                See More Media Coverage
            </span>
        </div>
    </div>
}
export default CatchRobots