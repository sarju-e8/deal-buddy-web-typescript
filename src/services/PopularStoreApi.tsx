import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getStores = async (params: object, currentCityValue?: string | null) => {
    const StoreData = await axios.get(`${BASE_URL}/store/stores`, {
        headers: {
            "City": currentCityValue
        },
        params: {
            ...params
        },
    });
    return StoreData;
}