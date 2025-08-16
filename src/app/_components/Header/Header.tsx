"use client";
import { useEffect, useState } from "react";
import './Header.css'

import clsx from "clsx"; // optional, for class toggling (you can remove if not using)

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuList = [
        {
            label: 'About',
            value: 'about'
        },
        {
            label: 'Projects',
            value: 'projects'
        },
        {
            label: 'Education',
            value: 'education'
        },
        {
            label: 'Skill',
            value: 'skill'
        },
        {
            label: 'Contact',
            value: 'contact'
        },
    ]
    const [active, setActive] = useState('about');

    useEffect(() => {
        const checkInView = () => {
            if (typeof window === 'undefined') return; // SSR guard
            const sections = document.querySelectorAll("section");
            let inViewSection = null;

            sections.forEach((sec) => {
                const rect = sec.getBoundingClientRect();
                if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                    inViewSection = sec.id;
                }
            });

            if (inViewSection === null && active === 'about') {
                setActive('about');
            }
            if (inViewSection && inViewSection !== active) {
                setActive(inViewSection);
            }
        };

        checkInView(); // run on mount
        window.addEventListener("scroll", checkInView);

        return () => window.removeEventListener("scroll", checkInView);
    }, []);


    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold caret-pink-500">kʜᴜ<span className="text-red-400">श</span>ʙᴏᴏ</div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    {
                        menuList.map((menuItem, menuIndex) => {
                            return <a onClick={() => setActive(menuItem.value)} key={`${menuItem.value}-${menuIndex}`} href={`#${menuItem.value}`} className={`hover:text-indigo-500 ${active === menuItem.value ? 'active-nav' : ''}`}>{menuItem.label}</a>
                        })
                    }

                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-indigo-600 focus:outline-none text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Overlay Menu */}
            <div
                className={clsx(
                    "fixed top-0 right-0 h-full w-[260px] md:hidden transition-transform duration-500 ease-in-out backdrop-blur-md bg-white/30 border-l border-white/20 shadow-lg z-50",
                    menuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="px-4 py-4 flex items-center justify-end">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="text-indigo-600 focus:outline-none text-2xl"
                    >
                        ✕
                    </button>
                </div>
                <div className="flex flex-col px-4 space-y-4 text-lg font-medium text-gray-700">
                    {
                        menuList.map((menuItem, menuIndex) => {
                            return <a onClick={() => setActive(menuItem.value)} key={`${menuItem.value}-${menuIndex}`} href={`#${menuItem.value}`} className={`nav-sm hover:text-indigo-500 ${active === menuItem.value ? 'active-nav-sm' : ''}`}>{menuItem.label}</a>
                        })
                    }
                </div>
            </div>
        </header>
    );
}
