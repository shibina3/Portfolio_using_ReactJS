import React,{ useState } from 'react'
import './Projects.css'

export const Projects = ({title, img, desc, link}) => {
    const [show, setShow] = useState(false);
    return (
        <a href={link} target="_blank" rel="noreferrer" >
            <div className="project" onMouseEnter={()=> {setShow(true)}} onMouseLeave={()=> {setShow(false)}}>
                { show ? (
                    <div className="projectContent">
                        <h4>{title}</h4>
                        <p>{desc}</p>
                    </div>
                ) : (
                   <img src={img} alt="" />
                )}
            </div>
        </a>
    )
}
