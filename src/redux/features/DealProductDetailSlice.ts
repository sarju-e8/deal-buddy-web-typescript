import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    individualDealProductDetail: {}
}

export const DealProductDetailSlice = createSlice({
    name: "DealsProductDetails",
    initialState,
    reducers: {
        individualDealProductDetailData: (state, action) => {
            state.individualDealProductDetail = action.payload;
        },

    }
});

export const { individualDealProductDetailData } = DealProductDetailSlice.actions;

export default DealProductDetailSlice.reducer;  