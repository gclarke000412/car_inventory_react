import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        year: "Car Year",
        make: "Car Make",
        model: "Model",
        price: "Car Sticker Price",
    },
    reducers: {
        chooseYear: (state, action) => { state.year = action.payload},
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseYear, chooseMake, chooseModel, choosePrice} = rootSlice.actions