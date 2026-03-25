import React from 'react'
import StartBadge from '../components/StartBadge';
import { useSelector } from 'react-redux';

const Card = ({ title, description, icon, grid, size }) => {
    return(
        <div className={`glass flex items-start p-2 m-2 ${grid}`}>
            <div className='bg-gray-200 p-1 rounded-sm mr-2'>
                <img src={icon} alt={title} className={`img w-[${size}]`} />
            </div>
            <div>
                <h3 className='font-bold text-xl'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
};

const About = () => {
    const { mode } = useSelector(state => state.theme);
    return (
        <section id='about' className='flex p-20 max-lg:flex-col max-lg:p-1'>
            <div className='p-3'>
                <div className='flex items-center justify-start gap-3'>
                    <StartBadge
                        icon='/icons/white-code.svg'
                        text='Full-Stack Developer'
                    />
                    <div className={mode === 'light' ? 'bg-black p-2 rounded-full mb-4' : 'border p-2 mb-4 rounded-full'}>
                        <img src='/icons/flash.svg' alt='about-flash' />
                    </div>
                </div>
                <h1 className='text-5xl font-bold mb-5'>Crafting Digital <br/> Experience That Matter</h1>
                <p>
                    I'm Mohamed, a full-stack web developer who helps businesses turn ideas into fast, reliable, and user-friendly web applications.
                    <br />
                    I focus on building modern websites and web apps that are not only visually clean, but also optimized for performance, usability, and real business results.
                    <br />
                    I enjoy working closely with clients to understand their goals and delivering solutions that actually solve problems.
                    <br />
                    Whether you need a business website, an e-commerce platform, or a custom web application, I take care of the full process — from planning and development to deployment.
                </p>
                <button className={`black-btn flex items-center ${mode === 'dark' && 'border'}`}>
                    <div className='bg-white p-2 rounded-full mr-4'>
                        <img src='/icons/download.svg' alt='download-cv' />
                    </div>
                    Download My Resume
                </button>
            </div>
            <div className='grid grid-cols-2 grid-rows-4 m-5 p-5 max-lg:p-1 max-lg:m-1 max-lg:grid-cols-1'>
                <Card    
                    title='Expertise'
                    icon='/icons/black-code.svg'
                    description='Proficient in MERN and PERN stacks, crafting responsive and high-performance web applications.'
                    grid='col-span-2 max-lg:row-span-1'
                    size={'30px'}
                />
                <Card    
                    title='Clean Code'
                    icon='/icons/black-star.svg'
                    description='Writing maintainable and efficient code following best practices and design patterns.'
                    grid='col-span-1 row-span-2 max-lg:row-span-1 max-lg:col-span-2'
                    size={'70px'}
                />
                <Card    
                    title='Performance'
                    icon='/icons/black-flash.svg'
                    description='Optimizing web applications for speed and responsiveness to enhance user experience.'
                    grid='col-span-1 row-span-2 max-lg:col-span-1 max-lg:row-span-1'
                    size={'70px'}
                />
                <div className='glass flex items-center justify-around p-2 m-2 col-span-2 row-span-1'>
                    <div className='flex-center flex-col'>
                        <p className='text-2xl font-bold text-primary'>100%</p>
                        <p className='text-xs text-accent'>Client Satisfaction</p>
                    </div>
                    <div className='flex-center flex-col'>
                        <p className='text-2xl font-bold text-primary'>24/7</p>
                        <p className='text-xs text-accent'>Support Available</p>
                    </div>
                    <div className='flex-center flex-col'>
                        <p className='text-2xl font-bold text-primary'>Fast</p>
                        <p className='text-xs text-accent'>Delivery Time</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About