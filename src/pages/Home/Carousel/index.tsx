/*
 * @description: 轮播图
 * @author: Yoke
 * @Date: 2024-08-29 20:12:15
 */
import { useRef, useState } from 'react';
import { Button, Carousel } from "antd"
import "./index.css"
const CarouselCom = () => {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const list = [
        {
            title: 'New Robot'
        },
        {
            title: 'Titan for Auto'
        },
        {
            title: 'First Deployed'
        },
        {
            title: 'ADAM Install'
        }
    ]
    const [start, setStart] = useState(false);

    const onGoTo = (index: number) => {
        console.log(index)
        if (activeIndex === index) return
        swiperRef.current?.goTo(index)
    }
    return <div className='px-[5%] pt-8'>
        <div className="sm:h-[65vh] rounded-[40px] h-[90vh] relative overflow-hidden max-h-[60rem]">
            <Carousel
                className=' custom_carousel h-full w-full'
                autoplay
                autoplaySpeed={5000}
                fade={true}
                afterChange={(index) => {
                    setActiveIndex(index);
                    console.log(swiperRef.current)
                    setStart(false);
                }}
                beforeChange={(index) => {
                    setStart(true);
                }}
                dots={false}
                ref={swiperRef}
                rootClassName='h-full w-full'
            >
                <div className='h-full'>

                    <div className='h-full'>
                        <img className='h-full w-full object-cover' src="https://picsum.photos/1715/840?random=7991" alt="" />
                    </div>
                </div>
                <div className='h-full'>
                    <div className={`absolute sm:top-[10%] top-[30%] left-2/4 transition-all -translate-x-1/2 z-20 w-[48rem] sm:w-full text-center px-4 duration-100 ${start ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-10'}`}>
                        <div className='text-[3.5rem] sm:text-[1.8rem] leading-[1.2] text-white font-bold '>
                            Boost Shop Efficiency with Automated Delivery
                        </div>
                        <span className='text-white sm:text-[1rem] text-[1.25rem] mt-4'>
                            See how auto shops like Mercedes-Benz of Plano, Texas are using Titan to streamline efficiencies and provide quicker service to their customers.
                        </span>
                        <span className='mx-auto mt-4 block w-[270px] py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[20px] hover:bg-transparent hover:text-[var(--bluelight500)] hover:border-[1px] hover:border-[var(--bluelight500)]'>
                            Explore Titan for Automotive
                        </span>
                    </div>
                    <div className='h-full bg-black/50'>
                        <img className='h-full w-full object-cover' src="https://picsum.photos/1715/840?random=7992" alt="" />
                    </div>
                </div>
                <div className='h-full'>
                    <div className={`absolute top-[10%] left-2/4 transition-all -translate-x-1/2 z-20 w-[64rem] sm:w-full text-center duration-100 ${start ? 'opacity-0 -translate-y-10' : 'opacity-100 translate-y-10'}`}>
                        <div className='text-[3.5rem] sm:text-[1.8rem] leading-[1.2] text-[var(--bluelight500)] font-bold '>The First Commercially Deployed Humanoid AI Robot in the US!
                        </div>
                        <span className='mx-auto sm:w-max mt-4 block w-[270px] py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[20px] hover:bg-transparent hover:text-[var(--bluelight500)] hover:border-[1px] hover:border-[var(--bluelight500)]'>
                            View ADAM's Recent Installations
                        </span>
                    </div>
                    <div className='h-full'>
                        <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66bf7b33b425a97c025942be_adam-delpoyed.avif" alt="" />
                    </div>
                </div>
                <div className='h-full'>
                    <div className='h-full'>
                        <img className='h-full w-full object-cover' src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/66bf8a25179e065021d8a004_adam-in-walmart.avif" alt="" />
                    </div>
                </div>
            </Carousel>
            <div className='absolute bottom-8 left-2/4 -translate-x-2/4 flex w-[60rem] sm:w-auto cursor-pointer px-[5vw]'>
                {
                    list?.map((el, index) => {
                        return <div key={index} className='flex-1 py-[1em] px-[2em] relative mx-2 text-center' onClick={() => {
                            onGoTo(index)
                        }}>
                            <span className='text-white sm:hidden'>{el.title}</span>
                            <div className={` absolute left-0 bottom-0 w-full h-[.25rem]  ${activeIndex == index ? 'bg-[var(--bluelight500)]' : 'bg-[#fff3]'}`}></div>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}
export default CarouselCom