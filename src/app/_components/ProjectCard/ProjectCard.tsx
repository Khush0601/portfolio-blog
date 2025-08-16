import React from 'react';
import Image from 'next/image';
import './ProjectCard.css'
import AnimatedElement from '../AnimationElement/AnimationElement';

interface ActionButton {
    title: string;
    url: string;
}

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    techUsed: string[];
    actionButtons: ActionButton[];
}

const ProjectCard: React.FC<CardProps> = ({
    imageSrc,
    title,
    description,
    techUsed,
    actionButtons,
}) => {

    return (
        <AnimatedElement initial="hidden"
            whileInView="visible"
            viewport={true}
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.2)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto hover:shadow-lg transition-shadow duration-300 border border-gray-200 p-4" >
            {/* Project Image */}
            < div className="project-image" >
                <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    objectFit="cover"

                />
            </div >

            {/* Card Body */}
            < div >
                <h3 className="text-xl font-semibold text-gray-800 subheading">{title}</h3>
                <p className="text-gray-600 text-sm mt-2 text-grey">{description}</p>

                {/* Tech Used */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {techUsed.map((tech, index) => (
                        <span
                            key={index}
                            className="tag"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 mt-4">
                    {actionButtons.map((btn, index) => (
                        <a
                            key={index}
                            href={btn.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 hover:underline font-semibold cursor-pointer"
                        >
                            {btn.title}
                        </a>
                    ))}
                </div>
            </div >
        </AnimatedElement >
    );
};

export default ProjectCard;
