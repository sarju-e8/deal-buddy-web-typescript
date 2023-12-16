import axios from "axios";

// const BASE_URL = "https://www.dealbuddy.co.nz/api";

const BASE_URL = "https://api.slingacademy.com/v1/sample-data";

export const getSliderImage = async (url: string) => {
    const SliderImageData = await axios.get(`${BASE_URL}/${url}`);
    return SliderImageData;
}