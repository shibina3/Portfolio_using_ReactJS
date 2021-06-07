import React from 'react'
import './Experience.css'

export const Experience = ({years,company,style}) => {
    return (
        <div style={{...style}} className="experience" >
            <h1>{years}</h1>
            <p>{company}</p>
        </div>
    )
}
