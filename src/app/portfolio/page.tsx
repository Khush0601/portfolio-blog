import React from 'react'
import Landing from '../_components/Landing/Landing'
import Image from 'next/image'
import Info from '../_components/Info/Info'
import Project from '../_components/Project/Project'
import Education from '../_components/Education/Education'
import Skill from '../_components/Skill/Skill'
import Contact from '../_components/Contact/Contact'

// 👇 Add here
export const dynamic = 'force-dynamic';

const Portfolio = () => {
    return (
        <>
            <div>
                <div className='fixed z-0 w-full h-full'>
                    <Image
                        src="/background.svg"
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                        className="pointer-events-none"
                    />
                </div>
                <div className='px-4'>
                    <div className='relative z-10'>
                        <Landing />
                        <Info />
                        <Project />
                        <Education />
                        <Skill />
                        <Contact />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio
