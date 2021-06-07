import { IconButton } from '@material-ui/core'
import React from 'react'
import { Element } from 'react-scroll'
import { Facebook, LinkedIn, Instagram } from '@material-ui/icons'
import './Contact.css'

export const Contact = () => {
    return (
        <Element className="contact" id="contact" >
            <h1>Contact Me</h1>
            <div className="contact_details">
                <p>
                    Email : <span>krsooraj1992@gmail.com</span>
                </p>
                <p>
                    Youtube Channel : <span>Soup Boy</span>
                </p>
                <div className="contact_socialMedia">
                <a href="https://www.linkedin.com/in/sooraj-kr-39077b1a7/" target="_blank"  rel="noreferrer">
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>
                <a href="https://www.facebook.com/soupboyssooraj.soupboyssooraj" target="_blank"  rel="noreferrer">
                    <IconButton>
                        <Facebook />
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/soupboyssooraj/" target="_blank" rel="noreferrer" >
                    <IconButton>
                        <Instagram />
                    </IconButton>
                </a>
            </div>
            </div>
            
        </Element>
    )
}
