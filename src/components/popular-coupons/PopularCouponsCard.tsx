import { Box, Button, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { ClickIcon } from '../../assets/image_path'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { Deal } from '../../@types/deals';
import { calculateDays } from '../../helperFunctions/CalculateDays';
import { theme } from '../../theme/theme';
import ButtonComp from '../common-components/Button';




{/* <style>
    .coupons-card:hover .coupons-image .view-info {
        display: "flex",
    grid-gap: 24px;
    gap: 24px;
}
</style> */}
const PopularCouponsCard = ({ circleBottomClass = "270px", dealsLgSize = 3, name, productImages, clicks, category, stores, locations, productType, productModes, NZWide, endDate }: Deal) => {

    const expiresInDaysCount = calculateDays(endDate);

    return (
        <>
            <Grid item lg={dealsLgSize} md={4} sm={6} xs={12} className='coupons-single-item-grid' sx={{
                p: "10px",
                // hover on coupon that time display view count
                "& : hover .coupons-image .view-info": { gap: "24px", gridGap: "24px", display: "flex" }
            }}>
                <Box className="coupons-card"
                    sx={{
                        maxWidth: "630px", display: "flex", flexDirection: "column", overflow: "hidden",
                        width: "100%", height: "100%", margin: "0 auto", bgcolor: theme.palette.common.white, borderRadius: "10px",
                        // "& : hover .coupons-image .view-info": { gap: "24px", gridGap: "24px", display: "flex" }
                    }}>
                    <Box className="first-part"
                        sx={{
                            // width: "100%", 
                            background: theme.palette.background.paper, border: "1px dashed rgba(0,0,0,.15)",
                            borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px", borderTopRightRadius: "10px", borderRightColor: "#00000026",
                            height: "100%", maxWidth: "unset"
                        }}>
                        <Box className="coupons-image" sx={{ mb: "16px", height: "200px", width: "100%", position: "relative" }}>
                            <Link href="#" sx={{ color: "inherit", textDecoration: "none", outline: "0", transition: ".5s" }}>
                                <Box component="img" src={productImages[0].imageUrl}
                                    sx={{ height: "100%", width: "100%", objectFit: "cover" }} />
                            </Link>
                            <Box className="view-info"
                                sx={{
                                    position: "absolute", width: "100%", bottom: 0, fontSize: "16px", color: theme.palette.common.white,
                                    display: "none", alignItems: "center", justifyContent: "center", bgcolor: theme.customBackgroundColor.transparentBlack,
                                    boxShadow: "0 0 15px #0000000d", height: "38px"
                                }}>
                                <Box className="view-item"
                                    sx={{ lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Box component="img" src={ClickIcon} sx={{ height: "18px", width: "18px", objectFit: "contain" }} alt="click" className="click-icon" />
                                    <Typography component="span" className='view-text' sx={{ fontSize: "14px", lineHeight: "18px", pl: "8px" }}>
                                        {clicks}</Typography>
                                </Box>
                            </Box>
                            <Box className="category-title"
                                sx={{ top: "20px", left: "20px", position: "absolute", background: "rgba(0,0,0,0.75)", color: theme.palette.common.white, boxShadow: "0 1px 2px #1018280d", borderRadius: "5px", padding: "8px 14px", fontWeight: 500, fontSize: "14px", lineHeight: "20px" }}>
                                <Typography>{category.name}</Typography>
                            </Box>
                            <Link className="wishlist-button text-white" sx={{ cursor: "pointer", position: "absolute", top: "20px", right: "10px", height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", }}>
                                {/* <Typography component="span" className='icon-heart'> */}
                                <FavoriteBorderOutlinedIcon className='icon-heart' sx={{ fontSize: "28px", color: theme.palette.secondary.main }} />
                                {/* </Typography> */}
                            </Link>
                        </Box>

                        <Box className="coupons-details-first" sx={{ padding: "10px" }}>
                            <Typography component="span" className='title text-uppercase'
                                sx={{
                                    pb: "4px", display: "block", fontSize: "12px", lineHeight: "18px",
                                    color: theme.palette.text.secondary, textTransform: "uppercase"
                                }}>
                                {productType} -
                                <Typography component="span" sx={{ pl: '4px', fontSize: "12px" }}>
                                    {`${productModes[0]?.name}`} {productModes[1]?.name && "/ " + productModes[1]?.name}
                                </Typography>
                                <Link className='coupon-item' sx={{ color: theme.palette.common.black, transition: ".5s", textDecoration: "none", outline: "0" }}>
                                    <Typography component="h4" className='item-name truncate-tree-line'
                                        sx={{
                                            ...theme.typography.h6,
                                            margin: 0,
                                            display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden"
                                        }}>
                                        {name}
                                    </Typography>
                                </Link>
                            </Typography>
                        </Box>
                    </Box>

                    <Box className="second-part"
                        sx={{
                            // width: "100%",
                            position: "relative", bgcolor: theme.palette.background.default, padding: "10px", maxWidth: "unset",
                            borderRadius: "10px"
                        }}>
                        <Box className="coupons-details-second" sx={{ display: "flex", flexDirection: "column", height: "100%", }}>
                            <Box className="md">
                                <Box className="item-details store-name" sx={{ display: "flex", marginBottom: "10px" }}>
                                    <StorefrontOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                    <Typography className='truncate-two-line' sx={{ margin: 0, fontSize: "14px", lineHeight: "20px", display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                        {stores[0].name}
                                    </Typography>
                                </Box>
                                <Box className="item-details location" sx={{ display: "flex", mb: "10px" }}>
                                    <LocationOnOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                    <Typography className='truncate-two-line' sx={{
                                        margin: 0, fontSize: "14px", lineHeight: "20px",
                                        display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                        overflow: "hidden"
                                    }}>
                                        {NZWide ? "NZ Wide" : locations[0]?.location}</Typography>
                                </Box>
                                <Box className="item-details item-expires" sx={{ display: "flex", mb: "10px" }}>
                                    <CalendarTodayOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                    <Typography className='truncate-two-line' sx={{
                                        margin: 0, fontSize: "14px", lineHeight: "20px",
                                        display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                        overflow: "hidden", alignItems: "center"
                                    }}>
                                        {`Expires In  ${expiresInDaysCount} days`}</Typography>
                                </Box>
                            </Box>
                            {/* <Button className='view-btn'
                                sx={{
                                    mt: "20px", borderRadius: "5px", border: "none", color: "white", padding: "10px 24px", display: "inline-block", background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)", transition: ".5s", boxShadow: "unset", '&:hover': {
                                        color: 'black',
                                        background: 'linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)',
                                    }
                                }}>
                                <Typography sx={{ ...theme.typography.button, textTransform: "capitalize" }}>
                                    Show Code</Typography>
                            </Button> */}
                            <ButtonComp name="Show Code" sx={{ marginTop: "20px" }}></ButtonComp>
                        </Box>
                    </Box>

                    <Box className="circle-top"
                        sx={{
                            top: "-180px", position: "relative", bgcolor: theme.palette.common.white, transform: "scaleY(-1)",
                            height: "30px", width: "25px", borderRadius: "100%", left: "-12px"
                        }}>
                    </Box>
                    <Box className="circle-bottom"
                        sx={{
                            bottom: "-10px", left: `${circleBottomClass}`, top: "-196px", right: "-10px", position: "relative",
                            bgcolor: theme.palette.common.white, transform: "scaleY(-1)", height: "30px", width: "25px", borderRadius: "100%",
                        }}>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default PopularCouponsCard