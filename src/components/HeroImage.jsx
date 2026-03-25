import React from 'react'
import { useSelector } from 'react-redux';

const HeroImage = () => {
    const { mode } = useSelector(state => state.theme);
    return (
        <div className='flex-center w-full'>
            {
                mode === 'light' && <img src='/images/frame.png' alt='background' className='max-w-full h-auto w-[75rem] rounded-2xl relative z-0' />
            }
            <div className={
                mode === 'light' ? 'flex items-end absolute' : 'flex items-end justify-center'
            }>
                <img src={mode === 'light' ?'/images/profile.jpg' : '/images/profile-dark.jpg'} alt='profile' className={`img rounded-2xl ${mode === 'light' ? 'w-[14rem] max-lg:w-[12rem]' : 'w-[18rem] max-lg:w-[14rem] border-4 border-emerald'}`} />
                <Badge />
            </div>
        </div>
    )
}

const Badge = () => {
    const { mode } = useSelector(state => state.theme);
    return (
        <div className={
            `flex-center bg-gray-200 shadow-lg rounded-xl absolute border border-gray-400 ${mode === 'light' ? '-left-10 -bottom-4' : 'bottom-15 max-lg:bottom-48'}`
        }>
            <img src='/tech/react.png' alt='React' className='img w-[25px] m-2' />
            <img src='/tech/express.png' alt='Express' className='img w-[25px] m-1' />
            <img src='/tech/mongodb.png' alt='Mongo DB' className='img w-[25px] m-1' />
            <img src='/tech/nodejs.png' alt='Node JS' className='img w-[25px] m-1' />
            <img src='/tech/postgres.png' alt='Postgre SQL' className='img w-[25px] m-2' />
        </div>
    )
};

export default HeroImage