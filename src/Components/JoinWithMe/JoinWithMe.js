import React from 'react'
import './JoinWithMe.css'
import emailjs from 'emailjs-com'
import { template_id, user_id } from './apikeys'


export const JoinWithMe = () => {
    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', template_id, e.target, user_id).then(result => {
            console.log("result ",result.text)
            alert("Message Sent, I'll get back to you shortly", result.text)
        },
        error => {
            console.log("error ",error.text)
            alert("An error occured, Please try again.", error.text)
        })
    }
    return (
            <div className="joinWithMe_popup_body">
                {/* <form className="form" onSubmit={onSubmit} >
                    <div className="form__name">
                        <p>Your Name : </p>
                        <input name="name" type="text" placeholder="Your name..." className="form__input" />
                    </div>
                    <div className="form__subject">
                        <p>Subject : </p>
                        <input name="subject" type="text" placeholder="Subject..." className="form__input" />
                    </div>
                    <textarea name="mesage" type="text" placeholder="Your message..." className="form__input-message" ></textarea>
                    <button className="form__input-button">Send Message</button>
                </form> */}
                        <form className="form" onSubmit = {onSubmit}>
        <p>Your Name:</p>
        <input name="name" type="text" placeholder="Name…" className="form__input" />
        <p>Subject:</p>
        <input name="subject" type="text" placeholder="Subject…" className="form__input" />
        <p>Your Message:</p>
        <textarea name="message" type="text" placeholder="Your Message…" className="form__input-message" ></textarea>
        <button className="form__input—button">Send Message</button>
        </form>
            </div> 
    )
}
