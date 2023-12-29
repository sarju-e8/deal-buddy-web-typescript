import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getBlogs = async (url: string) => {
    const BlogData = await axios.get(`${BASE_URL}/${url}`);
    return BlogData;
}