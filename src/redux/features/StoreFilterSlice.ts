import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchKeyword: "",
    discountTypeId: "",
    discountType: "",
    categoryId: "",
    categoryName: "",

}

export const StoreFilterSlice = createSlice({
    name: "storeFilter",
    initialState,
    reducers: {
        searchValue: (state, action) => {
            state.searchKeyword = action.payload;
        },
        discountValue: (state, action) => {
            state.discountTypeId = action.payload;
        },
        selectedDiscountType: (state, action) => {
            state.discountType = action.payload;
        },
        categoryValue: (state, action) => {
            state.categoryId = action.payload;
        },
        selectedCategoryName: (state, action) => {
            state.categoryName = action.payload;
        }
    }
});

export const { searchValue, discountValue, categoryValue, selectedDiscountType, selectedCategoryName } = StoreFilterSlice.actions;

export default StoreFilterSlice.reducer;