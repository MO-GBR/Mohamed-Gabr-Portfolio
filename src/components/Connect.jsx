import React from 'react'

const Connect = () => {
    return (
        <div className='p-2 max-w-[50vw] max-lg:flex-center max-lg:w-full max-lg:max-w-full'>
            <h1 className='font-bold text-2xl'>Let's Connect</h1>
            <p>I am always open to discussing new projects, creative ideas or opportunities to be part of your vision feel free to reach out!</p>
            <div className='border border-primary rounded-2xl p-3 shadow-lg flex gap-3 m-3'>
                <div className='flex-center p-2 border border-primary rounded-lg shadow w-fit'>
                    <img src='/icons/email.svg' alt='email' className='img w-[30px]' />
                </div>
                <div className='flex flex-col'>
                    <div className='text-accent font-bold'>
                        Email @
                    </div>
                    <div className='text-sm max-lg:text-xs'>mohamedgabr012345@gmail.com</div>
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
                    <div className='text-sm max-lg:text-xs'>Egypt, Alexandrie</div>
                </div>
            </div>
            <p className='font-bold text-accent'>Connect with me</p>
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
    )
}

export default Connect