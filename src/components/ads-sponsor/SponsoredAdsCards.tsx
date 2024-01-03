import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { SponsorAds } from '../../@types/SponsorAds'
import { theme } from '../../theme/theme'

const SponsoredAdsCards = ({ title, imageUrl, link, shortDescription }: SponsorAds) => {
    return (
        <>
            <Grid item lg={3} md={4} sm={6} xs={12} className='sponsored-single-item-card'>
                <Box className="sponsore-card-item" sx={{ margin: "0 10px", display: "block", width: "93%", height: "100%" }}>
                    <Box className="sponsored-card"
                        sx={{
                            display: "flex", overflow: "hidden", width: "100%", height: "100%", margin: "0 auto",
                            bgcolor: theme.palette.common.white, borderRadius: "10px", flexDirection: "column", maxWidth: "304px",
                            border: "1px solid rgba(0,0,0,.15)"
                        }}>
                        <Link href={link} target="_blank" sx={{ color: theme.palette.common.black, transition: ".5s", textDecoration: "none", outline: "0" }}>
                            <Box className="sponsor-ads-image-div" sx={{ width: "100%" }}>
                                <Box className="sponsor-image" component="img" src={imageUrl}
                                    sx={{ height: "146px", width: "100%", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
                            </Box>
                            <Box className="sponsor-details"
                                sx={{
                                    bgcolor: theme.palette.common.white, padding: "20px", diplay: "flex", flexGrow: 1,
                                    flexDirection: "column", justifyContent: "space-between"
                                }}>
                                <Box className="detail" sx={{ flexGrow: 1 }}>
                                    <Typography className='sponsor-ads-title' component="h4" sx={{
                                        ...theme.typography.cardSubtitle, color: theme.palette.common.black,
                                        marginBottom: "10px"
                                    }}>
                                        {title}</Typography>

                                    <Typography className='sponsor-ads-subtitle' sx={{
                                        fontSize: "12px", lineHeight: 1.4, color: theme.palette.text.secondary,
                                        margin: 0
                                    }}>
                                        {shortDescription}
                                    </Typography>
                                </Box>
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default SponsoredAdsCards