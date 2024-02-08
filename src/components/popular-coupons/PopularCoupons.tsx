import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PopularCouponsCard from './PopularCouponsCard'
import { getCoupons } from '../../services/PopularCouponApi';
import { Deal } from '../../@types/deals';
import { useSelector } from 'react-redux';

const PopularCoupons: React.FC = () => {
    const [apiData, setApiData] = useState<Deal[]>([]);
    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    const url: string = "deal/deals?v=1703156660286&limit=999&page=1&productType=coupon&shortBy=clicks&isPopular=true&updateViewCount=true&t=1703156660285";

    useEffect(() => {
        getCoupons(url, currentCityValue).then((res) => {
            setApiData(res.data.items);
        });
    }, [currentCityValue])

    // console.log("coupons", apiData);

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