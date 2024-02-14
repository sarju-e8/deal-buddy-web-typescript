import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getSaleProduct = async (params: object, currentCityValue: string) => {
    const SaleProductData = await axios.get(`${BASE_URL}/deal/deals`, {
        headers: {
            "City": currentCityValue
        },
        params: {
            ...params
        }
    });
    return SaleProductData;
}