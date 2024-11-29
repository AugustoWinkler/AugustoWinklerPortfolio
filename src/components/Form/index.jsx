import React, { useState } from 'react';
import AltColor from '../AltColor'
import CustomButon from '../CustomButton'
import './FormSubmit.css';

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
        emailjs.send("service_b0hts96","template_o1828b4", templateParams, "-sUP7ylExYU2nhVCX")
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
            
        </form>
    );
};

export default FormSubmit;
