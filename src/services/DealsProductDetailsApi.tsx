import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz";

const TEST_URL = "https://api.slingacademy.com/v1/sample-data";

export const getTestSliderData = async () => {
    const TestSliderData = await axios.get(`${TEST_URL}/photos?offset=5&limit=20`);
    return TestSliderData;
}

export const getIndividualDealsProductDetails = async (slug: string) => {
    const IndividualDealsProductsDetailsData = await axios.get(`${BASE_URL}/api/deal/slug-or-id/${slug}`);
    return IndividualDealsProductsDetailsData;
}

export const getMoreDeals = async (params: object) => {
    const MoreDealsData = await axios.get(`${BASE_URL}/api/deal/similar/deals`, {
        params: {
            ...params
        }
    });
    return MoreDealsData;
}

export const getSaleImage = async () => {
    const SaleImage = await axios.get(`${BASE_URL}/assets/img/sale.png`);
    return SaleImage;
}

export const getCouponImage = async () => {
    const CouponImage = await axios.get(`${BASE_URL}/assets/img/coupon.png`);
    return CouponImage;
}

