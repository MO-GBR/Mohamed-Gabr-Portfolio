import React from 'react'

const OffersCard = ({icon, text, subText, grid}) => {
    return (
        <div className={`border border-primary rounded-2xl bg-blue-100 hover:bg-teal-100 p-5 shadow-lg ${grid}`}>
            <div className='border border-primary p-2 rounded-2xl w-fit'>
                <img src={icon} alt={text} className='img w-[40px]' />
            </div>
            <p className='font-bold text-2xl'>{text}</p>
            <p className='text-md text-accent'>{subText}</p>
        </div>
    )
};

const Offers = () => {
    return (
        <div className='w-full flex-center p-10'>
            <div className='grid grid-cols-4 grid-rows-3 gap-10'>
                <OffersCard
                    icon='/icons/titles/build.svg'
                    text='UI/UX Design'
                    subText='Creating intuitive and engaging user interfaces.'
                    grid='col-span-2 row-span-2'
                />
                <OffersCard
                    icon='/icons/titles/build.svg'
                    text='UI/UX Design'
                    subText='Creating intuitive and engaging user interfaces.'
                    grid='col-span-2 row-span-2'
                />
                <OffersCard
                    icon='/icons/titles/build.svg'
                    text='UI/UX Design'
                    subText='Creating intuitive and engaging user interfaces.'
                    grid='col-span-1 row-span-1'
                />
                <OffersCard
                    icon='/icons/titles/build.svg'
                    text='UI/UX Design'
                    subText='Creating intuitive and engaging user interfaces.'
                    grid='col-span-1 row-span-1'
                />
                <OffersCard
                    icon='/icons/titles/build.svg'
                    text='UI/UX Design'
                    subText='Creating intuitive and engaging user interfaces.'
                    grid='col-span-1 row-span-1'
                />
                <OffersCard
                    icon='/icons/titles/build.svg'
                    text='UI/UX Design'
                    subText='Creating intuitive and engaging user interfaces.'
                    grid='col-span-1 row-span-1'
                />
            </div>
        </div>
    )
}

export default Offers