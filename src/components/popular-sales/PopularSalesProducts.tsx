import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import React, { useEffect, useState } from 'react'
import { Deal } from '../../@types/deals';
import { getSaleProduct } from '../../services/PopularSaleProductApi';
import PopularSalesCard from './PopularSalesCard';
import { string } from 'yup';
import { useSelector } from 'react-redux';
// const image_url: string[] = []

const PopularSalesProducts = ({ saleList }) => {

    return (
        <>
            {/* <Container maxWidth="lg" className="popular-sale-product-main-container" sx={{ p: 0 }}> */}
            <Box className="popular-sale-main-container" sx={{ pl: "50px", pr: "43px" }}>
                <Grid container className='product-grid-container'>


                    {saleList &&
                        saleList.map((data) => {
                            // const categoryName = data.category.name
                            const { id, name, clicks, category, stores, productImages, locations, productType, productModes, NZWide, endDate, slug } = data

                            return (
                                <>
                                    {/* <PopularSalesCard key={id} name={name} productImage={data?.productImage.} clicks={clicks}
                                            category={data.category} id={''}
                                        // Stores={data.Stores.name} 
                                        /> */}

                                    <PopularSalesCard key={id} name={name} clicks={clicks} category={category} productImages={productImages} id={id} stores={stores} locations={locations} NZWide={NZWide} endDate={endDate} productType={productType} productModes={productModes} slug={slug} />
                                </>
                            )
                        })
                    }

                    {/* <Grid item lg={3} md={4} sm={6} xs={12} className='product-single-item-grid' sx={{ p: "10px" }}>
                            <Box className="product-sale-card"
                                sx={{
                                    display: "flex", overflow: "hidden", width: "100%", height: "100%",
                                    flexDirection: "column", maxWidth: "304px",
                                    border: "1px solid rgba(0,0,0,.15)",
                                    margin: "0 auto",
                                    bgcolor: "white", borderRadius: "10px"
                                }}>
                                <Box className="product-image"
                                    sx={{ height: "200px", width: "100%", position: "relative" }}>
                                    <Link href="#" sx={{ color: "inherit", transition: ".5s", textDecoration: "none", outline: "0" }}>
                                        <Box component="img"
                                            src={apiData[0].productImages[0].imageUrl}
                                            sx={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
                                    </Link>
                                    <Box className="view-info" sx={{ position: "absolute", width: "100%", bottom: 0, fontSize: "16px", color: "white", display: "none", alignItems: "center", justifyContent: "center", bgcolor: "#00000080", boxShadow: "0 0 15px #0000000d", heigth: "38px" }}>
                                        <Box className="view-item" sx={{ lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Box component="img" src="" sx={{ height: "18px", width: "18px", objectFit: "contain" }} alt="click" className="click-icon" />
                                            <Typography component="span" className='view-text' sx={{ fontSize: "14px" }}>1.5k</Typography>
                                        </Box>
                                    </Box>
                                    <Box className="category-title"
                                        sx={{ top: "20px", left: "20px", position: "absolute", background: "rgba(0,0,0,0.75)", color: "white", boxShadow: "0 1px 2px #1018280d", borderRadius: "5px", padding: "8px 14px", fontWeight: 500, fontSize: "14px", lineHeight: "20px" }}>
                                        <Typography>Food</Typography>
                                    </Box>
                                    <Link className="wishlist-button text-white" sx={{ cursor: "pointer", position: "absolute", top: "20px", right: "10px", height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", }}>
                                        <FavoriteBorderOutlinedIcon className='icon-heart' sx={{ fontSize: "28px", color: "#fff400" }} />
                                    </Link>
                                </Box>
                                <Box className="product-details" sx={{ bgcolor: "white", padding: "20px", display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "space-between" }}>
                                    <Box className="detail" sx={{ flexGrow: 1 }}>
                                        <Typography component="span" className='title text-uppercase' sx={{ mb: "6px", display: "block", fontSize: "12px", lineHeight: "18px", color: "#00000080", textTransform: "uppercase" }}>Sale -
                                            <Typography component="span" className='title-second-part' sx={{ pl: "4px" }}>In Store</Typography>
                                        </Typography>
                                        <Link href="#">
                                            <Typography component="h4" className='item-name truncate-tree-line' sx={{ mb: "14px", fontWeight: 500, fontSize: "16px", lineHeight: 1.4, display: '-webkit-box', maxWidth: "100%", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>Subway - Buy 2 foot longs for $24</Typography>
                                        </Link>
                                        <Box className="item-details store-name" sx={{ display: "flex", marginBottom: "10px" }}>
                                            <StorefrontOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                            <Typography className='truncate-two-line' sx={{ margin: 0, fontSize: "14px", lineHeight: "20px", display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                                Subway Grey street, Hamilton</Typography>
                                        </Box>
                                        <Box className="item-details location" sx={{ display: "flex", marginBottom: "10px" }}>
                                            <LocationOnOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                            <Typography className='truncate' sx={{ margin: 0, fontSize: "14px", lineHeight: "20px", width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                Hamilton</Typography>
                                        </Box>
                                        <Box className="item-details item-expires" sx={{ display: "flex", marginBottom: "10px" }}>
                                            <CalendarTodayOutlinedIcon />
                                            <Typography sx={{ margin: 0, fontSize: "14px", lineHeight: "20px" }}>Expires in 77 days</Typography>
                                        </Box>
                                    </Box>
                                    <Button className='view-btn'
                                        sx={{
                                            borderRadius: "5px", border: "none", color: "white", padding: "10px 24px", display: "inline-block", background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)", transition: ".5s", boxShadow: "unset", '&:hover': {
                                                color: 'black',
                                                background: 'linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)',
                                            }
                                        }}>
                                        <Typography sx={{ mt: "20px", lineHeight: 1.4, fontWeight: 500, fontSize: "14px", textTransform: "capitalize" }}>View Deal</Typography>
                                    </Button>
                                </Box>
                            </Box>

                        </Grid> */}




                </Grid>
            </Box>
            {/* </Container > */}
        </>
    )
}

export default PopularSalesProducts




// const {id, name, categoryName, clicks, imageUrl, productImages} = item;
// <PopularSalesCard key={id} name={name} imageUrl={imageUrl}/>