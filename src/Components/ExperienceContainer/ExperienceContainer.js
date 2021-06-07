import React from 'react'
import { Element } from 'react-scroll'
import { Experience } from '../Experience/Experience'
import './ExperienceContainer.css'

export const ExperienceContainer = () => {
    const experiences = [
        {
            years: "2+",
            company: "Tamada Media",
        },
        {
            years: "1+",
            company: "Video Memes",
        },
        {
            years: "2+",
            company: "Mokkapostu",
        },
        {
            years: "2+",
            company: "Chennai Memes",
        }
    ]
    return (
        <Element className="experienceContainer" id="experience" >
            <h1>Experience</h1>
            <div className="experience_list">
                {
                    experiences.map((experience,index)=>{
                        return(
                            <Experience key={index} years={experience.years} company={experience.company} />
                        )
                    })
                }
            </div>
        </Element>
    )
}
