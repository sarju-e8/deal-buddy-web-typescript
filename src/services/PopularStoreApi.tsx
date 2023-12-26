import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getStores = async (url: string) => {
    const StoreData = await axios.get(`${BASE_URL}/${url}`);
    return StoreData;
}