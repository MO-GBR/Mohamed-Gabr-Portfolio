import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import Title from '../components/Title'
import Connect from '../components/Connect'
import { useSelector } from 'react-redux'

const Contact = () => {
    const { mode } = useSelector(state => state.theme);

    const formRef = useRef(null);

    const key = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            formRef.current,
            {
                publicKey: key
            }
        ).then(() => {
            alert('Email sent successfuly');
            console.log('Email Sent')
        }).catch((e) => console.log('Error-emailJS >>>', e));
    };
    return (
        <section id='contact'>
            <Title
                title='Get In Touch'
                icon='/icons/titles/contact.svg'
                text="Let's Work Together"
                subText="Have a project in mind or just want to say hi? My inbox is always open. Whether you have a question or just want to connect, feel free to drop a message!"
            />
            <div className='flex justify-center items-start gap-5 w-full max-lg:flex-col'>
                <form ref={formRef} onSubmit={sendEmail} className='border border-accent rounded-2xl p-3 m-5 min-w-[50vw] shadow-lg'>
                    <label className='font-bold text-lg mb-2 block'>
                        Name
                    </label>
                    <input 
                        type="text" 
                        placeholder='Your Name' 
                        name='from_name'
                        className='w-full p-2 mb-3 rounded-lg border border-gray-300 focus:outline-accent' 
                    />
                    <label className='font-bold text-lg mb-2 block'>
                        Email
                    </label>
                    <input 
                        type="email" 
                        placeholder='Your E-mail' 
                        name='from_email'
                        className='w-full p-2 mb-3 rounded-lg border border-gray-300 focus:outline-accent'
                    />
                    <label className='font-bold text-lg mb-2 block'>
                        Message
                    </label>
                    <textarea 
                        type="text" 
                        placeholder='What is it in your mind?' 
                        name='message'
                        className='w-full p-2 mb-3 rounded-lg border border-gray-300 focus:outline-accent'
                    />
                    <button className={`p-2 rounded-2xl w-[10rem] text-white font-bold cursor-pointer ${mode === 'light' ? 'bg-primary' : 'bg-emerald'}`} type="submit">Send</button>
                </form>
                <Connect />
            </div>
        </section>
    )
}

export default Contact