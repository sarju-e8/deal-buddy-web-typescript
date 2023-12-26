import axios from "axios";
// https://www.dealbuddy.co.nz/api/deal/deals?v=1702983878189&limit=999&page=1&productType=sale&shortBy=clicks&isPopular=true&updateViewCount=true&t=1702983878189

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getSaleProduct = async (url: string) => {
    const SaleProductData = await axios.get(`${BASE_URL}/${url}`);
    return SaleProductData;
}