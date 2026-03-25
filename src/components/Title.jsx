import React from 'react'
import { useSelector } from 'react-redux';

const Title = ({ title, icon, text, subText }) => {
    const { mode } = useSelector(state => state.theme);
    return (
        <div className='w-full my-10 flex-center flex-col'>
            <div className='flex-center gap-3 bg-white rounded-full w-fit p-3 border border-blue-500 shadow-lg'>
                <img src={icon} alt={title} className='img w-8 h-8' />
                <p className='text-primary font-bold text-xl'>{title}</p>
            </div>
            <h1 className='text-center text-4xl font-bold my-5'>
                {text}
            </h1>
            <h2 className={`${mode === 'light' ? 'text-accent' : 'text-muted'} font-medium text-center`}>
                {subText}
            </h2>
        </div>
    )
}

export default Title