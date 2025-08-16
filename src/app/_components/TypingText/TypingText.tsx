"use client"
import React, { useEffect, useState } from 'react'

const TypingText = ({ firstText = 'H', restText = "i, I'm Khushboo Kumari" }) => {
    const [displayedText, setDisplayedText] = useState(firstText);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index < restText.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + restText.charAt(index));
                setIndex(index + 1);
            }, 100); // Typing speed

            return () => clearTimeout(timeout);
        }
    }, [index, restText]);
    return (
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 border-r-2 border-gray-800 pr-2 inline-block animate-blink">
            {displayedText}
        </h1>
    )
}

export default TypingText
