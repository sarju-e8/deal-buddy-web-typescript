import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getBlogs = async (params: object) => {
    const BlogData = await axios.get(`${BASE_URL}/blog`, {
        params: {
            ...params
        }
    });
    return BlogData;
}