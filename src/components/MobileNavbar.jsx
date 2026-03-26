import React, { useState, useRef } from 'react'
import { useScroll } from '../hooks/useScroll'
import { LINKS } from '../constants';
import { toggleTheme } from '../redux/reducers/theme'
import { useDispatch, useSelector } from 'react-redux';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ThemeButton from './ThemeButton';

gsap.registerPlugin(useGSAP);

const MobileNavbar = () => {
    const [{ scrollY }] = useScroll();
    const [ open, setOpen ] = useState(false);
    const dispatch = useDispatch();
    const { mode } = useSelector(state => state.theme);

    const menuRef = useRef(null);
    const overlayRef = useRef(null);
    const line1 = useRef(null);
    const line2 = useRef(null);
    const line3 = useRef(null);

    const openMenu = () => {
        setOpen(true);
    
        const tl = gsap.timeline();
        tl.set(overlayRef.current, { pointerEvents: "auto" }).to(
            overlayRef.current, 
            { opacity: 1, duration: 0.3 }
        ).fromTo(
            menuRef.current,
            { x: "100%" },
            { x: "0%", duration: 0.4, ease: "power3.out" },
            "-=0.2"
        ).to(line1.current, { y: 8, duration: 0.2 }, 0)
            .to(line3.current, { y: -8, duration: 0.2 }, 0)
            .to(line2.current, { opacity: 0, duration: 0.2 }, 0)
            .to(line1.current, { rotate: 45, duration: 0.2 }, 0.2)
            .to(line3.current, { rotate: -45, duration: 0.2 }, 0.2);
    };
    const closeMenu = () => {
        const tl = gsap.timeline({
            onComplete: () => setOpen(false),
        });
    
        tl.to(menuRef.current, {
            x: "100%",
            duration: 0.3,
            ease: "power3.in",
        }).to(overlayRef.current, {
            opacity: 0,
            duration: 0.2,
            onStart: () => gsap.set(overlayRef.current, { pointerEvents: "none" }),
        }).to(line1.current, { rotate: 0, y: 0, duration: 0.2 }, 0)
            .to(line3.current, { rotate: 0, y: 0, duration: 0.2 }, 0)
            .to(line2.current, { opacity: 1, duration: 0.2 }, 0);
    };
    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={open ? closeMenu : openMenu}
                className="z-50 flex h-10 w-10 flex-col justify-center gap-1.5 md:hidden m-3 border rounded-[10px] p-2 fixed bg-white cursor-pointer"
            >
                <span ref={line1} className="block h-0.5 w-full bg-black" />
                <span ref={line2} className="block h-0.5 w-full bg-black" />
                <span ref={line3} className="block h-0.5 w-full bg-black" />
            </button>
            {/* Overlay */}
            {
                open && (
                    <div
                        ref={overlayRef}
                        onClick={closeMenu}
                        className="fixed inset-0 z-40 bg-black/50 opacity-0 pointer-events-none"
                    />
                )
            }
            {/* Slide Menu */}
            {
                open && (
                    <div
                        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs shadow-xl p-6 ${mode === 'light' ? 'bg-white' : 'bg-black border-l'}`}
                        ref={menuRef}
                    >
                        <nav className="flex flex-col gap-6 text-lg font-medium">
                            {
                                LINKS.map((link, index) => (
                                    <a 
                                        href={link.href} 
                                        key={index} 
                                        className="hover:text-blue-600"
                                        onClick={closeMenu}
                                    >
                                        {link.title}
                                    </a>
                                ))
                            }
                        </nav>
                        <div className='mt-3 border p-3 rounded-2xl flex-center gap-1'>
                            <ThemeButton />
                            {
                                mode === 'light'
                                    ? <p>Light Mode</p>
                                    : <p>Dark Mode</p>
                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MobileNavbar