import React from 'react';
import './Skill.css'
import ProgressBox from '../ProgressBox/ProgressBox';
import AnimatedElement from '../AnimationElement/AnimationElement';
import { API_BASE } from '@/app/_utils/config';

async function getAllSkills() {
    try {
        const res = await fetch(`${API_BASE}/getAllSkills`, {
            cache: 'no-store', // No caching on server side
        });

        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }

        const { data }: { data: Array<SkillI> } = await res.json();
        return { skill: data || [], error: null };
    } catch (err) {
        console.error('Error fetching project details:', err);
        return { skill: [], error: err };
    }
}
async function Skill() {
    const { skill: skillList, error } = await getAllSkills();

    return (
        <section className="skill-section" id="skill">
            <AnimatedElement
                className="section-heading"
                initial="hidden"
                animate="visible"
                as="h2"
            >
                Skill
                <div className="underline" />
            </AnimatedElement>
            <AnimatedElement initial="hidden" animate="visible">
                {error && <p className="text-red-500">Error loading projects</p>}

                {!error && skillList.length === 0 && (
                    <p className="text-gray-500">No projects found</p>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-items-center">
                    {
                        skillList.map((skill) => (
                            <ProgressBox key={skill.name} progressDetails={skill} />
                        ))
                    }
                </div>

            </AnimatedElement>
        </section>
    )
}

export default Skill

export interface SkillI {
    _id: string
    name: string
    image: string
    __v: number
}

