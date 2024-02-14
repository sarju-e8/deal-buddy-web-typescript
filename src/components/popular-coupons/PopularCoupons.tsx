import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PopularCouponsCard from './PopularCouponsCard'
import { getCoupons } from '../../services/PopularCouponApi';
import { Deal } from '../../@types/deals';
import { useSelector } from 'react-redux';

const PopularCoupons = ({ couponList }) => {
    return (
        <>
            <Box className="coupons-main-div" sx={{ pl: '50px', pr: "43px" }}>
                <Grid container className="coupons-grid-container">
                    {couponList && couponList.map((item) => {
                        const { id, name, clicks, category, stores, productImages, locations, productType, productModes, NZWide, endDate, slug } = item
                        return (
                            <PopularCouponsCard key={id} name={name} category={category} productImages={productImages}
                                id={id} NZWide={NZWide} clicks={clicks} productType={productType} productModes={productModes}
                                endDate={endDate} stores={stores} locations={locations} slug={slug} />
                        )
                    })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default PopularCoupons