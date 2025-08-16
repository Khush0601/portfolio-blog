import React from 'react';
import TypingText from '../TypingText/TypingText';
import SwiperList from '../SwiperList/SwiperList';
import { API_BASE } from '@/app/_utils/config';

const getIntro = async () => {
    try {
        const introData = await fetch(`${API_BASE}/getIntroSection`, {
            cache: 'no-store', // No caching on server side
        })
        if (!introData.ok) {
            throw new Error(`HTTP error! status: ${introData.status}`);
        }
        const { data } = await introData.json();
        return { introRes: data, error: null }

    } catch (err) {
        console.error('Error fetching project details:', err);
        return { introRes: null, error: err }
    }
}
export default async function Landing() {
    const { introRes, error } = await getIntro()
    const [introData] = introRes;
    // console.log('here is intodata', introData)
    return (
        <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="flex items-center justify-center text-4xl font-bold">
                <div>
                    <div className="text-center">
                        <TypingText firstText={introData?.name?.substring(0, 1)} restText={introData?.name?.substring(1)} />

                        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                            {introData?.designation}
                        </h2>

                        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-xs">
                            {introData?.tagline}
                        </p>

                        <div className="flex flex-row justify-center gap-4 flex-wrap">
                            <a
                                href={introData?.githubUrl}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition text-sm"
                            >
                                View Projects
                            </a>
                            <a
                                href={introData.resumeUrl}
                                className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-800 transition text-sm"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="relative  w-[300px] h-[300px] md:w-[350px] md:h-[350px]">
                    <SwiperList imageList={introData?.images || []} />
                </div>
            </div>
        </div>
    );
};
