import StoreSearchBarAndDropDown from '../../common-components/StoreSearchBarAndDropDown'
import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Stores } from '../../../@types/Stores';
import { getAllStores } from '../../../services/AllStoreApi';
import StoreCards from '../../common-components/StoreCards';
import ButtonComp from '../../common-components/Button';

const OnlineStores = () => {

    const [allStoreApiData, setAllStoreApiData] = useState<Stores[]>([]);

    let [pageNumber, setPageNumber] = useState<number>(1);

    const handleClick = () => {
        setPageNumber(pageNumber += 1);
    }

    const url: string = `store/stores?v=1704362354302&take=20&page=${pageNumber}&skip=0&storeMode=Online&searchKeyword=&t=1704362354302`;

    useEffect(() => {
        // console.log("hii");
        if (pageNumber === 1) {
            getAllStores(url).then((res) => {
                setAllStoreApiData(res.data.items);
            });
        } else {
            getAllStores(url).then((res) => {
                // allStoreApiData.push(res.data.items);
                // console.log(res.data.items);
                const nextPageData = allStoreApiData;
                setAllStoreApiData(nextPageData.concat(res.data.items));
            });
        }
    }, [pageNumber])
    return (
        <>
            <StoreSearchBarAndDropDown title="Discover stores offering deals on online shopping" />

            <Container maxWidth="lg" sx={{ pb: "40px" }}>
                <Box className="all-stores-main-div">
                    <Grid container className="store-grid-container">
                        {
                            allStoreApiData.map((item) => {
                                const { activeDealsCount, address, id, imageUrl, name, storeModes } = item;
                                return (
                                    <StoreCards key={id} id={id} name={name} imageUrl={imageUrl}
                                        activeDealsCount={activeDealsCount} address={address} storeModes={storeModes} />
                                )
                            })
                        }
                    </Grid>

                    {
                        pageNumber === 4 ? <></> :
                            <Box className="btn-div" sx={{ pt: "40px", textAlign: "center" }}>
                                <ButtonComp func_call={handleClick} name="Load more"></ButtonComp>
                            </Box>
                    }

                </Box>
            </Container>
        </>
    )
}

export default OnlineStores