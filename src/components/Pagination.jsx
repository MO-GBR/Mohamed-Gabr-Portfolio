import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setPageSize } from '../redux/reducers/pagination';
import { useScreenSize } from '../hooks/useScreenSize';

const Pagination = () => {
    const dispatch = useDispatch();

    const { currentPage, pageSize, totalItems } = useSelector(
        (state) => state.pagination
    );

    const totalPages = Math.ceil(totalItems / pageSize);

    const { width } = useScreenSize();

    return (
        <div className='flex gap-5 m-[20px] bg-white text-black border p-2 rounded-lg w-[20rem] max-lg:w-[15rem] justify-center'>
            <button
                disabled={currentPage === 1}
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
                className='hover:bg-accent hover:text-white p-3 rounded-2xl cursor-pointer'
            >Prev</button>
            {
                width > 768 ?
                (Array.from({ length: totalPages }, (_, idx) => (
                    <button
                        key={idx}
                        onClick={() => dispatch(setCurrentPage(idx + 1))}
                        className={currentPage === idx + 1 ? 'font-bold bg-black text-white p-2 rounded-full cursor-pointer' : 'cursor-pointer'}
                    >
                        {idx + 1}
                    </button>
                ))) : (
                    <div className='flex-center'>
                        <div>{currentPage}</div> / <div>{totalPages}</div>
                    </div>
                )
            }
            <button
                disabled={currentPage === totalPages}
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
                className='hover:bg-accent hover:text-white p-3 rounded-2xl cursor-pointer'
            >Next</button>
        </div>
    )
}

export default Pagination