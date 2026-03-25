import React from 'react'
import { TECHS } from '../constants'
import { useSelector } from 'react-redux';

const Skills = () => {
    const { mode } = useSelector(state => state.theme);
    return (
        <section id='skills'>
            <div className='flex-center'>
                <div className='glass w-fit h-fit m-16 flex-center p-20 min-w-[80vw]'>
                    <img src='/images/mark.png' alt='mark' className='col-span-1 row-span-5 absolute img w-[20rem] -left-40 max-lg:-left-30' />
                    <div className='grid grid-cols-5 gap-10 max-lg:grid-cols-1'>
                        {
                            TECHS.map((tech, index) => {
                                if(mode === 'light') {
                                    return (
                                        <img key={index} src={`/tech/${tech.icon}.png`} alt={tech.tech} className='img w-[70px] col-span-1 row-span-1' title={tech.tech} />
                                    )
                                } else {
                                    return (
                                        <div className='flex-center flex-col gap-2'>
                                            {/* <div className={`w-[90px] h-[90px] rounded-full ${index % 2 ? 'bg-emerald' : 'bg-emergency'}`} /> */}
                                            <img key={index} src={`/tech/${tech.icon}.png`} alt={tech.tech} className='img w-[70px] col-span-1 row-span-1 bg-white rounded-full p-3 max-lg:p-1' title={tech} />
                                            <div>
                                                <h2 className='text-2xl text-muted font-bold max-lg:text-lg max-lg:text-center'>{tech.tech}</h2>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills