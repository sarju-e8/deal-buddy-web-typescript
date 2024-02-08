import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PopularStoresCards from './PopularStoresCards'
import { getStores } from '../../services/PopularStoreApi';
import { Stores } from '../../@types/Stores';
import { useSelector } from 'react-redux';

const PopularStores: React.FC = () => {
    const [apiData, setApiData] = useState<Stores[]>([]);
    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    const url: string = "store/stores?v=1703249863368&take=999&isPopular=true&t=1703249863368";

    useEffect(() => {
        getStores(url, currentCityValue).then((res) => {
            setApiData(res.data.items);
        });
    }, [currentCityValue])
    // console.log("stores", apiData);

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