import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/assets/img";

// const Deals_Img_Url = "https://www.dealbuddy.co.nz/assets/img/home-deals.png";

// const Offers_Img_Url = "https://www.dealbuddy.co.nz/assets/img/home-coupons.png"

export const getDealsImage = async (url: string) => {
    const DealsImageData = await axios.get(`${BASE_URL}/${url}`);
    return DealsImageData;
}

export const getOfferImage = async (url: string) => {
    const OfferImageData = await axios.get(`${BASE_URL}/${url}`);
    return OfferImageData;
}