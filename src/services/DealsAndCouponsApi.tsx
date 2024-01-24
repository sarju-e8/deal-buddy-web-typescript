import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getDealsAndCoupons = async (url: string) => {
    const AllDealsAndCoupons = await axios.get(`${BASE_URL}/${url}`
    );
    return AllDealsAndCoupons;
}


// export const getFiltersData = async (url: string, sortBy: string, dealMode?: any) => {
//     const AllDealsAndCoupons = await axios.get(`${BASE_URL}/${url}`,
//         {
//             params: {
//                 sortBy: `${sortBy}`,
//                 dealMode: ``,
//             }
//         }
//     );
//     console.log(AllDealsAndCoupons);

//     return AllDealsAndCoupons;
// }

export const getFiltersData = async (url: string, sortBy: string, productType?: any) => {
    console.log("pp", productType);
    const AllDealsAndCoupons = await axios.get(`${BASE_URL}/${url}`,

        {
            params: {
                // shortBy: `${sortBy}`,
                productType: `${productType}`,
            }
        }
    );
    console.log(AllDealsAndCoupons);

    return AllDealsAndCoupons;
}

export const getDealsMode = async (url: string) => {
    const DealsModes = await axios.get(`${BASE_URL}/${url}`);
    return DealsModes;
}