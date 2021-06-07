import React from 'react';
import { Element }  from 'react-scroll';
import Skills from '../../assets/film-shoot.jpg'
import LinearProgress from '@material-ui/core/LinearProgress'
import './SkillContainer.css'

export const SkillContainer = () => {
    return (
        <Element name="skills" className="skillContainer">
            <div className="skillContainer_image">
                <img src={Skills} alt="" />
            </div>
            <div className="skillContainer_text">
                <h2>SKILL SET</h2>
                <div className="skillContainer_skillSet">
                    <h5>Digital Content Creation</h5>
                    <div className="skillSet_slider slider_1">
                        <LinearProgress variant="determinate" value={90} />
                    </div>
                </div>
                <div className="skillContainer_skillSet">
                    <h5>Script Writing</h5>
                    <div className="skillSet_slider slider_2">
                        <LinearProgress variant="determinate" value={80} />
                    </div>
                </div>
                <div className="skillContainer_skillSet">
                    <h5>Acting</h5>
                    <div className="skillSet_slider slider_3">
                        <LinearProgress variant="determinate" value={95} />
                    </div>
                </div>
                 <div className="skillContainer_skillSet">
                    <h5>Direction</h5>
                    <div className="skillSet_slider slider_4">
                        <LinearProgress variant="determinate" value={75} />
                    </div>
                </div>
               {/* <div className="skillContainer_skillSet">
                    <h5>NodeJS</h5>
                    <div className="skillSet_slider slider_5">
                        <LinearProgress variant="determinate" value={40} />
                    </div>
                </div>
                <div className="skillContainer_skillSet">
                    <h5>Docker</h5>
                    <div className="skillSet_slider slider_6">
                        <LinearProgress variant="determinate" value={50} />
                    </div>
                </div> */}
            </div>
        </Element>
    )
}
