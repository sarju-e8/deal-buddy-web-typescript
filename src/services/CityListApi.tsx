import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";


export const getSearchLocation = async (params: object) => {
    const SearchLocationData = await axios.get(`${BASE_URL}/location/location`, {
        params: {
            ...params,
        }
    });
    return SearchLocationData;
}

export const getQuickLocation = async (params: object) => {
    const QuickLocationData = await axios.get(`${BASE_URL}/location`, {
        params: {
            ...params,
        }
    });
    return QuickLocationData;
}