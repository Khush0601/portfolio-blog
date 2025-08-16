'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TimeLine, { TimeLineI } from '../Timeline/Timeline';
import './Education.css'
import { API_BASE } from '@/app/_utils/config';
import Skeleton from '../Skeleton/Skeleton';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};



const Education = () => {
    const [educationList, setEducationList] = useState([])
    const [experienceList, setExperienceList] = useState([])
    const [isSkeleton, setIsSkeleton] = useState(false);
    useEffect(() => {
        const getEducation = async () => {
            try {
                setIsSkeleton(true)
                const experiencePromise = fetch(`${API_BASE}/getInternshipDetails`);
                const educationPromise = fetch(`${API_BASE}/getEducations`);
                const [experienceJson, educationJson] = await Promise.all([experiencePromise, educationPromise])
                if (!experienceJson.ok || !educationJson.ok) throw new Error(`HTTP error`);
                const expericenceData = await experienceJson.json();
                const educationData = await educationJson.json();
                const expData: Array<TimeLineI> = expericenceData.data;
                const eduData: Array<TimeLineI> = educationData.data
                const mapExpData = expData?.map((exp) => {
                    return {
                        ...exp,
                        startDate: exp?.startDate,
                        endDate: exp?.endDate,
                        src: exp?.company?.logo,
                        heading: exp?.company?.name,
                        subHeading: exp?.title,
                        description: exp?.description
                    }
                })
                const mapEduData = eduData?.map((exp) => {
                    return {
                        ...exp,
                        startDate: exp?.startDate,
                        endDate: exp?.endDate,
                        src: exp?.logoUrl,
                        heading: exp?.qualification,
                        subHeading: exp?.institution,
                        description: exp?.description

                    }
                })
                // const educationData = await educationJson.json();
                //console.log('exp and edu', eduData)
                setExperienceList(mapExpData as never);
                setEducationList(mapEduData as never);
                setIsSkeleton(false);
            } catch (err) {
                setIsSkeleton(false)
                console.error('Error fetching about details:', err);
            }
        }
        getEducation()
    }, [])
    return (
        <section className="education-section" id="education">
            <motion.h2
                className="section-heading"
                initial="hidden"
                animate="visible"
                variants={fadeInUp as never}
            >
                Education & Expericence
                <div className="underline" />
            </motion.h2>
            <motion.div initial="hidden"
                className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4'
                animate="visible"
                variants={fadeInUp as never}>
                <div>
                    <h3 className="subheading">Education</h3>
                    {
                        isSkeleton && <Skeleton height='500px' />
                    }
                    {
                        !isSkeleton && educationList?.length && <TimeLine timeLineList={educationList} />
                    }
                </div>
                <div id="expericence">
                    <h3 className="subheading">Expericence</h3>
                    {
                        isSkeleton && <Skeleton height='500px' />
                    }
                    {
                        !isSkeleton && experienceList?.length && <TimeLine timeLineList={experienceList} />
                    }

                </div>
            </motion.div>
        </section>
    );
};

export default Education;
