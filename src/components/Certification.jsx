import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { closeModal } from '../redux/reducers/modal';
import { useDispatch } from 'react-redux';

const Certification = ({ certification }) => {
    const boxRef = useRef(null);
    const certificationRef = useRef(null);
    const dispatch = useDispatch();

    const handleClose = () => {
        const tl = gsap.timeline({
            onComplete: () => dispatch(closeModal()),
        });

        tl.to(boxRef.current, {
            y: 0,
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power3.in",
        }).to(certificationRef.current, {
            opacity: 0,
            y: 0,
            duration: 0.3,
        }, "-=0.1");
    };

    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { y: 0 },
            { y: -152, duration: 0.5, ease: "power3.inOut" }
        );

        gsap.fromTo(
            certificationRef.current,
            { y: 0 },
            { y: 122, duration: 0.5, ease: "power3.inOut" }
        )
    }, []);

    return (
        <div className='flex-center absolute z-3'>
            <div className='flex-center flex-col border border-gray-800 rounded-2xl w-fit p-5 m-5 absolute bg-white shadow-2xl' ref={boxRef}>
                <div className='flex-center gap-3'>
                    <p className='text-2xl font-bold max-lg:text-sm text-black mb-2'>{certification.title}</p>
                    <div className='bg-black w-8 h-8 rounded-full flex-center cursor-pointer' onClick={handleClose}>
                        <p className='text-white font-bold text-xl'>
                            X
                        </p>
                    </div>
                </div>
                <a className='decoration-0 rounded-xl p-2 bg-black flex-center gap-3 m-2' href={certification.link} target='_blank' rel='noreferrer'>
                    <div className='bg-white w-10 h-10 rounded-full flex-center mb-2'>
                        <img src='/icons/link.svg' />
                    </div>
                    <p className='text-white font-bold'>FreeCodeCamp</p>
                </a>
            </div>
            <img ref={certificationRef} src={certification.image} alt={certification.title} className='img w-[50vw] max-lg:w-[95vw] border-2 border-gray-600 rounded-2xl' />
        </div>
    )
}

export default Certification