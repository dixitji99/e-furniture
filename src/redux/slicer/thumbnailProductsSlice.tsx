import { createSlice } from "@reduxjs/toolkit";
import { thumbnail } from "../../model/thumbnail-products.model";
import { RootState } from "../store/store";

interface stateType{
    products: thumbnail[];
}

const initialState:stateType={
    products:[],
}

export const thumbnailProductsSlice = createSlice({
    name:'thumbnailProducts',
    initialState,
    reducers:{
        addFurnitures:(state,{payload})=>{
            state.products=payload
        },

    }
})

export const {addFurnitures}= thumbnailProductsSlice.actions;
export const getThumbnailFurnitures=(state:RootState)=>state.thumbnail.products;
export default thumbnailProductsSlice.reducer
