import React from 'react'
import { Stores } from '../../../@types/Stores'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { Box, Grid, Link, Typography } from '@mui/material';
import { theme } from '../../../theme/theme';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { storePageNumber } from '../../../redux/features/dealModeSlice';

const PhysicalStoresVerticalCards = ({ activeDealsCount, address, id, imageUrl, name, storeModes, slug }: Stores) => {

    const dispatch = useDispatch();

    const handleStoreName = (slug: string) => {
        console.log("store slug", slug);
        dispatch(storePageNumber(1));
    }

    return (
        <>
            <Grid item lg={12} md={12} sm={12} xs={12} className='physical-stores-single-item-grid' sx={{ pr: "10px", py: "10px" }}>
                <NavLink to={`/stores/${slug}`}
                    style={{
                        textDecoration: "inherit",
                    }}
                    onClick={() => handleStoreName(slug)}>

                    <Link className='physical-stores-links'
                        sx={{
                            height: "100%", width: "100%", display: "block", cursor: "pointer",
                            textDecoration: "none", border: "1px solid rgba(0, 0, 0, .15)", borderRadius: "10px"
                        }}>
                        <Box className="physical-stores-content-div" sx={{
                            display: "flex",
                            boxSizing: "border-box", padding: "14px",
                            mt: "20px"
                        }}>
                            <Box component="img" src={imageUrl} sx={{ width: "90px", height: "90px", objectFit: "contain" }} />

                            <Box className="physical-store-details" sx={{ ml: "15px" }}>
                                <Box className="physical-store-name-div" sx={{ mb: "10px" }}>
                                    <Typography component="h2" className="physical-store-name"
                                        sx={{ ...theme.typography.cardSubtitle, color: theme.palette.common.black }}>
                                        {name}
                                    </Typography>
                                </Box>
                                <Box className="physical-store-location-dev" sx={{
                                    display: "flex", mb: "10px",
                                    alignItems: "start",
                                }}>
                                    <LocationOnOutlinedIcon sx={{ fontSize: "22px", margin: "0 5px 0 0", color: theme.palette.text.primary, }} />
                                    <Typography className="location-name" sx={{
                                        display: "-webkit-box", fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: theme.palette.common.black
                                    }}>
                                        {address.fillAddress}</Typography>
                                </Box>
                                <Box className="physical-store-offers" sx={{
                                    display: "flex", mb: "10px",
                                }}>
                                    <LocalOfferOutlinedIcon sx={{ fontSize: "22px", margin: "0 5px 0 0", color: theme.palette.text.primary }} />
                                    <Typography className="offer-name" sx={{ fontSize: "14px", fontWeight: 500, lineHeight: "20px", color: theme.palette.common.black }}>
                                        {activeDealsCount === 0 ? `No active deals` : `${activeDealsCount} active deals`}</Typography>
                                </Box>
                            </Box>

                            <Link href="#" sx={{ bgcolor: theme.palette.primary.main, display: "flex", alignItems: "center", alignSelf: "flex-end", padding: "10px", borderRadius: "10px" }}>
                                <NearMeOutlinedIcon sx={{ color: theme.palette.common.white, fontSize: "20px" }} />
                            </Link>

                            {/* {
                            storeModes[0].name === "In Store" ? (

                                <Link href="#" sx={{ bgcolor: theme.palette.primary.main, display: "flex", alignItems: "center", alignSelf: "flex-end", padding: "10px", borderRadius: "10px" }}>
                                    <NearMeOutlinedIcon sx={{ color: theme.palette.common.white, fontSize: "20px" }} />
                                </Link>
                            ) : (
                                <></>
                            )
                        } */}
                        </Box>
                    </Link>
                </NavLink>
            </Grid >
        </>
    )
}

export default PhysicalStoresVerticalCards