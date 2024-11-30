import React, { useState } from 'react';
import AltColor from '../AltColor'
import CustomButon from '../CustomButton'
import './FormSubmit.css';
import Icon from '../Icon';
import emailjs from 'emailjs-com';

const FormSubmit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        
        .then((response)=>{
            console.log("Email Enviado", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        },(err) => (console.log("ERRO"), err))
    };

    return (
        <form className='form' onSubmit={handleSubmit} method='POST'>
            <h2>Contact  <AltColor color={'var(--SecondaryColor)'}> Me</AltColor></h2>
            <div className='form-container'>
                <div className='email'>
                    <input
                        className='input'
                        type='text'
                        placeholder='Full Name*'
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required
                    />
                    <input
                        className='input'
                        type='text'
                        placeholder='Email*'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                </div>
                <textarea
                    className='textarea'
                    placeholder='Write your message'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    required
                ></textarea>
                
                <div className='CustomButon'>
                    <CustomButon  name='Send Message.' type='submit' />
                </div>
            </div>
            <div className='BGEffect'>
                <span className='BGSpan'>
                    <span className='BGLine'></span>
                    <span className='BGLine2'></span>
                    <span className='BGLine'></span>
                </span>
                <span className='BGSpan2'>
                    <span className='BGLine'></span>
                    <span className='BGLine2'></span>
                    <span className='BGLine'></span>
                </span>
            </div>
            <div className='buttonDivForm'>
                    <Icon src='/GitHub.png' alt='GitHub' link='https://github.com/AugustoWinkler' />
                    <Icon src='/Linkedin.png' alt='Linkedin' link='https://www.linkedin.com/in/augusto-winkler-a268b81bb/' />   
            </div>
            
        </form>
    );
};

export default FormSubmit;
