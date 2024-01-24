import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../../theme/theme'
import { Stores } from '../../../@types/Stores';
import { getAllStores } from '../../../services/AllStoreApi';
import PhysicalStoresVerticalCards from './PhysicalStoresVerticalCards';

const PhysicalStoresList = () => {
    const [physicalStoreApiData, setphysicalStoreApiData] = useState<Stores[]>([]);

    const url: string = `store/stores?v=1704367569621&take=100&page=1&skip=0&storeMode=In%20Store&searchKeyword=&NorthEast%5Blng%5D=-167.38023412500002&NorthEast%5Blat%5D=-30.63678836122169&SouthWest%5Blng%5D=156.93617212499998&SouthWest%5Blat%5D=-50.42868600361074&ismapView=true&t=1704367569620`;

    useEffect(() => {
        getAllStores(url).then((res) => {
            setphysicalStoreApiData(res.data.items);
        });
    }, [])
    // console.log(physicalStoreApiData);

    return (
        <>
            <Box className="physical-store-box-container" sx={{ height: "600px", overflowY: "auto", pr: "12px" }}>
                <Grid container>
                    {
                        physicalStoreApiData.map((item) => {
                            const { activeDealsCount, address, id, imageUrl, name, storeModes } = item;
                            return (
                                <PhysicalStoresVerticalCards key={id} id={id} name={name} imageUrl={imageUrl} activeDealsCount={activeDealsCount}
                                    address={address} storeModes={storeModes} />
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default PhysicalStoresList