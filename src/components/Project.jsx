import React from 'react'
import { useSelector } from 'react-redux';

const Badge = ({tag}) => {
    return (
        <div className={`flex items-center border border-accent gap-2 max-lg:gap-0.5 ${tag.styles} w-fit p-2 max-lg:w-[88px] rounded-full`}>
            <img src={tag.icon} alt={tag.text} className='img w-[20px] max-lg:w-[15px]' />
            <span className='font-bold text-sm max-lg:text-[10px]'>{tag.text}</span>
        </div>
    )
};

const Project = ({title, text, img, tags, liveLink, githubLink, updatedAt}) => {
    const { mode } = useSelector(state => state.theme);
    return (
        <div className={`w-[30rem] max-lg:w-[95vw] flex items-center justify-between flex-col p-3 h-[110vh] max-lg:h-fit ${mode === 'light' ? 'glass' : 'bg-black border rounded-2xl'}`}>
            <h3 className='font-bold text-3xl max-lg:text-xl text-center m-2'>{title}</h3>
            <div className='flex flex-col-reverse justify-start items-end'>
                <img src={img} alt={title} className='img w-[25rem] max-lg:w-[40rem] rounded-2xl border border-accent shadow-lg' />
                <a className='p-2 m-2 rounded-full gradient-1 absolute' href={githubLink} target='_blank' rel='noopener noreferrer'>
                    <img src='/icons/github.png' alt='github' className='img w-[30px] max-lg:w-[20px]' />
                </a>
            </div>
            <p className='my-5'>{text}</p>
            <div className='grid grid-cols-3 gap-4 max-lg:p-1'>
                {
                    tags && tags.map((tag, index) => (
                        <Badge key={index} tag={tag} />
                    ))
                }
            </div>
            <div className='flex justify-between items-center w-full mt-5 border border-accent rounded-2xl p-2 bg-white'>
                <p className='font-bold text-emergency'>{updatedAt}</p>
                <a className='border-2 border-emergency cursor-pointer p-1 rounded-full'>
                    <img src='icons/link.svg' alt='link' />
                </a>
            </div>
        </div>
    )
}

export default Project