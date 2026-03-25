import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Project from '../components/Project'
import Title from '../components/Title'
import { PROJECTS, TECH_BADGES } from '../constants';
import Pagination from '../components/Pagination';
import { setTotalItems, setPageSize } from '../redux/reducers/pagination';
import { useScreenSize } from '../hooks/useScreenSize';

const Work = () => {
    const dispatch = useDispatch();

    const { currentPage, pageSize } = useSelector(
        (state) => state.pagination
    );

    const start = (currentPage - 1) * pageSize;
    const paginatedData = PROJECTS.slice(start, start + pageSize);

    const { width } = useScreenSize();

    useEffect(() => {
        dispatch(setTotalItems(PROJECTS.length));
    }, []);

    useEffect(() => {
        if(width < 768) dispatch(setPageSize(1));
    }, [width]);
    
    return (
        <section id='work' className='mt-10 flex-center flex-col w-full'>
            <Title
                title='My Work'
                icon='/icons/titles/bag.svg'
                text='Some of My Recent Projects'
                subText="Here are a few projects I've worked on recently. Showing my best work and achievements."
            />
            <div className='w-full flex-center gap-3 p-20 max-lg:p-2'>
                {
                    paginatedData.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            text={project.text}
                            img={project.img}
                            tags={project.tags}
                            liveLink={project.liveLink}
                            githubLink={project.githubLink}
                            updatedAt={project.updatedAt}
                        />
                    ))
                }
            </div>
            <Pagination />
        </section>
    )
}

export default Work