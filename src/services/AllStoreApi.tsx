import axios from "axios";

const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const getAllStores = async (params: object) => {
    const AllStoreData = await axios.get(`${BASE_URL}/store/stores`, {
        params: {
            ...params
        }
    });
    return AllStoreData;
}

export const getIndividualStoreDetails = async (slug: string, params: object) => {
    const IndividualStoreDetail = await axios.get(`${BASE_URL}/store/slug-or-id/${slug}`, {
        params: {
            ...params
        }
    });
    return IndividualStoreDetail;
}

//onlinestore: store/stores?v=1704348367221&take=20&page=2&skip=0&searchKeyword=&t=1704348367221
//physicalstore: store/stores?v=1704362354302&take=20&page=1&skip=0&storeMode=Online&searchKeyword=&t=1704362354302