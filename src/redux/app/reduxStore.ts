import { configureStore } from "@reduxjs/toolkit";
import dealModeReducer from "../features/dealModeSlice";
import categoryNameAndDesc from "../features/CategoryNameAndDiscSlice";

export const reduxStore = configureStore({
    reducer: {
        dealModeOptions: dealModeReducer,
        categoryNameAndDesc: categoryNameAndDesc,
    },
});

// export default reduxStore;