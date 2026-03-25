import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, selectModalSlice } from '../redux/reducers/modal';
import gsap from 'gsap';

const Modal = () => {
    const { isOpen, content } = useSelector(selectModalSlice);
    const dispatch = useDispatch();

    const modalRef = useRef(null);
    const overlayRef = useRef(null);

    useEffect(() => {
        if(isOpen) {
            gsap.set([overlayRef.current, modalRef.current], {
                pointerEvents: "auto",
            });

            const tl = gsap.timeline();

            tl.fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.3 }
            ).fromTo(
                modalRef.current,
                { opacity: 0, y: 50, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" },
                "-=0.2"
            );
        }
    }, [isOpen]);

    const handleClose = () => {
        const tl = gsap.timeline({
            onComplete: () => dispatch(closeModal()),
        });

        tl.to(modalRef.current, {
            y: 60,
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: "power3.in",
        }).to(overlayRef.current, {
            opacity: 0,
            duration: 0.3,
            onStart: () => {
                gsap.set(overlayRef.current, { pointerEvents: "none" });
            }
        }, "-=0.1");
    };

    useEffect(() => {
        const esc = (e) => e.key === "Escape" && handleClose();
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {
                isOpen && (
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto"
                        onClick={handleClose}
                        ref={overlayRef}
                    />
                )
            }
            <div className="modal" ref={modalRef}>{content}</div>
        </div>
    )
}

export default Modal