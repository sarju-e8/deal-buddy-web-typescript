import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getCoupons = async (params: object) => {
    const CouponsData = await axios.get(`${BASE_URL}/deal/deals`, {
        params: {
            ...params
        }
    });
    return CouponsData;
}