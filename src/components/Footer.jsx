import React from 'react'
import { LINKS } from '../constants'

const Footer = () => {
    return (
        <footer className='p-5 border-t border-primary mt-10 flex justify-center flex-col'>
            <div className='flex justify-around w-full'>
                <div>
                    <h1 className='font-bold text-primary text-2xl'>Mohamed</h1>
                    <p className='text-accent'>Crafting seamless digital experiences with modern web technologies</p>
                    <div className='border border-primary rounded-2xl p-3 shadow-lg flex gap-3 m-3'>
                        <div className='flex-center p-2 border border-primary rounded-lg shadow w-fit'>
                            <img src='/icons/email.svg' alt='email' className='img w-[30px]' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-accent font-bold'>
                                Email @
                            </div>
                            <div className='text-sm'>mohamedgabr012345@gmail.com</div>
                        </div>
                    </div>
                    <div className='border border-primary rounded-2xl p-3 shadow-lg flex gap-3 m-3'>
                        <div className='flex-center p-2 border border-primary rounded-lg shadow w-fit'>
                            <img src='/icons/location.svg' alt='email' className='img w-[30px]' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-accent font-bold'>
                                Location
                            </div>
                            <div className='text-sm'>Egypt, Alexandrie</div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'>Quick Links</h1>
                    <ul>
                        {
                            LINKS.map((link, index) => (
                                <li className='list-disc' key={index}>
                                    <a href={link.href} className='decoration-0'>{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-2xl font-bold'>Connect With Me</h1>
                    <p className='text-accent'>Let's connect and create something amazing together</p>
                    <div className='flex gap-3'>
                        <a href='https://www.instagram.com/itsmogabr' target="_blank" className='flex-center p-2 border border-primary rounded-lg shadow w-fit'>
                            <img src='/icons/instagram.svg' alt='email' className='img w-[30px]' />
                        </a>
                        <a href='https://www.linkedin.com/in/mohameedgabr0/' target="_blank" className='flex-center p-2 border border-primary rounded-lg shadow w-fit'>
                            <img src='/icons/linkedin.svg' alt='email' className='img w-[30px]' />
                        </a>
                        <a href='https://www.linkedin.com/in/mohameedgabr0/' target="_blank" className='flex-center p-2 border border-primary rounded-lg shadow w-fit'>
                            <img src='/icons/blue-github.svg' alt='email' className='img w-[30px]' />
                        </a>
                    </div>
                </div>
            </div>
            <p className='border-t border-primary mt-5 pt-3 text-center w-full text-sm text-accent'>
                © 2026 Mohamed Gabr. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer