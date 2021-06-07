import React from 'react';
import { Element } from 'react-scroll';
import { TopContent } from '../TopContent/TopContent';
import './TopContainer.css';

export const TopContainer = () => {
    return (
            <Element name="about" className="topContainer">
                <TopContent />
            </Element>
    )
}
