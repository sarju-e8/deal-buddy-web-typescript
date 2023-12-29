import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getDealsImage, getOfferImage } from '../../services/OfferAndDealsApi';
import { HomeCoupons, HomeDeals } from '../../assets/image_path';

const style = {
    container: {
        margin: "30px auto", cursor: "pointer"
    },
    mainOffersDiv: {
        mr: "12px",
    },
    mainDealsDiv: {
        ml: "12px"
    },
    link: {
        textDecoration: "none"
    },
    offerCardDiv: {
        backgroundImage: `url("${HomeDeals}")`, backgroundRepeat: "no-repeat", borderRadius: "10px"
    },
    dealsCardDiv: {
        backgroundImage: `url("${HomeCoupons}")`, backgroundRepeat: "no-repeat", borderRadius: "10px"
    },
    contentDiv: {
        display: 'flex', alignItems: "center", flexDirection: "column", justifyContent: "center", background: "rgba(0,0,0,0.5)", padding: "50px 0", borderRadius: "10px", color: "white"
    },
    title: {
        fontSize: "36px", lineHeight: "44px", fontWeight: 700,
    },
    subTitle: {
        fontSize: "16px", margin: 0, lineHeight: "24px"
    }

}

const OffersAndDeals = () => {
    const CouponsLink: string = "https://coupons.dealbuddy.co.nz/";
    const DealsHrefLink: string = "https://www.dealbuddy.co.nz/deals";

    // const [offerApiData, setOfferApiData] = useState();
    // const offerUrl: string = "assets/img/home-deals.png";

    // const [dealsApiData, setDealsApiData] = useState();
    // const dealsUrl: string = "assets/img/home-coupons.png";

    // useEffect(() => {
    //     getDealsImage(dealsUrl).then((res) => {
    //         // console.log("deals", res);
    //         setDealsApiData(res.data);
    //     });

    //     getOfferImage(offerUrl).then((res) => {
    //         console.log("offer", res)
    //     })

    // }, [])

    // console.log("deals:", setDealsApiData);
    // sx={{ display: "flex", justifyContent: "space-between", margin: "30px auto", cursor: "pointer" }}
    return (
        <>
            <Container maxWidth="lg">
                <Grid className="container" container sx={{ ...style.container }}>
                    <Grid className='offers-grid' item md={6} xs={12}>
                        <Box className="main-offers-div" sx={{ ...style.mainOffersDiv }}>
                            <Link className='link' href={CouponsLink} target="_blank" sx={{ ...style.link }}>
                                <Box className="offer-card" sx={{ ...style.offerCardDiv }}>
                                    <Box className="content" sx={{ ...style.contentDiv }}>
                                        <Typography className='offer-title' component='h2' sx={{ ...style.title }}>Offers</Typography>
                                        <Typography className='offer-subtitle-first' sx={{ ...style.subTitle }}>Pulled by our</Typography>
                                        <Typography className='offer-subtitle-second' sx={{ ...style.subTitle }}>smart bots</Typography>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>

                    <Grid className='deals-grid' item md={6} xs={12}>
                        <Box className="main-deals-div" sx={{ ...style.mainDealsDiv }}>
                            <Link href={DealsHrefLink} target="_blank" sx={{ ...style.link }}>
                                <Box className="deals-card" sx={{ ...style.dealsCardDiv }}>
                                    <Box className="content" sx={{ ...style.contentDiv }}>
                                        <Typography className='deals-title' component='h2' sx={{ ...style.title }}>Deals</Typography>
                                        <Typography className='deals-subtitle-first' sx={{ ...style.subTitle }}>Added by</Typography>
                                        <Typography className='deals-subtitle-second' sx={{ ...style.subTitle }}>vendors and our team</Typography>
                                    </Box>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default OffersAndDeals