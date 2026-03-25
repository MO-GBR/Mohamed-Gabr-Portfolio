import React from 'react'
import { useSelector } from 'react-redux';
import StartBadge from './StartBadge';

const CTA = () => {
    return (
        <div className='mt-8 flex items-start justify-around w-full max-w-sm gap-4'>
            <button className='black-btn'>Contact Me</button>
            <button className='gray-btn'>See My Work</button>
        </div>
    )
};

const HeroText = () => {
    const { mode } = useSelector(state => state.theme);
    return (
        <>
            <StartBadge icon='/icons/white-star.svg' text='MERN | PERN Stack Developer & Next JS Developer' />
            <h1 className={`font-bold mb-8 ${mode === 'light' ? 'text-7xl max-lg:text-4xl' : 'text-5xl max-lg:text-3xl'}`}>Hi I'm Mohamed</h1>
            <p className={
                mode === 'light' ? 'sub-head' : 'bg-black p-5 text-muted w-[30rem] rounded-lg max-lg:w-[18rem]'
            }>I'm a full-stack web developer specializing in responsive, high-performance web applications using modern technologies.</p>
            <CTA />
        </>
    )
}

export default HeroText