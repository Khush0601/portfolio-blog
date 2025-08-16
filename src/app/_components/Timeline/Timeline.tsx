'use client'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'
import Image from 'next/image';

const TimeLine = ({ timeLineList }: { timeLineList: Array<TimeLineI> }) => {
    const softColors = [
        "rgba(120, 144, 156, 1)",   // Soft blue-grey
        "rgba(174, 213, 129, 1)",   // Muted light green
        "rgba(255, 213, 79, 1)",    // Soft amber
        "rgba(129, 212, 250, 1)",   // Light sky blue
        "rgba(255, 171, 145, 1)",   // Soft coral
        "rgba(207, 216, 220, 1)",   // Light grey-blue
        "rgba(179, 157, 219, 1)",   // Muted lavender
        "rgba(255, 241, 118, 1)",   // Soft yellow
        "rgba(128, 203, 196, 1)",   // Muted teal
        "rgba(149, 117, 205, 1)",   // Calm purple
        "rgba(100, 181, 246, 1)",   // Calm blue
        "rgba(161, 136, 127, 1)",   // Warm beige
        "rgba(244, 143, 177, 1)",   // Dusty pink
        "rgba(144, 164, 174, 1)",   // Slate grey
        "rgba(255, 202, 40, 1)",    // Soft gold
        "rgba(129, 199, 132, 1)",   // Soft green
        "rgba(239, 154, 154, 1)",   // Rose blush
        "rgba(179, 229, 252, 1)",   // Mist blue
        "rgba(255, 224, 178, 1)",   // Soft peach
        "rgba(224, 224, 224, 1)"    // G
    ]
    return (
        <VerticalTimeline lineColor='#6c757d'>
            {
                timeLineList.map((timeLine) => {
                    const timelineIndex = Math.floor(Math.random() * softColors.length)
                    return (
                        <VerticalTimelineElement
                            key={timeLine._id}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: softColors[timelineIndex], color: 'black' }}
                            contentArrowStyle={{ borderRight: `7px solid  ${softColors[timelineIndex]}` }}
                            date={`${timeLine.startDate} - ${timeLine.endDate}`}
                            iconStyle={{ background: softColors[timelineIndex], color: '#fff' }}
                            icon={timeLine.src ? <div className='icon-avtar'><Image src={timeLine.src} alt="icon" width={30} height={30} /></div> : <div className='icon-avtar'><Image src={'/image_not_available.png'} alt="icon" width={30} height={30} /></div>}
                        >
                            <h3 className="vertical-timeline-element-title heading">{timeLine.heading}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{timeLine.subHeading}</h4>
                            <p>
                                {timeLine.description}
                            </p>
                            {timeLine?.duration && <div>
                                <b>Duration</b> : <b>{timeLine?.duration}</b>
                            </div>}

                        </VerticalTimelineElement>
                    )
                })
            }

            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<div className='icon-avtar'><Image src={'/stop.png'} alt="icon" width={30} height={30} /></div>}
            />
        </VerticalTimeline>
    )
}

export default TimeLine;

export interface TimeLineI {
    company?: Company
    _id: string
    title: string
    duration: string
    startDate: string
    endDate: string
    description: string
    certificateLink?: string
    src?: string
    heading: string
    institution?: string
    logoUrl?: string
    qualification?: string
    subHeading: string
}

export interface Company {
    name: string
    logo: string
}