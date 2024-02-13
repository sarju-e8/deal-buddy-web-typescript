import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'
import { Stores } from '../../../@types/Stores';
import { getAllStores } from '../../../services/AllStoreApi';
import PhysicalStoresVerticalCards from './PhysicalStoresVerticalCards';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComp from '../../common-components/Button';
import { storePageNumber } from '../../../redux/features/dealModeSlice';
import NoStoreAvailabel from '../../common-components/NoStoreAvailabel';
import Loading from '../../common-components/Loading';
import { getAllStoreList } from '../../../redux/features/StoreFilterSlice';

const PhysicalStoresList = () => {
    const [physicalStoresList, setPhysicalStoresList] = useState<Stores[]>([]);
    const [totalPhysicalStoresCount, setTotalPhysicalStoresCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const pageNumber = useSelector((state: any) => state.dealModeOptions.page);
    const storeSearchKeyword = useSelector((state: any) => state.searchFilters.searchKeyword);
    const storeCategoryId = useSelector((state: any) => state.searchFilters.categoryId);
    const storeDiscountTypeId = useSelector((state: any) => state.searchFilters.discountTypeId);
    const storeNorthEastLat = useSelector((state: any) => state.searchFilters.northEastLat);
    const storeNorthEastLng = useSelector((state: any) => state.searchFilters.northEastLng);
    const storeSouthWestLat = useSelector((state: any) => state.searchFilters.southWestLat);
    const storeSouthWestLng = useSelector((state: any) => state.searchFilters.southWestLng);

    const dispatch = useDispatch();

    useEffect(() => {
        var params = {
            page: 1,
            take: 100,
            skip: 0,
            storeMode: "In Store",
            searchKeyword: storeSearchKeyword,
            categoryId: storeCategoryId,
            discountTypeId: storeDiscountTypeId,
            NorthEast: {
                lng: storeNorthEastLng,
                lat: storeNorthEastLat
            },
            SouthWest: {
                lng: storeSouthWestLng,
                lat: storeSouthWestLat
            },
            ismapView: true,
        }
        getAllStores(params).then((res) => {
            setLoading(true);
            setTotalPhysicalStoresCount(res.data.total);
            setPhysicalStoresList(res.data.items);
            dispatch(getAllStoreList(res.data.items));
            setLoading(false);
        });
    }, [storeSearchKeyword, storeCategoryId, storeDiscountTypeId, storeNorthEastLng, storeNorthEastLat, storeSouthWestLng, storeSouthWestLat])

    return (
        <>
            <Box className="physical-store-box-container" sx={{ height: "600px", overflowY: "auto", pr: "12px" }}>
                <Grid container>
                    {
                        !loading ? (
                            totalPhysicalStoresCount > 0 ?
                                physicalStoresList.map((item) => {
                                    const { activeDealsCount, address, id, imageUrl, name, storeModes, slug } = item;
                                    return (
                                        <PhysicalStoresVerticalCards key={id} id={id} name={name} imageUrl={imageUrl} activeDealsCount={activeDealsCount}
                                            address={address} storeModes={storeModes} slug={slug} />
                                    )
                                }) : <NoStoreAvailabel />
                        ) : (<Loading />)
                    }
                </Grid>
            </Box>
        </>
    )
}

export default PhysicalStoresList