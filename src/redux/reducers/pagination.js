import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    pageSize: 2,
    totalItems: 0
};

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setTotalItems(state, action) {
            state.totalItems = action.payload;
        },
        setPageSize(state, action) {
            state.pageSize = action.payload;
        }
    }
});

export const { setCurrentPage, setTotalItems, setPageSize } = paginationSlice.actions;

export default paginationSlice.reducer;