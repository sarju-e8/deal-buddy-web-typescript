import { Container } from '@mui/material'
import React from 'react'
import PopularSalesTitle from './PopularSalesTitle'
import PopularSalesProducts from './PopularSalesProducts'
import MainTitle from '../common-components/MainTitle'

const MainPopularSales = () => {
    return (
        <>
            <Container maxWidth="xl" >
                {/* <PopularSalesTitle /> */}
                <MainTitle name='Popular Sales' btnName='View All' />
                <PopularSalesProducts />
            </Container>
        </>
    )
}

export default MainPopularSales