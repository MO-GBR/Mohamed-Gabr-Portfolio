import React, { useState, useRef } from 'react'
import { useScroll } from '../hooks/useScroll'
import { LINKS } from '../constants';
import { toggleTheme } from '../redux/reducers/theme'
import { useDispatch, useSelector } from 'react-redux';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const MobileNavbar = () => {
    const [{ scrollY }] = useScroll();
    const [ toggle, setToggle ] = useState(false);
    const dispatch = useDispatch();
    const { mode } = useSelector(state => state.theme);

    const menuRef = useRef(null);
    const tl = useRef(null);

    useGSAP(
        () => {
            if (!menuRef.current) return;

            tl.current = gsap.timeline({ paused: true });

            tl.current
                .set(menuRef.current, { opacity: 0, y: -20 })
                .to(menuRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out",
                });
        },
        {
            dependencies: [toggle], // 👈 key part
            scope: menuRef,
        }
    );

    const toggleMenu = () => {
        setToggle(prev => {
            prev ? tl.current.reverse() : tl.current.play();
            return !prev;
        });
    };


    return (
        <div className='w-full flex-center mb-8'>
            <div className='fixed top-0 w-full flex-center z-50 flex-col'>
                <div className={
                    `flex items-center mt-1 z-50 ${scrollY > 50 ? 'border border-accent rounded-2xl p-2 my-5 w-[90%] bg-[url("/images/bg4.png")] bg-cover bg-center justify-between bg-white duration-300' : 'bg-transparent w-full justify-around'}`
                }>
                    <div className={`flex-center cursor-pointer ${scrollY > 50 ? 'text-white bg-black rounded-2xl p-2' : 'text-black'}`}>
                        <img src={scrollY > 50 || mode === 'dark' ? '/icons/white-code.svg' : '/icons/black-code.svg'} alt='logo' />
                        <p className={mode === 'light' ? 'logo' : 'logo text-white'}>Mohamed</p>
                    </div>
                    <div
                        className='border border-accent rounded-full flex-center bg-white p-1 cursor-pointer'
                        onClick={toggleMenu}
                    >
                        <img src='icons/more.svg' />
                    </div>
                </div>
                <div className='flex flex-col glass z-60 w-[80vw] items-center gap-5 p-5 mt-2' ref={menuRef} style={{ display: toggle ? "flex" : "none" }}>
                    {
                        LINKS.map(link => (
                            <li className='list-none' key={link.title}>
                                <a href={link.url} className='text-md font-bold text-white p-2 rounded-lg cursor-pointer'>{link.title}</a>
                            </li>
                        ))
                    }
                    <button onClick={() => dispatch(toggleTheme())} className='border border-primary rounded-full p-2'>
                        {mode === 'light' ? 'Dark' : 'Light'} Mode
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MobileNavbar