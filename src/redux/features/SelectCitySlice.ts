import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    quickLocationData: [],
    currentCity: sessionStorage.getItem("City"),
}

export const SelectCitySlice = createSlice({
    name: "SelectCity",
    initialState,
    reducers: {
        modalOpen: (state, action) => {
            state.isModalOpen = action.payload;
        },
        storeQuickLocationData: (state, action) => {
            state.quickLocationData = action.payload;
        },
        setStoreCurrentCity: (state, action) => {
            state.currentCity = action.payload;
        }
    }
});

export const { modalOpen, storeQuickLocationData, setStoreCurrentCity } = SelectCitySlice.actions;

export default SelectCitySlice.reducer;

