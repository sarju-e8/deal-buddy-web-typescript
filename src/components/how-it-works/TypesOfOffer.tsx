import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';

const style = {
    offerCard: {
        display: "flex", alignItems: "center", width: "95%", height: "auto", background: theme.palette.common.white,
        border: "1px solid rgba(0, 0, 0, 0.15)", borderRadius: "10px", padding: "14px"
    },
    offerIconDiv: {
        flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center", mr: "16px",
        height: "60px", width: "60px", borderRadius: "6px", background: theme.palette.primary.main
    },
    icon: { fontSize: "26px", color: theme.palette.common.white },
    offerContentHeading: {
        ...theme.typography.subtitle1, mb: "10px"
    },
    offerContentDesc: { ...theme.typography.body2 }
}

const TypesOfOffer = () => {
    return (
        <>
            <Box maxWidth="xl" sx={{ py: "40px" }}>
                <Box className="page-title-area" sx={{
                    textAlign: "center", paddingTop: 0, position: "relative",
                    zIndex: 1, padding: "40px 0"
                }}>
                    <Typography component="h1" sx={{
                        fontSize: theme.typography.h2.fontSize,
                        fontWeight: theme.typography.h2.fontWeight, lineHeight: theme.typography.h2.lineHeight
                    }}>Types of offers you can find on dealbuddy</Typography>
                </Box>
                <Grid container className='grid-offer' sx={{ px: "80px" }}>
                    <Grid item md={6} sx={{ pr: "15px" }}>
                        <Box className="offer-sales-card"
                            sx={{
                                ...style.offerCard
                            }}>
                            <Box className="offer-sales-icon"
                                sx={{
                                    ...style.offerIconDiv
                                }}>
                                <LocalOfferOutlinedIcon sx={{ ...style.icon }} />
                            </Box>
                            <Box className="offer-sales-card-content">
                                <Typography component="h3" sx={{ ...style.offerContentHeading }}>
                                    Sales
                                </Typography>
                                <Typography sx={{ ...style.offerContentDesc }}>
                                    Every store runs promotional sales making it more affordable for customers to purchase costlier items. Now you have a single place to find sales promotions offered by a wide range of stores. We make sure that only genuine sales promotions are listed on dealbuddy.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item md={6} sx={{ pl: "15px" }}>
                        <Box className="offer-sales-card"
                            sx={{
                                ...style.offerCard
                            }}>
                            <Box className="offer-sales-icon"
                                sx={{
                                    ...style.offerIconDiv
                                }}>
                                <DnsOutlinedIcon sx={{ ...style.icon }} />
                            </Box>
                            <Box className="offer-sales-card-content">
                                <Typography component="h3" sx={{ ...style.offerContentHeading }}>
                                    Coupons
                                </Typography>
                                <Typography sx={{ ...style.offerContentDesc }}>
                                    These are the codes that you can use to access discounts when purchasing an item. We save you time by providing genuine and functioning coupons that are uploaded by real vendors across New Zealand. Either use them online or in-store and save more.
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default TypesOfOffer