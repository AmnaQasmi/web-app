'use client'

import { headerItems, userInfo } from "@/constants/constant";
import Image from "next/image";
import { projects } from "@/constants/constant";

const Projects: React.FC = () => {
    return (
        <section id={headerItems.projects.page}
            className="flex flex-col  text-center justify-center items-center my-40">
            <h1 className="font-semibold font-mono text-6xl mt-24 my-4 animate-bounce text-slate-900">Projects</h1>
            <div className='flex  break-words flex-wrap text-center justify-center items-center border-t-4 mx-4 border-gray-300'>
            {
                Object.keys(projects).map (project => (
                    <Image
                    src={projects[project as keyof Projects].image}
                    alt=""
                    width={300}
                    height={300}
                    className="mt-4 p-2 cursor-pointer"
                    />
                ))
            }  
            </div>
        </section>
    )
}

export default Projects;