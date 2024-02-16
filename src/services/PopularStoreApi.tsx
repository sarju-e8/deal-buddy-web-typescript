import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getStores = async (params: object) => {
    const StoreData = await axios.get(`${BASE_URL}/store/stores`, {
        params: {
            ...params
        }
    });
    return StoreData;
}