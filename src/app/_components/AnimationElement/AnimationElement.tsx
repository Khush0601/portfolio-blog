'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

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
export default function AnimatedElement({
    as: Tag = "div", // default element
    children,
    className = "",
    variants = fadeInUp,
    initial = "hidden",
    animate = "visible",
    viewport = false,
    whileInView = "visible",
    transition = {},
    custom = 0,
    ...rest

}: any) {
    const MotionTag = motion(Tag);

    return (
        <MotionTag
            className={className}
            initial={initial}
            animate={animate}
            variants={variants}
            whileInView={whileInView}
            custom={custom}
            transition={transition}
            viewport={{ once: viewport }}
            {...rest}
        >
            {children}
        </MotionTag>
    );
}
