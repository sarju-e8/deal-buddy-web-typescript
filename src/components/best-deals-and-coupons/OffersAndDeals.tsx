import { Box, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDealsImage, getOfferImage } from '../../services/OfferAndDealsApi';

const OffersAndDeals = () => {
    const OfferHrefLink: string = "https://coupons.dealbuddy.co.nz/";
    const DealsHrefLink: string = "https://www.dealbuddy.co.nz/deals";

    const [offerApiData, setOfferApiData] = useState();
    const offerUrl: string = "home-deals.png";

    const [dealsApiData, setDealsApiData] = useState();
    const dealsUrl: string = "home-coupons.png";

    useEffect(() => {
        getDealsImage(dealsUrl).then((res) => {
            console.log("deals", res);
            setDealsApiData(res.data);
        });

        getOfferImage(offerUrl).then((res) => {
            console.log("offer", res);
            setDealsApiData(res.data);
        });
    }, [])
    return (
        <>
            <Grid container>
                <Grid className='offers-grid' item md={6} xs={12}>
                    <Box className="main-offers-div">
                        <Link href={OfferHrefLink} target="_blank">
                            <Box className="offer-card">
                                <Box className="content">
                                    <Typography className='offer-title' component='h2'>Offers</Typography>
                                    <Typography className='offer-subtitle-first'>Pulled by our</Typography>
                                    <Typography className='offer-subtitle-second'>smart bots</Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                </Grid>

                <Grid className='deals-grid' item md={6} xs={12}>

                </Grid>
            </Grid>
        </>
    )
}

export default OffersAndDeals
