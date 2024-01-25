import axios from "axios";
import { useSelector } from "react-redux";

const BASE_URL = "https://www.dealbuddy.co.nz/api";


export const getDeals = async (params: object) => {
    // console.log("firstApi", discountTypes)
    const AllDealsAndCoupons = await axios.get(`${BASE_URL}/deal/deals`, {
        params: {
            ...params
        }
    }

    );
    return AllDealsAndCoupons;
}



// export const getDealsAndCoupons = async (url: string, shortBy: string, dealModes?: any, discountTypes?: any) => {
//     const AllDealsAndCoupons = await axios.get(`${BASE_URL}/${url}`,
//         {
//             params: {
//                 shortBy,
//                 dealModes,
//                 discountTypes,
//             }
//         }
//     );
//     return AllDealsAndCoupons;
// }


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

// const iterator = useSelector((state: any) => state.dealModeOptions.dealMode.keys());
// let index;
// for (index of iterator) {
//     console.log("key", index);
// }

// export const getFiltersData = async (url: string, shortBy: string, productType?: any, dealModes?: any, discountTypes?: any) => {
//     const AllDealsAndCoupons = await axios.get(`${BASE_URL}/${url}`,


//         {
//             params: {
//                 shortBy: `${shortBy}`,
//                 productType: `${productType}`,
//                 dealModes,
//                 discountTypes,

//             }
//         }
//     );

//     return AllDealsAndCoupons;
// }

export const getDealsMode = async (url: string) => {
    const DealsModes = await axios.get(`${BASE_URL}/${url}`);
    return DealsModes;
}

export const getDiscountType = async (url: string) => {
    const DiscountTypes = await axios.get(`${BASE_URL}/${url}`);
    return DiscountTypes;
}