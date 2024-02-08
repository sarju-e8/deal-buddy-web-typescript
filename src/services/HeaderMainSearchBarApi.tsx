import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getSearchValue = async (params: object) => {
    const SearchValue = await axios.get(`${BASE_URL}/deal/deals`, {
        params: {
            ...params
        }
    });
    return SearchValue;
}

export const mainSearchData = async (cancelTokenSource, params) => {
    try {
        // Make the API call with the cancel token
        const response = await axios.get(`${BASE_URL}/deal/deals`, {
            cancelToken: cancelTokenSource.token,
            params: {
                ...params
            }
        });
        // Process the response
        return response;
    }
    catch (error) {
        if (axios.isCancel(error)) {
            // Log the cancellation message
            console.log('Request canceled:', error.message);
        } else {
            // Handle other errors
            console.error('Error:', error);
        }
    }
}
