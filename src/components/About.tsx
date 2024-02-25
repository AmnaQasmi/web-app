'use client'

import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";


const About: React.FC = () => {
    return (
        <section id={headerItems.about.page}
            className="h-screen flex flex-col text-center justify-center mx-7 items-center md:flex-row md:text-start">
            <div className="m-2 md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-6xl font-mono font-semibold mt-8 my-6 ml-1 mr-6 sm:mt-56 text-slate-900 animate-bounce">About</h1>
                <h2 className='text-2xl mt-2 font-semibold ml-1 mr-5  md:text-3xl text-gray-900  font-serif border-t-4 border-gray-300'>
                    Get To Know Me !
                </h2>
                <p
                    className="[&>p]:mt-3 me-7 font-serif font-bold text-slate-800 text-xl"
                    dangerouslySetInnerHTML={{ __html: userInfo.about }} />
            </div>
            <div className='text-center mt-auto justify-center me-4 mr-4'>
                <Image
                    src={userInfo.picture}
                    alt='dp'
                    height={300}
                    width={300}
                    className="mb-12 ml-14 rounded-full shadow-2xl "
                />
                {
                    userInfo.skills.map(skill => (
                        <span className={"bg-slate-900 bg-gradient-to-r from-bg-slate-900 to-blue-500 hover:from-emerald-900 hover:to-slate-800 m-1 p-2 rounded-md inline-block text-sm font-serif font-semibold text-gray-100 cursor-default mb-14 shadow-xl"}> {skill} </span>
                    ))
                }
            </div>
        </section>
    )
}

export default About;