import { Container } from '@mui/material'
import React from 'react'
import MainTitle from '../common-components/MainTitle'
import PopularCoupons from './PopularCoupons'

const MainPopularCoupons = () => {
    return (
        <>
            <Container maxWidth="xl">
                <MainTitle name='Popular Coupons' btnName='View All' />
                <PopularCoupons />
            </Container>
        </>
    )
}

export default MainPopularCoupons