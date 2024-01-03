import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getCategory = async (url: string) => {
    const CategoryData = await axios.get(`${BASE_URL}/${url}`);
    return CategoryData;
}

export const getAllCategoryList = async (url: string) => {
    const AllCategoryListData = await axios.get(`${BASE_URL}/${url}`);
    return AllCategoryListData;
}