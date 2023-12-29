import axios from "axios";

// const BASE_URL = "https://www.dealbuddy.co.nz";

const BASE_URL = "https://jsonplaceholder.typicode.com";




// const Deals_Img_Url = "https://www.dealbuddy.co.nz/assets/img/home-deals.png";

// const Offers_Img_Url = "https://www.dealbuddy.co.nz/assets/img/home-coupons.png"

export const getDealsImage = async (url: string) => {
    const DealsImageData = await axios.get(`${url}`
        ,
        {
            headers: {
                // "Access-Control-Allow-Origin": "*"
                "Content-Type": "image/png"
            }
        });
    return DealsImageData;
}

export const getOfferImage = async (url: string) => {
    const OfferImageData = await axios.get(`${url}`,
        {
            headers: {
                "Content-Type": "image/png"
            }
        });
    return OfferImageData;
}
