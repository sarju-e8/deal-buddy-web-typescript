import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MainTitle from '../common-components/MainTitle'
import PopularStores from './PopularStores'
import { Stores } from '../../@types/Stores'
import { useSelector } from 'react-redux'
import { getStores } from '../../services/PopularStoreApi'


const MainPopularStores = () => {
    const [popularStoreList, setPopularStoreList] = useState<Stores[]>([]);
    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    useEffect(() => {
        const params = {
            take: 999,
            isPopular: true,
        }

        getStores(params, currentCityValue).then((res) => {
            setPopularStoreList(res.data.items);
        });
    }, [currentCityValue])

    return (
        popularStoreList.length > 0 &&
        <Container maxWidth="xl" sx={{ pb: "40px" }}>
            <MainTitle name='Popular Stores' btnName='View All' />
            <PopularStores storeList={popularStoreList} />
        </Container>
    )
}

export default MainPopularStores