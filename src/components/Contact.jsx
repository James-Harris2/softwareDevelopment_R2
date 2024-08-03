import { useState } from 'react';
import '../css/contact.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setResponseMessage('');

        // Simulate form submission
        try {
            // Replace with your form submission logic
            console.log(formData);
            setTimeout(() => {
                setIsSubmitting(false);
                setResponseMessage('Your message has been sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, 2000);
        } catch (error) {
            setIsSubmitting(false);
            setResponseMessage('There was an error sending your message. Please try again.');
        }
    };

    return (
        <div className='contact-container'>
            <div className='text-div'>
                <p>Welcome! Please fill out the form below to get in touch with me. </p>
                <p>You can also reach out to me via LinkedIn.</p>
            </div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
                {responseMessage && <p>{responseMessage}</p>}
            </form>
        </div>
    );
}

export default Contact;
