import React from 'react';
import { Link } from 'react-scroll';
import './TopContent.css';

export const TopContent = () => {
    return (
        <div className="topContent">
            <div className="topContent_main">
                <h1>Sooraj K R.</h1>
                <p>A passionate Artist and a Youtuber.</p>
                <a href="https://drive.google.com/file/d/1nujgp5i_PH08pO14Uh-DLtxCAwLwIT9t/view?usp=sharing" target="_blank" rel="noreferrer" >
                    <button className="topContent_downloadButton">Download CV</button>
                </a>
                <Link to="projects" smooth={true} duration={500}>
                    <button className="topContent_workButton">My Work</button>
                </Link>
            </div>
        </div>
    )
}
