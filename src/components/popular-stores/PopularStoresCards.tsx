import { Box, Grid, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { Stores } from '../../@types/Stores';
import React from 'react'

const PopularStoresCards = ({ activeDealsCount, address, imageUrl, name, storeModes }: Stores) => {
    return (
        <>
            <Grid item lg={4} md={4} sm={6} xs={12} className='stores-single-item-grid'>
                <Box className="stores-content-div" sx={{
                    display: "flex", border: "1px solid rgba(0, 0, 0, .15)",
                    boxSizing: "border-box", borderRadius: "10px", padding: "15px",
                    height: "60vh", width: "95%", mt:"20px"
                }}>
                    {/* <Box className="stores-image-div" sx={{}}> */}
                    <Box component="img" src={imageUrl} sx={{ width: "12vw", height: "30vh" }} />
                    {/* </Box> */}

                    <Box className="store-details" sx={{ ml: "15px" }}>
                        <Box className="store-name-div" sx={{ mb: "10px" }}>
                            <Typography component="h2" className="store-name"
                                sx={{ fontSize: "16px", fontWeight: 500, lineHeight: 1.4 }}>
                                {name}
                            </Typography>
                        </Box>
                        <Box className="store-location-dev" sx={{
                            display: "flex", mb: "10px",
                            alignItems: "start",
                        }}>
                            <LocationOnOutlinedIcon sx={{ fontSize: "22px", margin: "0 5px 0 0", color: "#00c86d", }} />
                            <Typography className="location-name" sx={{
                                display: "-webkit-box", fontSize: "14px", fontWeight: 500, lineHeight: "20px"
                            }}>
                                {storeModes[0].name === "Online" ? `${storeModes[0].name + " Store"}` : address.fillAddress}</Typography>
                        </Box>
                        <Box className="store-offers" sx={{
                            display: "flex", mb: "10px",
                        }}>
                            <LocalOfferOutlinedIcon sx={{ fontSize: "22px", margin: "0 5px 0 0", color: "#00c86d" }} />
                            <Typography className="offer-name">
                                {activeDealsCount === 0 ? `No active deals` : `${activeDealsCount} active deals`}</Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default PopularStoresCards