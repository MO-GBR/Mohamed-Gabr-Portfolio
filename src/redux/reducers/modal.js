import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    content: null,
    isOpen: false
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            state.content = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
            state.content = null;
        }
    }
});

export const {
    openModal,
    closeModal
} = modalSlice.actions;

export const selectModalSlice = state => state.modal;

export default modalSlice.reducer;