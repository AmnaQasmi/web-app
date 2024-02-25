'use client'

import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";


const Intro: React.FC = () => {
    return (
        <section id={headerItems.home.page}
            className="h-screen flex flex-col text-center justify-center items-center md:flex-row md:text-start ">
            <div>
                <Image
                    src={userInfo.picture}
                    alt='dp'
                    height={300}
                    width={300}
                    className="rounded-full shadow-2xl mt-20"
                />
            </div>
            <div className="md:ml-20 sm:ml-12 md:w-1/2">
                <h1 className="text-6xl font-mono font-semibold uppercase md:inline-block mt-52 hidden mr-2 text-slate-900 animate-bounce">Software Developer</h1>
                <h1 className="mt-3 md:text-4xl text-gray-900 animate-blink font-sans  border-t-4 mr-2 border-gray-300"> Hi, I&#39;m <span className="text-3xl md:text-4xl text-blue-950 font-serif"> {userInfo.name}</span> </h1>
                <p
                    className='mt-4 mb-4 font-serif font-bold text-slate-800 text-xl'
                    dangerouslySetInnerHTML={{ __html: userInfo.heading }} />
                    <ScrollLink 
                    to={headerItems.projects.page}
                    className="bg-slate-900 bg-gradient-to-r from-bg-slate-900 to-blue-500 hover:from-emerald-900 hover:to-slate-800 m-2 p-3 rounded-md inline-block text-lg font-semibold text-gray-100 cursor-pointer"
                    spy={true}
                    smooth={true}
                    >Project
                    </ScrollLink>


            </div>
        </section>
    )
}

export default Intro;  