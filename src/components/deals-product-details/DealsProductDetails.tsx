import { Box, Container, Grid } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import DealsProductSlider from './DealsProductSlider'
import DealsProductDetailsSidebar from './DealsProductDetailsSidebar'
import DealsProductStoreDetails from './DealsProductStoreDetails'
import DealsApplicableLocation from './DealsApplicableLocation'
import DealsProductDescription from './DealsProductDescription'
import { useParams } from 'react-router-dom'
import { getIndividualDealsProductDetails } from '../../services/DealsProductDetailsApi'
import { useDispatch } from 'react-redux'
import { individualDealProductDetailData } from '../../redux/features/DealProductDetailSlice'
import MoreDealsList from './MoreDealsList'
import { shortByValue, storePageNumber, storeProductType } from '../../redux/features/dealModeSlice'

const DealsProductDetails = () => {

    const dispatch = useDispatch();

    const urlParams = useParams();
    const { urlDealSlug } = urlParams;

    const storeDispatchedValue = useCallback(() => {
        dispatch(storePageNumber(1));
        dispatch(shortByValue("date"));
        dispatch(storeProductType(""));
        // console.log("useCallback")
    }, []);

    useEffect(() => {

        getIndividualDealsProductDetails(urlDealSlug).then((res) => {
            console.log("details", res);
            dispatch(individualDealProductDetailData(res.data));
        });

        storeDispatchedValue();

    }, [urlDealSlug])

    return (
        <>
            <Container maxWidth="lg" sx={{ py: "40px" }}>
                <Grid container className="product-details-slider-and-sidebar">
                    <Grid xl={8} md={7} sm={12} xs={12}>
                        <DealsProductSlider />
                        <DealsProductDescription />
                    </Grid>
                    <Grid xl={4} md={5} sm={12} xs={12}>
                        <DealsProductDetailsSidebar />
                        <DealsProductStoreDetails />
                        <DealsApplicableLocation />
                    </Grid>
                </Grid>

                <Box className="product-details-more-deals">
                    <MoreDealsList />
                </Box>
            </Container>
        </>
    )
}

export default DealsProductDetails