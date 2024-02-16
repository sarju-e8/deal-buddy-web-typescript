import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getSponsorAds = async (params: object) => {
    const SponsorAds = await axios.get(`${BASE_URL}/sponsored-ads`, {
        params: {
            ...params
        }
    });
    return SponsorAds;
}