import './Info.css';
import AnimatedElement from '../AnimationElement/AnimationElement';
import Skeleton from '../Skeleton/Skeleton';
import { API_BASE } from '@/app/_utils/config';

export default async function Info() {
    let aboutLines: Array<string> = [];
    let personalDetails: Array<AboutI> = [];
    let error = null;

    try {
        const res = await fetch(`${API_BASE}/getAboutDetails`, {
            // Server fetch optimizations
            cache: 'no-store', // or 'force-cache' depending on needs
        });

        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const { data: aboutInfo }: { data: Array<PersonalI> } = await res.json();
        aboutLines = aboutInfo?.[0]?.aboutLines || [];
        personalDetails = aboutInfo?.[0]?.personalDetails || [];

    } catch (err) {
        console.error('Error fetching about details:', err);
        error = err;
    }


    return (
        <section className="about-section" id="about">
            <AnimatedElement
                className="section-heading"
                initial="hidden"
                animate="visible"
                as="h2"
            >
                About Me
                <div className="underline" />
            </AnimatedElement>

            <div className="about-container container grid grid-cols-1 md:grid-cols-2 gap-2">
                <AnimatedElement
                    className="about-left"
                    initial="hidden"
                    whileInView="visible"
                    viewport={true}
                >
                    <h3 className="subheading">Get to know me!</h3>
                    {error ? (
                        <p>Error loading data</p>
                    ) : aboutLines.length === 0 ? (
                        <Skeleton height="300px" />
                    ) : (
                        aboutLines.map((aboutData, aboutIndex) => (
                            <p key={aboutData + aboutIndex}>{aboutData}</p>
                        ))
                    )}
                </AnimatedElement>

                <AnimatedElement
                    className="about-right"
                    initial="hidden"
                    whileInView="visible"
                    viewport={true}
                >
                    <h3 className="subheading">Personal Details</h3>
                    {error ? (
                        <p>Error loading data</p>
                    ) : personalDetails.length === 0 ? (
                        <Skeleton height="300px" />
                    ) : (
                        <div className="grid grid-cols-2 ">
                            {personalDetails.map((detail, index) => (
                                <AnimatedElement
                                    key={detail.label}
                                    className="flex flex-col mb-2"
                                    initial="hidden"
                                    viewport={true}
                                    whileInView="visible"
                                    custom={index}
                                >
                                    <span className="label">{detail.label}:</span>
                                    <span className="value text-grey">{detail.value}</span>
                                </AnimatedElement>
                            ))}
                        </div>
                    )}
                </AnimatedElement>
            </div>
        </section>
    );
}

interface AboutI {
    label: string
    value: string
}

export interface PersonalI {
    personalDetails: Array<AboutI>
    aboutLines: Array<string>
    _id: string
}
