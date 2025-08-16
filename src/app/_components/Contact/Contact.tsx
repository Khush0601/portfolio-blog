'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css'


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
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {

            return;
        }

        // Simulate sending (you can replace this with an API call)
        const phoneNumber = '9835587951'; // your WhatsApp number with country code
        const text = `Name: ${formData.name}%0AEmail/Number: ${formData.email}%0AMessage: ${formData.message}`;
        const url = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(url, '_blank');
        setSubmitted(true);

    };
    return (
        <section className="contact-section" id="contact">
            <motion.h2
                className="section-heading"
                initial="hidden"
                animate="visible"
                variants={fadeInUp as never}
            >
                Contact me
                <div className="underline" />
            </motion.h2>
            <motion.div initial="hidden"

                animate="visible"
                variants={fadeInUp as never}>

                <div>
                    <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm outline-none caret-pink-500 focus:ring-2 focus:ring-pink-500"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="flex-1 px-4 py-3 border border-gray-300 rounded-sm outline-none caret-pink-500 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>

                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-sm outline-none resize-none caret-pink-500 focus:ring-2 focus:ring-pink-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-2 border border-pink-500 text-pink-500 rounded-full hover:bg-pink-50 transition font-medium"
                        >
                            Send Message
                        </button>
                    </form>

                </div>

            </motion.div>
        </section>
    )
}

export default Contact
