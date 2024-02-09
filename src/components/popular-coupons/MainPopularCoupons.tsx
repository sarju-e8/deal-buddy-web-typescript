import { Container } from '@mui/material'
import React, { useState, useEffect } from 'react'
import MainTitle from '../common-components/MainTitle'
import PopularCoupons from './PopularCoupons'
import { Deal } from '../../@types/deals'
import { useSelector } from 'react-redux'
import { getCoupons } from '../../services/PopularCouponApi'

const MainPopularCoupons = () => {
    const [popularCouponList, setPopularCouponList] = useState<Deal[]>([]);
    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    useEffect(() => {
        const params = {
            limit: 999,
            page: 1,
            productType: "coupon",
            shortBy: "clicks",
            isPopular: true,
            updateViewCount: true,
        }

        getCoupons(params, currentCityValue).then((res) => {
            setPopularCouponList(res.data.items);
        });
    }, [currentCityValue])

    return (
        popularCouponList.length > 0 &&
        <Container maxWidth="xl">
            <MainTitle name='Popular Coupons' btnName='View All' />
            <PopularCoupons couponList={popularCouponList} />
        </Container >
    )
}

export default MainPopularCoupons