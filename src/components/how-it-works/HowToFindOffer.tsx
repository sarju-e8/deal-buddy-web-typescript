import { Box, Container, Grid, Icon, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';


const HowToFindOffer = () => {
    // const findOffersData: Offer[] = [
    //     {
    //         id: 1,
    //         name: "Find by categories",
    //         desc: "We have a wide range of categories for you to easily filter and find the exact deals you are looking for.",
    //         icon: "CategoryOutlinedIcon",
    //     },
    //     {
    //         id: 2,
    //         name: "Search on the map",
    //         desc: "Use our Map feature to locate stores offering deals near you and filter down the search to find an offer.",
    //         icon: "PlaceOutlinedIcon",
    //     },
    //     {
    //         id: 3,
    //         name: "Find by stores",
    //         desc: "Easily search for your faviourite brands and find out the deals and discounts they are offering.",
    //         icon: "StorefrontOutlinedIcon",
    //     }
    // ]

    // const OfferCards = ({ id, name, desc, icon }: Offer) => {
    //     return (
    //         <Grid item xl={4} lg={4} md={6} sm={12}>
    //             <Box className="find-offers-card"
    //                 sx={{
    //                     display: "flex", height: "auto", flexDirection: "column", alignItems: "center",
    //                     textAlign: "center", background: theme.palette.common.white,
    //                     border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px"
    //                 }}>
    //                 <Box className="find-offer-card-img"
    //                     sx={{
    //                         flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
    //                         height: "60px", width: "60px", mb: "16px", borderRadius: "10px", background: theme.palette.primary.main
    //                     }}>
    //                     <Typography component='span' sx={{ fontSize: "26px", color: theme.palette.common.white }}>
    //                         <i>{icon}</i>
    //                     </Typography>
    //                 </Box>

    //                 <Box className="find-offer-card-content">
    //                     <Typography component='h3' sx={{ ...theme.typography.subtitle1 }}>
    //                         {name}</Typography>
    //                     <Typography sx={{ ...theme.typography.body2 }}>
    //                         {desc}
    //                     </Typography>
    //                 </Box>
    //             </Box>
    //         </Grid>
    //     )
    // }

    return (
        <>
            <Box className="find-offers-div" sx={{ background: theme.palette.background.paper }}>
                <Container maxWidth="xl" sx={{ py: "40px" }}>
                    <Box className="find-offer-page-title" sx={{ textAlign: "center", pt: 0 }}>
                        <Typography component="h1" sx={{ ...theme.typography.h2, position: "relative", zIndex: 1, py: "40px" }}>
                            How to find offers</Typography>
                    </Box>

                    <Grid maxWidth="xl" container sx={{ pl: "45px", pr: "40px" }}>
                        <Grid item lg={4} md={6} sm={12} sx={{ px: "12px" }}>
                            <Box className="find-offers-card"
                                sx={{
                                    display: "flex", height: "auto", flexDirection: "column", alignItems: "center",
                                    textAlign: "center", background: theme.palette.common.white,
                                    border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px"
                                }}>
                                <Box className="find-offer-card-img"
                                    sx={{
                                        flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
                                        height: "60px", width: "60px", mb: "16px", borderRadius: "10px", background: theme.palette.primary.main
                                    }}>
                                    <CategoryOutlinedIcon sx={{ fontSize: "26px", color: theme.palette.common.white }} />
                                </Box>

                                <Box className="find-offer-card-content">
                                    <Typography component='h3' sx={{ ...theme.typography.subtitle1 }}>
                                        Find by categories</Typography>
                                    <Typography sx={{ ...theme.typography.body2 }}>
                                        We have a wide range of categories for you to easily filter and find the exact deals you are looking for.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} sx={{ px: "12px" }}>
                            <Box className="find-offers-card"
                                sx={{
                                    display: "flex", height: "auto", flexDirection: "column", alignItems: "center",
                                    textAlign: "center", background: theme.palette.common.white,
                                    border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px"
                                }}>
                                <Box className="find-offer-card-img"
                                    sx={{
                                        flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
                                        height: "60px", width: "60px", mb: "16px", borderRadius: "10px", background: theme.palette.primary.main
                                    }}>
                                    <PlaceOutlinedIcon sx={{ fontSize: "26px", color: theme.palette.common.white }} />
                                </Box>

                                <Box className="find-offer-card-content">
                                    <Typography component='h3' sx={{ ...theme.typography.subtitle1 }}>
                                        Search on the map</Typography>
                                    <Typography sx={{ ...theme.typography.body2 }}>
                                        Use our Map feature to locate stores offering deals near you and filter down the search to find an offer.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} sx={{ px: "12px" }}>
                            <Box className="find-offers-card"
                                sx={{
                                    display: "flex", height: "auto", flexDirection: "column", alignItems: "center",
                                    textAlign: "center", background: theme.palette.common.white,
                                    border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px"
                                }}>
                                <Box className="find-offer-card-img"
                                    sx={{
                                        flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
                                        height: "60px", width: "60px", mb: "16px", borderRadius: "10px", background: theme.palette.primary.main
                                    }}>
                                    <StorefrontOutlinedIcon sx={{ fontSize: "26px", color: theme.palette.common.white }} />
                                </Box>

                                <Box className="find-offer-card-content">
                                    <Typography component='h3' sx={{ ...theme.typography.subtitle1 }}>
                                        Find by stores</Typography>
                                    <Typography sx={{ ...theme.typography.body2 }}>
                                        Easily search for your faviourite brands and find out the deals and discounts they are offering.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        {/* {
                            findOffersData.map((item) => {
                                const { id, name, desc, icon } = item;
                                return (
                                    <OfferCards key={id} name={name} desc={desc} icon={icon} id={id} />
                                )
                            })
                        } */}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default HowToFindOffer