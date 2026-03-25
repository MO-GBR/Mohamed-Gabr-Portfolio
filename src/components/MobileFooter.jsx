import React from 'react'

const MobileFooter = () => {
    return (
        <div className='p-5 flex-center flex-col gap-3 border-t border-primary mt-10 w-full'>
            <h1 className='font-bold text-primary text-2xl'>Mohamed</h1>
            <p className='text-accent'>Crafting seamless digital experiences with modern web technologies</p>
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
            <p className='border-t border-primary mt-5 pt-3 text-center w-full text-sm text-accent'>
                © 2026 Mohamed Gabr. All rights reserved.
            </p>
        </div>
    )
}

export default MobileFooter