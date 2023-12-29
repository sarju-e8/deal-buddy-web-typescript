import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getCoupons = async (url: string) => {
    const CouponsData = await axios.get(`${BASE_URL}/${url}`);
    return CouponsData;
}