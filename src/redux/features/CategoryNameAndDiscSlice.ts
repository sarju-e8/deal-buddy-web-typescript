import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isActive: false,
    pageTitle: "Get the finest deals on everything with exciting discounts and coupon codes",
    description: "",

}

export const CategoryNameAndDiscSlice = createSlice({
    name: "nameAndDescription",
    initialState,
    reducers: {
        // get category page title
        storeCategoryPageTitle: (state, action) => {
            state.pageTitle = action.payload;
            // state.isActive = action.payload.currentStatus;
        },

        storeIsActiveValueChange: (state, action) => {
            state.isActive = action.payload;
        },

        // getcategory description
        storeCategoryDescription: (state, action) => {
            state.description = action.payload;
        }
    }
});

export const { storeCategoryPageTitle, storeCategoryDescription, storeIsActiveValueChange } = CategoryNameAndDiscSlice.actions;

export default CategoryNameAndDiscSlice.reducer;