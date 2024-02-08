import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Stores } from '../../../@types/Stores';
import { getAllStores } from '../../../services/AllStoreApi';
import StoreCards from '../../common-components/StoreCards';
import ButtonComp from '../../common-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { storePageNumber } from '../../../redux/features/dealModeSlice';
import NoStoreAvailabel from '../../common-components/NoStoreAvailabel';
import Loading from '../../common-components/Loading';

const AllStoresList: React.FC = () => {

    const [allStoresList, setAllStoresList] = useState<Stores[]>([]);
    const [totalStoresCount, setTotalStoresCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const pageNumber = useSelector((state: any) => state.dealModeOptions.page);
    const storeSearchKeyword = useSelector((state: any) => state.searchFilters.searchKeyword);
    const storeCategoryId = useSelector((state: any) => state.searchFilters.categoryId);
    const storeDiscountTypeId = useSelector((state: any) => state.searchFilters.discountTypeId);
    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    const dispatch = useDispatch();

    // let [pageNumber, setPageNumber] = useState<number>(1);

    // const handleClick = () => {
    //     setPageNumber(pageNumber += 1);
    // }

    // const url: string = `store/stores?v=1704348367221&take=20&page=${pageNumber}&skip=0&searchKeyword=&t=1704348367221`;

    useEffect(() => {
        var params = {
            page: pageNumber,
            take: 20,
            skip: 0,
            searchKeyword: storeSearchKeyword,
            categoryId: storeCategoryId,
            discountTypeId: storeDiscountTypeId,
        }

        if (pageNumber > 1) {
            getAllStores(params, currentCityValue).then((res) => {
                setLoading(true);
                const concatNewData = res.data.items;
                setTotalStoresCount(res.data.total);
                setAllStoresList(allStoresList.concat(concatNewData));
                setLoading(false);
            });
        } else {
            getAllStores(params, currentCityValue).then((res) => {
                // allStoresList.push(res.data.items);
                // console.log(res.data.items);
                // const nextPageData = allStoresList;
                setLoading(true);
                setTotalStoresCount(res.data.total);
                setAllStoresList(res.data.items);
                setLoading(false);
            });
        }
    }, [pageNumber, storeSearchKeyword, storeCategoryId, storeDiscountTypeId, currentCityValue])
    // console.log("allStoreApipageNumber", pageNumber);

    return (
        <>
            <Container maxWidth="lg" sx={{ pb: "40px" }}>
                <Box className="all-stores-main-div">
                    <Grid container className="store-grid-container">


                        {!loading ? (
                            totalStoresCount > 0 ?
                                allStoresList.map((item) => {
                                    const { activeDealsCount, address, id, imageUrl, name, storeModes, slug } = item;
                                    return (
                                        <StoreCards key={id} id={id} name={name} imageUrl={imageUrl}
                                            activeDealsCount={activeDealsCount} address={address} storeModes={storeModes} slug={slug} />
                                    )
                                }) : <NoStoreAvailabel />

                        ) : (<Loading />)
                        }



                    </Grid>

                    {
                        allStoresList.length < totalStoresCount ?
                            <Box className="btn-div" sx={{ pt: "40px", textAlign: "center" }}>
                                <ButtonComp func_call={() => { dispatch(storePageNumber(pageNumber + 1)) }}
                                    name="Load more"></ButtonComp>
                            </Box>
                            : <></>
                    }

                </Box>
            </Container>
        </>
    )
}

export default AllStoresList