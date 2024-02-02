import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { useSelector } from 'react-redux';
import { Deal } from '../../@types/deals';
import { getMoreDeals } from '../../services/DealsProductDetailsApi';
import { useParams } from 'react-router-dom';
import PopularSalesCard from '../popular-sales/PopularSalesCard';
import PopularCouponsCard from '../popular-coupons/PopularCouponsCard';

const MoreDealsList = () => {
    const productData = useSelector((state: any) => state.DealsProductDetails.individualDealProductDetail);

    // const storeProductId = productData ? productData?.id : "27e137bc-51e8-45da-be36-a62805f85421";

    const storeProductId = productData?.id;
    const storeProductType = productData?.productType;

    const urlParams = useParams();
    const { urlDealSlug } = urlParams;

    const [moreDealList, setMoreDealList] = useState<Deal[]>([]);

    useEffect(() => {
        console.log("storeid", storeProductId)
        var params = {
            productId: storeProductId,
            limit: 4,

        }

        if (storeProductId) {
            getMoreDeals(params).then((res) => {
                setMoreDealList(res.data);
            });
        }

    }, [storeProductId])
    console.log("moredee ", moreDealList)
    return (
        <>
            <Box className="more-deal" sx={{ mt: "20px" }}>
                <Box className="more-deal-title" sx={{ marginLeft: "10px", display: "flex", alignItems: "center", justifyContent: "space-between", mb: "24px" }}>
                    <Typography sx={{ fontSize: theme.typography.h3 }}>More Deals You May Like</Typography>
                </Box>
                <Grid container>
                    {
                        moreDealList.map((item) => {
                            const { NZWide, category, clicks, endDate, id, locations, name, productImages, productModes, productType, stores, couponCode, slug } = item;
                            console.log("productType", productType)
                            return (
                                storeProductType === "sale" ?
                                    (<PopularSalesCard key={id} name={name} clicks={clicks} category={category} productImages={productImages} id={''} stores={stores} locations={locations} NZWide={NZWide} endDate={endDate} productType={productType} productModes={productModes} slug={slug} />)

                                    :

                                    (<PopularCouponsCard circleBottomClass="541px" dealsLgSize={6} dealsMdSize={6} key={id} name={name} category={category} productImages={productImages}
                                        id={id} NZWide={NZWide} clicks={clicks} productType={productType} productModes={productModes}
                                        endDate={endDate} stores={stores} locations={locations} slug={slug} />)
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default MoreDealsList