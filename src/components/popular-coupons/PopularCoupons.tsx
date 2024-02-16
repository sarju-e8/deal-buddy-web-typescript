import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PopularCouponsCard from './PopularCouponsCard'
import { getCoupons } from '../../services/PopularCouponApi';
import { Deal } from '../../@types/deals';

const PopularCoupons: React.FC = () => {
    const [apiData, setApiData] = useState<Deal[]>([]);

    useEffect(() => {
        const params = {
            limit: 999,
            page: 1,
            productType: "coupon",
            shortBy: "clicks",
            isPopular: true,
            updateViewCount: true,
        }

        getCoupons(params).then((res) => {
            setApiData(res.data.items);
        });
    }, [])

    return (
        <>
            <Box className="coupons-main-div" sx={{ pl: '50px', pr: "43px" }}>
                <Grid container className="coupons-grid-container">
                    {apiData && apiData.map((item) => {
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