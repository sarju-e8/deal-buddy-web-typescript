import { Box, Button, Grid, Link, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { ClickIcon } from '../../assets/image_path';
import { Deal } from '../../@types/deals';
import { calculateDays } from '../../helperFunctions/CalculateDays';
import { theme } from '../../theme/theme';
import ButtonComp from '../common-components/Button';
import { useNavigate } from 'react-router-dom';


export interface SalesProductCard {
    name: string;
    imageUrl: string;
    clicks: string;
}
// .blogs - card - item: hover .blogs - image - div.blogs - view - info 

const style = {
    hoverCard: {
        display: "flex",
        gridGap: "24px",
        gap: "24px",
        // display: "inline-block",
    }
}

const PopularSalesCard = ({ dealsLgSize = 3, name, productImages, clicks, category, stores, locations, productType, productModes, NZWide, endDate, slug }: Deal) => {


    const expiresInDaysCount = calculateDays(endDate);

    const navigate = useNavigate();

    const navigateToViewDetail = (slug) => {
        // console.log("slug", slug)

        navigate(`/deals/${slug}`);
    }

    return (
        <>
            <Grid item lg={dealsLgSize} md={4} sm={6} xs={12} className='product-single-item-grid' sx={{ p: "10px" }}>
                <Box className="product-sale-card"
                    sx={{
                        display: "flex", overflow: "hidden", width: "100%", height: "100%",
                        flexDirection: "column", maxWidth: "304px",
                        border: "1px solid rgba(0,0,0,.15)",
                        margin: "0 auto",
                        bgcolor: "white", borderRadius: "10px",
                        "&: hover .product-image .product-view-info": { gap: "24px", gridGap: "24px", display: "flex" }
                    }}>
                    <Box className="product-image"
                        sx={{ height: "200px", width: "100%", position: "relative", }}>
                        <Link href="#" sx={{ color: "inherit", transition: ".5s", textDecoration: "none", outline: "0" }}>
                            <Box component="img"
                                // src={apiData[0].productImages[0].imageUrl}
                                src={productImages[0].imageUrl}
                                sx={{ height: "100%", width: "100%", objectFit: "cover", borderRadius: "10px 10px 0 0" }} />
                        </Link>
                        <Box className="product-view-info" sx={{
                            position: "absolute", width: "100%", bottom: 0, fontSize: "16px", color: "white",
                            display: "none", alignItems: "center", justifyContent: "center", bgcolor: "#00000080",
                            boxShadow: "0 0 15px #0000000d", height: "38px"
                        }}>
                            <Box className="product-view-item" sx={{ lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Box component="img" src={ClickIcon} sx={{ height: "18px", width: "18px", objectFit: "contain" }} alt="click" className="click-icon" />
                                <Typography component="span" className='view-text' sx={{ fontSize: "14px", lineHeight: "18px", pl: "8px" }}>
                                    {clicks}</Typography>
                            </Box>
                        </Box>
                        <Box className="product-category-title"
                            sx={{ top: "20px", left: "20px", position: "absolute", background: "rgba(0,0,0,0.75)", color: theme.palette.common.white, boxShadow: "0 1px 2px #1018280d", borderRadius: "5px", padding: "8px 14px", fontWeight: 500, fontSize: "14px", lineHeight: "20px" }}>
                            <Typography>{category.name}</Typography>
                        </Box>
                        <Link className="product-wishlist-button text-white" sx={{ cursor: "pointer", position: "absolute", top: "20px", right: "10px", height: "35px", width: "35px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "5px", }}>
                            {/* <Typography component="span" className='icon-heart'> */}
                            <FavoriteBorderOutlinedIcon className='icon-heart' sx={{ fontSize: "28px", color: theme.palette.secondary.main }} />
                            {/* </Typography> */}
                        </Link>
                    </Box>
                    <Box className="product-details" sx={{ bgcolor: theme.palette.common.white, padding: "20px", display: "flex", flexGrow: 1, flexDirection: "column", justifyContent: "space-between" }}>
                        <Box className="detail" sx={{ flexGrow: 1 }}>
                            <Typography component="span" className='title text-uppercase' sx={{ mb: "6px", display: "block", fontSize: "12px", lineHeight: "18px", color: "#00000080", textTransform: "uppercase" }}>
                                {productType} -
                                <Typography component="span" className='title-second-part' sx={{ pl: "4px", fontSize: "12px" }}>
                                    {`${productModes[0]?.name}`} {productModes[1]?.name && "/ " + productModes[1]?.name}</Typography>
                            </Typography>
                            <Link href="#" sx={{ textDecoration: "none", color: "black" }}>
                                <Typography component="h4" className='item-name truncate-tree-line'
                                    sx={{ ...theme.typography.h6, mb: "14px", display: '-webkit-box', maxWidth: "100%", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                    {name}</Typography>
                            </Link>
                            <Box className="product-item-details store-name" sx={{ display: "flex", marginBottom: "10px" }}>
                                <StorefrontOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                <Typography className='truncate-two-line' sx={{ margin: 0, fontSize: "14px", lineHeight: "20px", display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                                    {stores[0].name}</Typography>
                            </Box>
                            <Box className="product-item-details location" sx={{ display: "flex", marginBottom: "10px" }}>
                                <LocationOnOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                <Typography className='truncate' sx={{ margin: 0, fontSize: "14px", lineHeight: "20px", width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                    {NZWide ? "NZWide" : locations[0]?.location}</Typography>
                            </Box>
                            <Box className="product-item-details item-expires" sx={{ display: "flex", marginBottom: "10px" }}>
                                <CalendarTodayOutlinedIcon sx={{ fontSize: "20px", margin: "0 12px 0 0" }} />
                                <Typography sx={{ margin: 0, fontSize: "14px", lineHeight: "20px" }}>
                                    {`Expires in ${expiresInDaysCount} days`}</Typography>
                            </Box>
                        </Box>
                        {/* <Button className='view-btn'
                            sx={{
                                mt: "20px", borderRadius: "5px", border: "none", color: "white", padding: "10px 24px", display: "inline-block", background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)", transition: ".5s", boxShadow: "unset", '&:hover': {
                                    color: 'black',
                                    background: 'linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)',
                                }
                            }}>
                            <Typography sx={{ lineHeight: 1.4, fontWeight: 500, fontSize: "14px", textTransform: "capitalize" }}>View Deal</Typography>
                        </Button> */}

                        <ButtonComp name="View Deal" sx={{ marginTop: "20px" }}
                            func_call={() => navigateToViewDetail(slug)}
                        ></ButtonComp>
                    </Box>
                </Box>
            </Grid >
        </>
    )
}

export default PopularSalesCard