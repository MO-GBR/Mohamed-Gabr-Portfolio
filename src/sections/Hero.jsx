import React, { useRef, useEffect } from 'react'
import HeroImage from '../components/HeroImage'
import HeroText from '../components/HeroText'
import { useSelector } from 'react-redux';
import gsap from 'gsap';

const Hero = () => {
    const { mode } = useSelector(state => state.theme);

    const textRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(
            textRef.current,
            { x: -250, opacity: 0 },
            { x: 0, opacity: 1, duration: 1 }
        ).fromTo(
            imageRef.current,
            { x: 250, opacity: 0 },
            { x: 0, opacity: 1, duration: 1 },
            "-=0.5"
        )
    }, []);

    return (
        <div className={`flex-center w-full h-full min-h-[100vh] p-3 max-lg:flex-col-reverse max-lg:gap-10 ${mode !== 'light' && 'gap-10'}`} id='hero'>
            <div className='flex justify-start flex-col max-lg:items-center' ref={textRef}>
                <HeroText />
            </div>
            <div className='flex items-end justify-center' ref={imageRef}>
                <HeroImage />
            </div>
        </div>
    )
}

export default Hero