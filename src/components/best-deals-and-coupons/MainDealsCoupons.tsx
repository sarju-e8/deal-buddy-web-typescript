import { Container, Grid } from '@mui/material'
import React from 'react'
import DealsCouponsTitle from './DealsCouponsTitle'
import TopCategoryList from './TopCategoryList'
import MainImage from './MainImage'
import Offers from './OffersAndDeals'
import OffersAndDeals from './OffersAndDeals'

const MainDealsCoupons = () => {
    return (
        <>
            <Container maxWidth="xl">
                {/*  first:  title  */}
                <Grid container>
                    <Grid md={12} xs={12}>
                        <DealsCouponsTitle />
                    </Grid>
                </Grid>
                {/* second : category list and slider */}
                <Grid container>
                    <Grid md={4} xs={12}>
                        <TopCategoryList />
                    </Grid>
                    <Grid md={7} xs={12}>
                        <MainImage />
                    </Grid>
                </Grid>
                {/* third : offer and deal images */}
                <Grid container>
                    <OffersAndDeals />
                </Grid>
            </Container>
        </>
    )
}

export default MainDealsCoupons