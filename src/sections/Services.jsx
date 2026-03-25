import React from 'react'
import { SERVICES } from '../constants'
import Title from '../components/Title';
import Offers from '../components/Offers';
import { useSelector } from 'react-redux';

const right = 'rounded-tr-2xl rounded-br-2xl h-[27rem] max-lg:rounded-2xl';
const left = 'rounded-tl-2xl rounded-bl-2xl h-[27rem] max-lg:rounded-2xl';
const full = 'rounded-2xl h-[33rem]';

const Card = ({ title, services, borderRadius, icon }) => {
    const { mode } = useSelector(state => state.theme);
    return (
        <div className={`border shadow-xl w-[22rem] max-lg:w-[18rem] pt-7 max-lg:my-5 ${borderRadius}`}>
            <div className='flex-center relative'>
                <div className='flex-center w-[5rem] h-[5rem] border border-gray-800 rounded-full absolute -top-15 bg-white shadow-lg'>
                    <img src={icon} alt={title} className='img w-[35px]' />
                </div>
            </div>
            <div>
                <h2 className={`text-3xl ${mode === 'light' ? 'text-accent' : 'text-muted'} p-5 text-center font-bold`}>
                    {title}
                </h2>
                <ul className='p-5'>
                    {
                        services?.map((service, index) => (
                            <div className='flex items-center gap-3' key={index}>
                                <img src='/icons/black-star.svg' alt='check' className={mode === 'dark' ? 'bg-white p-1 rounded-full w-[30px] m-2' : 'w-[20px]'} />
                                <li className='max-lg:text-sm'>{service}</li>
                            </div>
                        ))
                    }
                </ul>
                <div className='flex-center w-full'>
                    <button className={`black-btn ${mode === 'dark' && 'border'}`}>View Technologies</button>
                </div>
            </div>
        </div>
    )
};

const Services = () => {
    return (
        <section id='service'>
            <Title 
                title='What I Can Do' 
                icon='/icons/titles/build.svg' 
                text='Built for innovation. Designed for results.'
                subText='I offer a comprehensive range of services to bring your ideas to life, from sleek front-end designs to robust back-end solutions.'
            />
            <div className='flex-center m-15 max-lg:flex-col'>
                <Card 
                    title='Frontend Development'
                    services={SERVICES.front}
                    borderRadius={left}
                    icon='/icons/brush.svg'
                />
                <Card
                    title='Backend Development'
                    services={SERVICES.back}
                    borderRadius={full}
                    icon='/icons/back.svg'
                />
                <Card
                    title='Other Skills'
                    services={SERVICES.others}
                    borderRadius={right}
                    icon='/icons/more.svg'
                />
            </div>
            {/* <Offers /> */}
        </section>
    )
}

export default Services