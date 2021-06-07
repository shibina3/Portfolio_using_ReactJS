import React from 'react'
import { Element } from 'react-scroll'
import { Projects } from '../Projects/Projects'
import AnnoyingGF from '../../assets/annoyingGF.jpg'
import Peela from '../../assets/Peela.jpg'
import NextGen from '../../assets/NextGen.jpg'
import Doggy from '../../assets/Doggy.jpg'
import Newyear from '../../assets/Newyear.jpg'
import Thillu from '../../assets/ThilluMullu.jpg'
import './ProjectContainer.css'

export const ProjectContainer = () => {
    const project_array=[
        {
            image: Doggy,
            title: "Tamada Media - Soup Boy",
            desc: "Ithu Doggy STyle-u Daw",
            link: "https://www.youtube.com/watch?v=Ix2dl8NyI_0&t=7s"
        },
        {
            image: Peela,
            title: "Tamada Media - Soup Boy",
            desc: "Types of Peela",
            link: "https://www.youtube.com/watch?v=BAGTLwK6l_4"
        },
        {
            image: NextGen,
            title: "NextGen",
            desc: "Life after love failure",
            link: "https://www.youtube.com/watch?v=8_muVbVt2n4"
        },
        {
            image: AnnoyingGF,
            title: "Tamada Media - Soup Boy",
            desc: "Annoying Girl Friend",
            link: "https://www.youtube.com/watch?v=tD22Y0vBCyQ&t=169s"
        },
        {
            image: Thillu,
            title: "Tamada Media - Soup Boy",
            desc: "Thillu Mullu Kadhal",
            link: "https://www.youtube.com/watch?v=Pxs4Jl1u1-o"
        },
        {
            image: Newyear,
            title: "Tamada Media - Soup Boy",
            desc: "After New Year 2020",
            link: "https://www.youtube.com/watch?v=WeIQfP5-9kQ"
        }
    ]
    return (
        <Element id="projects" className="projectContainer">    
            <h1>Videos</h1>
            <p>Have a look at some of my videos from Youtube.</p>
            <div className="projectContainer_projects">
            {
                    project_array.map( (project,index) => {
                        return(<Projects 
                        key={index} 
                        title={project.title} 
                        img={project.image} 
                        desc={project.desc} 
                        link={project.link} 
                        />)
                    })
                }
            </div>
        </Element>
    )
}
