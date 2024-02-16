import StoreSearchBarAndDropDown from '../../common-components/StoreSearchBarAndDropDown'
import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Stores } from '../../../@types/Stores';
import { getAllStores } from '../../../services/AllStoreApi';
import StoreCards from '../../common-components/StoreCards';
import ButtonComp from '../../common-components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { storePageNumber } from '../../../redux/features/dealModeSlice';
import NoStoreAvailabel from '../../common-components/NoStoreAvailabel';
import Loading from '../../common-components/Loading';

const OnlineStores = () => {

    const [onlineStoresList, setOnlineStoresList] = useState<Stores[]>([]);
    const [totalOnlineStoresCount, setTotalOnlineStoresCount] = useState(0);
    const [loading, setLoading] = useState(true);

    const pageNumber = useSelector((state: any) => state.dealModeOptions.page);
    const storeSearchKeyword = useSelector((state: any) => state.searchFilters.searchKeyword);
    const storeCategoryId = useSelector((state: any) => state.searchFilters.categoryId);
    const storeDiscountTypeId = useSelector((state: any) => state.searchFilters.discountTypeId);

    const dispatch = useDispatch();

    // let [pageNumber, setPageNumber] = useState<number>(1);

    // const handleClick = () => {
    //     setPageNumber(pageNumber += 1);
    // }

    // const url: string = `store/stores?v=1704362354302&take=20&page=${pageNumber}&skip=0&storeMode=Online&searchKeyword=&t=1704362354302`;

    useEffect(() => {
        var params = {
            page: pageNumber,
            take: 20,
            skip: 0,
            storeMode: "Online",
            searchKeyword: storeSearchKeyword,
            categoryId: storeCategoryId,
            discountTypeId: storeDiscountTypeId,
        }

        if (pageNumber > 1) {
            getAllStores(params).then((res) => {
                setLoading(true);
                const concatNewData = res.data.items;
                setTotalOnlineStoresCount(res.data.total);
                setOnlineStoresList(onlineStoresList.concat(concatNewData));
                setLoading(false);
            });
        } else {
            getAllStores(params).then((res) => {
                // onlineStoresList.push(res.data.items);
                // const nextPageData = onlineStoresList;
                setLoading(true);
                setTotalOnlineStoresCount(res.data.total);
                setOnlineStoresList(res.data.items);
                setLoading(false);
            });
        }
    }, [pageNumber, storeSearchKeyword, storeCategoryId, storeDiscountTypeId])
    return (
        <>
            <StoreSearchBarAndDropDown title="Discover stores offering deals on online shopping" />

            <Container maxWidth="lg" sx={{ pb: "40px" }}>
                <Box className="all-stores-main-div">
                    <Grid container className="store-grid-container">
                        {!loading ? (
                            totalOnlineStoresCount > 0 ?
                                onlineStoresList.map((item) => {
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
                        onlineStoresList.length < totalOnlineStoresCount ?
                            <Box className="btn-div" sx={{ pt: "40px", textAlign: "center" }}>
                                <ButtonComp customFunctionCall={() => { dispatch(storePageNumber(pageNumber + 1)) }}
                                    name="Load more"></ButtonComp>
                            </Box>
                            : <></>
                    }

                </Box>
            </Container>
        </>
    )
}

export default OnlineStores