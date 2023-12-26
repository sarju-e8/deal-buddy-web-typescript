import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

// const BASE_URL = "https://www.dealbuddy.co.nz/api/sponsored-ads?v=1703163820228&take=12";

export const getSponsorAds = async (url: string) => {
    const SponsorAds = await axios.get(`${BASE_URL}/${url}`);
    return SponsorAds;
}