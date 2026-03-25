import modalReducer from "./reducers/modal";
import paginationReducer from "./reducers/pagination";
import themeReducer from "./reducers/theme";

import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    modal: modalReducer,
    pagination: paginationReducer,
    theme: themeReducer,
});

export const store = configureStore({
    reducer: rootReducer
});