import { configureStore } from "@reduxjs/toolkit";
import dealModeReducer from "../features/dealModeSlice";
import categoryNameAndDesc from "../features/CategoryNameAndDiscSlice";
import StoreFilterReducer from "../features/StoreFilterSlice";
import DealsProductDetailsReducer from "../features/DealProductDetailSlice";

export const reduxStore = configureStore({
    reducer: {
        dealModeOptions: dealModeReducer,
        categoryNameAndDesc: categoryNameAndDesc,
        searchFilters: StoreFilterReducer,
        DealsProductDetails: DealsProductDetailsReducer,
    },
});

// export default reduxStore;