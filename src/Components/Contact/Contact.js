import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to a server or perform any other actions
        console.log('Form submitted:', { name, email, message });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact" id='contact'>
            <h2 className="contact__title">Contact Me</h2>
            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__input-group">
                    <label htmlFor="name" className="contact__label">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="contact__input"
                    />
                </div>
                <div className="contact__input-group">
                    <label htmlFor="email" className="contact__label">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="contact__input"
                    />
                </div>
                <div className="contact__input-group">
                    <label htmlFor="message" className="contact__label">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="contact__textarea"
                    ></textarea>
                </div>
                <button type="submit" className="contact__button">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
