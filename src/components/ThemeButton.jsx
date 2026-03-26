import React, { useState } from 'react'
import { toggleTheme } from '../redux/reducers/theme'
import { useDispatch, useSelector } from 'react-redux';

const ThemeButton = () => {
    const [ toggle, setToggle ] = useState(false);
    const dispatch = useDispatch();
    const { mode } = useSelector(state => state.theme);

    const swithTheme = () => {
        setToggle(!toggle);
        dispatch(toggleTheme());
    };
    return (
        <div 
            className={
                `border-2 p-0 rounded-full w-[70px] h-[35px] flex items-center 
                    ${toggle ? 'justify-end' : 'justify-start'}
                    ${mode === 'light' ? 'bg-yellow-100' : 'bg-blue-100'}
                `
            }
            onClick={swithTheme}
        >
            <div className='w-[40px] h-[40px] border-2 rounded-full flex-center bg-white cursor-pointer'>
                {
                    mode === 'light'
                        ? <img src='/icons/sun.svg' alt='sun' />
                        : <img src='/icons/moon.svg' alt='moon' />
                }
            </div>
        </div>
    )
}

export default ThemeButton