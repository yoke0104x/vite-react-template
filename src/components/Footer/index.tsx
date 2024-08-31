/*
 * @description: 功能
 * @author: Yoke
 * @Date: 2024-08-30 17:43:47
 */

import { links, list } from "./constant"

/*
 * @description: footer
 * @author: Yoke
 * @Date: 2024-08-30 17:43:47
 */
const Footer = () => {

    return <div className="bg-black p-[5%]">
        <div className="md:hidden grid grid-cols-[1fr_1fr_1fr_1fr_2fr]">
            <a>
                <img className="w-[120px]" src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631ba612b538465492808f55_richtech-logo-footer.webp" alt="" />
            </a>
            {
                list?.map((el, index) => {
                    return <div key={index} className="flex flex-col md:order-3 md:mt-20">
                        <span className="text-white text-[1.3rem] font-bold">{el.title}</span>
                        {
                            el?.list?.map((els, index) => {
                                return els.title ? <span className="text-white font-semibold text-[1.3rem] mt-4" key={index} >{els.title}</span> : <a key={index} href={els.href} target="_blank" className='text-white mt-4 font-[1.2rem]'>{els.name}</a>
                            })
                        }
                    </div>
                })
            }
            <div>
                <p className="text-white font-bold">Subscribe</p>
                <p className="text-white font-semibold mt-4">Join our newsletter to stay up to date on features and releases.</p>
                <span className='mt-4 block w-max py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[20px] hover:bg-transparent hover:text-[var(--bluelight500)] hover:border-[1px] hover:border-[var(--bluelight500)]'>
                    Click Here to Join Our Newsletter
                </span>
            </div>
        </div>
        <div className="mds:hidden">
            <a>
                <img className="w-[120px]" src="https://cdn.prod.website-files.com/631b9c9bc2eb7cbf0daa9107/631ba612b538465492808f55_richtech-logo-footer.webp" alt="" />
            </a>
            <div className="grid grid-cols-3">
                {
                    list?.map((el, index) => {
                        return <div key={index} className="flex flex-col md:order-3 md:mt-20">
                            <span className="text-white text-[1.3rem] font-bold">{el.title}</span>
                            {
                                el?.list?.map((els, index) => {
                                    return els.title ? <span className="text-white font-semibold text-[1.3rem] mt-4" key={index} >{els.title}</span> : <a key={index} href={els.href} target="_blank" className='text-white mt-4 font-[1.2rem]'>{els.name}</a>
                                })
                            }
                        </div>
                    })
                }
            </div>

            <div>
                <p className="text-white font-bold md:mt-10">Subscribe</p>
                <p className="text-white font-semibold mt-4">Join our newsletter to stay up to date on features and releases.</p>
                <span className='mt-4 block w-max py-[.75rem] px-[1.5rem] cursor-pointer font-medium select-none bg-[var(--bluelight500)] text-white rounded-[20px] hover:bg-transparent hover:text-[var(--bluelight500)] hover:border-[1px] hover:border-[var(--bluelight500)]'>
                    Click Here to Join Our Newsletter
                </span>
            </div>
        </div>
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-1">
            <span className="flex md:block text-white md:order-2">
                <p className="md:mt-16"> © 2023 Richtech Robotics. All right reserved.</p>
                <p className="md:mt-8 ml-2"> Privacy Policy</p>
                <p className="md:mt-8 ml-2">Terms and Conditions</p>
            </span>
            <span className="flex md:order-1 md:mt-20 md:justify-start justify-end">
                {
                    links.map((el, index) => {
                        return <a key={index} href={el.href} target="_blank" className='mr-4'>
                            <span className="text-white w-6 h-6">{el.icon}</span>
                        </a>
                    })
                }
            </span>
        </div>
    </div>
}
export default Footer