import { combineReducers } from "@reduxjs/toolkit";
import thumbnailProductsReducer from "../slicer/thumbnailProductsSlice";
import furnituresDataReducer from "../slicer/furnituresDataSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const reducers = combineReducers(
    {
        thumbnail: thumbnailProductsReducer,
        furniture: furnituresDataReducer,
    }
)

const persistConfig = {
    key: 'furnitures',
    storage,
};

export const persistedReducer = persistReducer(persistConfig, reducers);

