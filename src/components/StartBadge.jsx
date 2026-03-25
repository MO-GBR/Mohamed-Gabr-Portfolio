import React from 'react'
import { useSelector } from 'react-redux';

const StartBadge = ({icon, text}) => {
    const { mode } = useSelector(state => state.theme);
    return (
        <div className={`font-bold max-lg:text-xs w-fit max-lg:w-[80%] ${mode === 'light' ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-2 mb-4 rounded-full flex items-center gap-2`}>
            {
                mode === 'light'
                    ? <img src={icon} alt='star' />
                    : (
                        <div className='flex-center max-w-full h-auto w-fit p-1 rounded-full bg-black'>
                            <img src={icon} alt='star' />
                        </div>
                    )
            }
            {text}
        </div>
    )
}

export default StartBadge