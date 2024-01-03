import { Box, Grid, Link, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { Stores } from '../../@types/Stores';
import React from 'react'
import { theme } from '../../theme/theme';

const PopularStoresCards = ({ activeDealsCount, address, imageUrl, name, storeModes }: Stores) => {
    return (
        <>
            <Grid item lg={4} md={4} sm={6} xs={12} className='stores-single-item-grid' sx={{ px: "20px", py: "10px" }}>
                <Link href="#" className='stores-links'
                    sx={{
                        height: "100%", width: "100%", display: "block", cursor: "pointer",
                        textDecoration: "none", border: "1px solid rgba(0, 0, 0, .15)", borderRadius: "10px"
                    }}>
                    <Box className="stores-content-div" sx={{
                        display: "flex",
                        boxSizing: "border-box", padding: "14px",
                        mt: "20px"
                    }}>
                        <Box component="img" src={imageUrl} sx={{ width: "90px", height: "90px", objectFit: "contain" }} />

                        <Box className="store-details" sx={{ ml: "15px" }}>
                            <Box className="store-name-div" sx={{ mb: "10px" }}>
                                <Typography component="h2" className="store-name"
                                    sx={{ ...theme.typography.cardSubtitle, color: theme.palette.common.black }}>
                                    {name}
                                </Typography>
                            </Box>
                            <Box className="store-location-dev" sx={{
                                display: "flex", mb: "10px",
                                alignItems: "start",
                            }}>
                                <LocationOnOutlinedIcon sx={{ fontSize: "22px", margin: "0 5px 0 0", color: theme.palette.text.primary, }} />
                                <Typography className="location-name" sx={{
                                    display: "-webkit-box", fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: theme.palette.common.black
                                }}>
                                    {storeModes[0].name === "Online" ? `${storeModes[0].name + " Store"}` : address.fillAddress}</Typography>
                            </Box>
                            <Box className="store-offers" sx={{
                                display: "flex", mb: "10px",
                            }}>
                                <LocalOfferOutlinedIcon sx={{ fontSize: "22px", margin: "0 5px 0 0", color: theme.palette.text.primary }} />
                                <Typography className="offer-name" sx={{ fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: theme.palette.common.black }}>
                                    {activeDealsCount === 0 ? `No active deals` : `${activeDealsCount} active deals`}</Typography>
                            </Box>
                        </Box>

                        {
                            storeModes[0].name === "In Store" ? (

                                <Link href="#" sx={{ bgcolor: theme.palette.primary.main, display: "flex", alignItems: "center", alignSelf: "flex-end", padding: "10px", borderRadius: "10px" }}>
                                    <NearMeOutlinedIcon sx={{ color: theme.palette.common.white, fontSize: "20px" }} />
                                </Link>
                            ) : (
                                <></>
                            )
                        }
                    </Box>
                </Link>
            </Grid >
        </>
    )
}

export default PopularStoresCards