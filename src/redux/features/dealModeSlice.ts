import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    shortBy: 'date',
    dealModes: [],
    discountTypes: [],
    productType: "",
    categorySlug: "",
    page: 1,

    // isChecked: false,

}

export const dealModeSlice = createSlice({
    name: "dealMode",
    initialState,
    reducers: {
        // checkboxChangeChecked: (state: string | any, action: any) => {
        //     console.log("state", state);
        //     console.log("action", action.payload)
        //     const { id, e } = action.payload;
        //     const isChecked = e.target.checked;
        //     if (isChecked) {
        //         action.payload = e.target.value;
        //         state.dealMode.push(action.payload);
        //     } else {
        //         const index = state.dealMode.indexOf(e.target.value);
        //         state.dealMode.splice(index, 1);
        //     }
        // }
        // toggleCheckbox: (state) => {
        //     state.isChecked = !state.isChecked;
        // },
        // setCheckbox: (state, action) => {
        //     state.isChecked = !state.isChecked;
        //     if (state.isChecked) {
        //         state.dealMode.push = action.payload;
        //     }
        // },

        //dealmode methods
        addCheckboxValue: (state, action) => {
            const valueToAdd: any = action.payload;
            // const constrainedVariable: any | never = valueToAdd;

            if (!state.dealModes.includes(valueToAdd)) {
                state.dealModes.push(valueToAdd);
            }
        },
        removeCheckboxValue: (state, action) => {
            const valueToRemove = action.payload;

            state.dealModes = state.dealModes.filter(
                (value) => value !== valueToRemove
            );
        },

        //discount type methods
        addDiscountTypeChkValue: (state, action) => {
            const discountTypeChkValueAdd = action.payload;

            if (!state.discountTypes.includes(discountTypeChkValueAdd)) {
                state.discountTypes.push(discountTypeChkValueAdd);
            }
        },
        removeDiscountTypeChkValue: (state, action) => {
            const discountTypeChkValueRemove = action.payload;

            state.discountTypes = state.discountTypes.filter(
                (removeDiscountValue) => removeDiscountValue !== discountTypeChkValueRemove
            );
        },

        //short by 
        shortByValue: (state, action) => {
            const shortByData = action.payload;

            state.shortBy = shortByData;
        },

        // load more
        storePageNumber: (state, action) => {
            state.page = action.payload;
        },

        // product type
        storeProductType: (state, action) => {
            state.productType = action.payload;
            // state.page = action.payload.page;
        },

        // category slug
        storeCategorySlug: (state, action) => {
            state.categorySlug = action.payload;
        }

    },
});

export const { addCheckboxValue, removeCheckboxValue, addDiscountTypeChkValue, removeDiscountTypeChkValue, shortByValue, storePageNumber, storeProductType, storeCategorySlug } = dealModeSlice.actions;

export default dealModeSlice.reducer;