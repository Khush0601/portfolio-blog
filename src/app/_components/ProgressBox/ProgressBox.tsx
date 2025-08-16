'use client'
import React, { useState, useRef, useEffect, ReactNode } from 'react'
import Image from 'next/image'
import './ProgressBox.css'
import { motion } from 'framer-motion'
import AnimatedElement from '../AnimationElement/AnimationElement'

const ProgressBox = ({ progressDetails }: { progressDetails: ProgressI }) => {
    const { name, image, progress } = progressDetails
    const [hover, setHover] = useState(false)
    const [tooltipPosition, setTooltipPosition] = useState('top')
    const [tooltipAlign, setTooltipAlign] = useState('center')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const cardRef = useRef<any>(null)

    // State for image fallback
    const [imgSrc, setImgSrc] = useState(image)
    const fallbackImage = '/image_not_available.png' // place fallback in /public

    useEffect(() => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const { left, right, top } = rect
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight

        // Horizontal positioning
        if (left < 100) {
            setTooltipAlign('left')
        } else if (right > windowWidth - 100) {
            setTooltipAlign('right')
        } else {
            setTooltipAlign('center')
        }

        // Vertical positioning
        if (top > windowHeight / 2) {
            setTooltipPosition('top')
        } else {
            setTooltipPosition('bottom')
        }
    }, [hover])

    const getTooltipClasses = () => {
        let base = 'absolute z-50 px-2 py-1 text-sm text-white bg-black bg-opacity-80 rounded shadow-md whitespace-nowrap transition-opacity duration-300 bottom-full mb-2'
        if (tooltipAlign === 'left') base += ' left-0'
        else if (tooltipAlign === 'right') base += ' right-0'
        else base += ' left-1/2 -translate-x-1/2'
        return base + ' z-100'
    }

    return (
        <AnimatedElement
            initial="hidden"
            whileInView="visible"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            viewport={true}
            whileHover={{ scale: 1.05, boxShadow: '0px 8px 24px rgba(0,0,0,0.2)' }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative flex flex-col items-center w-40 p-1 bg-white border border-gray-200 rounded shadow-sm dark:bg-gray-800 dark:border-gray-700"
            ref={cardRef}
        >
            <div className="relative w-35 h-35 overflow-hidden rounded">
                <Image
                    src={imgSrc}
                    alt={`${name} progress`}
                    layout="fill"
                    objectFit="cover"
                    unoptimized // allows native onError
                    onError={() => setImgSrc(fallbackImage)}
                />
                <div
                    className={`absolute bottom-0 left-0 bg-opacity-40`}
                    style={{ height: `${progress}%`, width: '100%' }}
                ></div>
            </div>
            <p className="text-white text-sm font-bold tracking-wide three-d-text mt-1 title">{name}</p>

            {hover && (
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className={getTooltipClasses()}
                >
                    {progressDetails.description ?? progressDetails.name}
                </motion.div>
            )}
        </AnimatedElement>
    )
}

export default ProgressBox

export interface ProgressI {
    _id: string
    name: string
    image: string
    progress?: number
    description?: string
    __v: number
}
