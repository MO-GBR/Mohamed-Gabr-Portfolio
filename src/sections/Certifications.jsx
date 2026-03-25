import React, { useState } from 'react'
import Certification from '../components/certification'
import { CERTIFICATIONS } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import Title from '../components/Title';
import Modal from '../components/Modal';
import { openModal } from '../redux/reducers/modal';

const cer = {
    title: 'Responsive Web Design',
    link: 'https://www.freecodecamp.org/certification/mogabr/responsive-web-design',
    image: '/certification/1.jpg'
}

const Folder = ({ title, image }) => {
    const { mode } = useSelector(state => state.theme);
    return (
        <div className='flex-center'>
            <div className='z-2 absolute flex-center flex-col gap-3'>
                <p className={`${mode === 'light' ? 'text-white' : 'text-black'} text-2xl max-lg:text-lg font-bold max-w-[28rem] text-center`}>{title}</p>
                <img src='/icons/white-click.svg' alt='click' className='img w-[35px]' />
            </div>
            <div className={`folder w-[30rem] max-lg:w-[20rem] h-[30rem] max-lg:h-[20rem] z-1 absolute ${mode === 'light' ? 'bg-black' : 'bg-white'}`} />
            <img src={image} alt='cer' className='img w-[26rem] max-lg:w-[15rem]' />
        </div>
    )
};

const Certifications = () => {
    const dispatch = useDispatch();

    return (
        <section id='certifications' className='w-full flex-center flex-col min-h-[170vh]'>
            <Title
                title='Certifications'
                icon='/icons/titles/verified.svg'
                text='Here are some of the certifications I have achieved'
                subText="I've completed multiple certifications that strengthened my foundations in web development and problem-solving"
            />
            <Modal />
            <div className='w-full flex-center'>
                <div className='grid grid-cols-2 grid-rows-2 gap-25 max-lg:grid-cols-1 max-lg:grid-rows-4 max-lg:gap-38'>
                    {
                        CERTIFICATIONS.map((certification, index) => (
                            <div
                                key={index}
                                className='cursor-pointer'
                                onClick={() => dispatch(
                                    openModal(
                                        <Certification certification={CERTIFICATIONS[index]} />
                                    )
                                )}
                            >
                                <Folder
                                    title={certification.title}
                                    image={certification.image}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Certifications