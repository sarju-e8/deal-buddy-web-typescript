import { Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PopularSalesProducts from './PopularSalesProducts'
import MainTitle from '../common-components/MainTitle'
import { Deal } from '../../@types/deals'
import { useSelector } from 'react-redux'
import { getSaleProduct } from '../../services/PopularSaleProductApi'

const MainPopularSales = () => {
    const [popularSaleList, setPopularSaleList] = useState<Deal[]>([]);
    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    useEffect(() => {
        const params = {
            limit: 999,
            page: 1,
            productType: "sale",
            shortBy: "clicks",
            isPopular: true,
            updateViewCount: true,
        }

        getSaleProduct(params, currentCityValue).then((res) => {
            setPopularSaleList(res.data.items);
        });
    }, [currentCityValue])
    return (
        popularSaleList.length > 0 &&
        <Container maxWidth="xl">
            <MainTitle name='Popular Sales' btnName='View All' />
            <PopularSalesProducts saleList={popularSaleList} />
        </Container >
    )
}

export default MainPopularSales