import { createSlice } from "@reduxjs/toolkit";
import { furnitures } from "../../model/furnitures";
import { RootState } from "../store/store";

interface StateType{
    products:furnitures[],
}
const initialState:StateType={
    products:[]
}
export const furnituresDataSlice =createSlice({
    name:"furnitures",
    initialState,
    reducers:{
        setFurnitures:(state,{payload})=>{
            state.products=payload;
        }
    }
})

export const {setFurnitures} = furnituresDataSlice.actions;
export const getAllFurnitures =(state:RootState)=>state.furniture.products
export default furnituresDataSlice.reducer