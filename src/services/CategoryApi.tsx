import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getCategory = async (params: object) => {
    const CategoryData = await axios.get(`${BASE_URL}/category`, {
        params: {
            ...params
        }
    });
    return CategoryData;
}

export const getAllCategoryList = async (params: object) => {
    const AllCategoryListData = await axios.get(`${BASE_URL}/category`, {
        params: {
            ...params
        }
    }

    );

    return AllCategoryListData;
}

export const getIndividualCategoryDetails = async (slug: string, params: object) => {
    const IndividualCategoryDetail = await axios.get(`${BASE_URL}/category/slug-or-id/${slug}`, {
        params: {
            ...params
        }
    });

    return IndividualCategoryDetail;
}