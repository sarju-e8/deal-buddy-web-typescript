import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PopularStoresCards from './PopularStoresCards'
import { getStores } from '../../services/PopularStoreApi';
import { Stores } from '../../@types/Stores';

const PopularStores: React.FC = () => {
    const [apiData, setApiData] = useState<Stores[]>([]);

    useEffect(() => {
        const params = {
            take: 999,
            isPopular: true,
        }

        getStores(params).then((res) => {
            setApiData(res.data.items);
        });
    }, [])

    return (
        <>
            <Box className="stores-main-div" sx={{ px: "65px" }}>
                <Grid container className='stores-grid-container'>
                    {
                        apiData.map((item) => {

                            const { id, name, activeDealsCount, address, imageUrl, storeModes, slug } = item;

                            return (
                                <PopularStoresCards id={id} name={name} imageUrl={imageUrl}
                                    activeDealsCount={activeDealsCount} address={address}
                                    storeModes={storeModes} slug={slug} />
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default PopularStores