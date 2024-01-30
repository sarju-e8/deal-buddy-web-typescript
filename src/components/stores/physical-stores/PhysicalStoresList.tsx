import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'
import { Stores } from '../../../@types/Stores';
import { getAllStores } from '../../../services/AllStoreApi';
import PhysicalStoresVerticalCards from './PhysicalStoresVerticalCards';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComp from '../../common-components/Button';
import { storePageNumber } from '../../../redux/features/dealModeSlice';

const PhysicalStoresList = () => {
    const [physicalStoresList, setPhysicalStoresList] = useState<Stores[]>([]);
    const [totalPhysicalStoresCount, setTotalPhysicalStoresCount] = useState(0);

    const pageNumber = useSelector((state: any) => state.dealModeOptions.page);

    const dispatch = useDispatch();


    // const url: string = `store/stores?v=1704367569621&take=100&page=1&skip=0&storeMode=In%20Store&searchKeyword=&NorthEast%5Blng%5D=-167.38023412500002&NorthEast%5Blat%5D=-30.63678836122169&SouthWest%5Blng%5D=156.93617212499998&SouthWest%5Blat%5D=-50.42868600361074&ismapView=true&t=1704367569620`;

    useEffect(() => {
        var params = {
            page: pageNumber,
            take: 20,
            skip: 0,
            storeMode: "In Store",
            searchKeyword: "",
            // NorthEast[lng]: -167.38023412500002,
            // NorthEast[lat]: -30.63678836122169,
            // SouthWest[lng]: 156.93617212499998,
            // SouthWest[lat]: -50.42868600361074,
            // ismapView: true,
        }
        if (pageNumber > 1) {
            getAllStores(params).then((res) => {
                const concatNewData = res.data.items;
                setTotalPhysicalStoresCount(res.data.total);
                setPhysicalStoresList(physicalStoresList.concat(concatNewData));
            });
        } else {
            getAllStores(params).then((res) => {
                setTotalPhysicalStoresCount(res.data.total);
                setPhysicalStoresList(res.data.items);
            });
        }
    }, [pageNumber])

    return (
        <>
            <Box className="physical-store-box-container" sx={{ height: "600px", overflowY: "auto", pr: "12px" }}>
                <Grid container>
                    {
                        physicalStoresList.map((item) => {
                            const { activeDealsCount, address, id, imageUrl, name, storeModes, slug } = item;
                            return (
                                <PhysicalStoresVerticalCards key={id} id={id} name={name} imageUrl={imageUrl} activeDealsCount={activeDealsCount}
                                    address={address} storeModes={storeModes} slug={slug} />
                            )
                        })
                    }
                </Grid>
                {
                    physicalStoresList.length < totalPhysicalStoresCount ?
                        <Box className="btn-div" sx={{ pt: "40px", textAlign: "center" }}>
                            <ButtonComp func_call={() => { dispatch(storePageNumber(pageNumber + 1)) }}
                                name="Load more"></ButtonComp>
                        </Box>
                        : <></>
                }
            </Box>
        </>
    )
}

export default PhysicalStoresList