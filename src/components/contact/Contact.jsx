import './contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const formRef = useRef()
    const [sentMsg, setSentMsg] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_z3ylvja', 'template_6p648xj', formRef.current, '28A2WQxIvPfLigpe_')
            .then((result) => {
                console.log(result.text);
                setSentMsg(true)
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        setTimeout(cleanMsg, 5000)
    }

    const cleanMsg = () => {
        const contactMsg = document.querySelector('.contact-msg')
        contactMsg.style.display = 'none'
    }

    return (
        <div className="contact-container">
            <div className="contact-bg"></div>

            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's discuss your project</h1>

                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="phone" className="contact-info-icon" />
                            +1 1234 556 75
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="email" className="contact-info-icon" />
                            contact@lamadev.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Address} alt="address" className="contact-info-icon" />
                            St.Saint Lucas, 2205 - Las Vegas, Nevada
                        </div>

                    </div>
                </div>

                <div className="contact-right">
                    <p className="contact-description">
                        <b>What is your story?</b> Get in touch. Always freelancing if the right project comes along.
                    </p>

                    {sentMsg &&
                        <div className='contact-msg'>
                            Email Sent! Soon you will receive the answer
                        </div>
                    }

                    <form ref={formRef} onSubmit={handleSubmit} className="contact-form" >

                        <input type="text" placeholder="Name: " name="user_name" required className="formName"
                        />

                        <input type="text" placeholder="Subject: " name="user_subject" required className="formSubject"
                        />

                        <input type="text" placeholder="Email: " name="user_email" required className="formEmail"
                        />

                        <textarea rows="10" placeholder="Message" name="user_message" required className="formMessage"
                        ></textarea>

                        <button>Submit</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Contact