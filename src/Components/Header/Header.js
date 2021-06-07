import React,{ useState } from 'react';
import { Link } from 'react-scroll';
import Modal from 'react-modal'
import './Header.css'
import CloseIcon from '@material-ui/icons/Close';
import { JoinWithMe } from '../JoinWithMe/JoinWithMe';

export const Header = () => {
    const[modalOpen, setModalOpen] = useState(false)
    return (
        <div className="header">
           <div className="header_left">
               <h1>Arti<span>st</span></h1>
            </div> 
            <div className="header_right">
                <Link to="about" smooth={true} duration={500}>
                    <h4>About Me</h4>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                    <h4>Skills</h4>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    <h4>Videos</h4>
                </Link>
                <Link to="experience" smooth={true} duration={500}>
                    <h4>Experience</h4>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                    <h4>Contact</h4>
                </Link>
                <h4 className="header_right_button" onClick={() => setModalOpen(true)} >
                    Join with Me
                </h4>
                
                {/* Popup for Join with Me */}
                <Modal isOpen={modalOpen}>
                    <div className="joinWithMe_popup_head">
                        <p>Get in touch with Me!</p>
                        <CloseIcon className="joinWithMe_close" onClick={()=> setModalOpen(false)} />
                    </div>
                    <JoinWithMe />
                </Modal>

            </div>
        </div>
    )
}
