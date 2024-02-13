import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchKeyword: "",
    discountTypeId: "",
    discountType: "",
    categoryId: "",
    categoryName: "",
    storeList: [],
    northEastLng: -167.38023412500002,
    northEastLat: -30.63678836122169,
    southWestLng: 156.93617212499998,
    southWestLat: -50.42868600361074,
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
        },
        getAllStoreList: (state, action) => {
            state.storeList = action.payload;
        },
        getNorthEastLat: (state, action) => {
            state.northEastLat = action.payload;
        },
        getNorthEastLng: (state, action) => {
            state.northEastLng = action.payload;
        },
        getSouthWestLat: (state, action) => {
            state.southWestLat = action.payload;
        },
        getSouthWestLng: (state, action) => {
            state.southWestLng = action.payload;
        },
    }
});

export const { searchValue, discountValue, categoryValue, selectedDiscountType, selectedCategoryName,
    getAllStoreList, getNorthEastLat, getNorthEastLng, getSouthWestLat, getSouthWestLng, } = StoreFilterSlice.actions;

export default StoreFilterSlice.reducer;