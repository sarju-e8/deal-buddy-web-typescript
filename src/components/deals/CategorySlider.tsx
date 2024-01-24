import React, { Component, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import { theme } from "../../theme/theme";
import { Category } from "../../@types/category";
import { getAllCategoryList } from "../../services/CategoryApi";
import CategoryCards from "../categories/CategoryCards";
import { TravelCategoryIcon } from "../../assets/image_path";
import { NavLink } from "react-router-dom";

const CategorySlider = () => {
    const [apiData, setApiData] = useState<Category[]>([]);

    const url: string = "category?v=1704193922481&where%5Bstatus%5D=active&order%5BorderBy%5D=ASC";

    useEffect(() => {
        getAllCategoryList(url).then((res) => {
            setApiData(res.data.items);
        });
    }, [])

    // const settings = {
    //     className: "center",
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 6,
    //     swipeToSlide: true,
    //     afterChange: function (index: number) {
    //         console.log(
    //             `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //         );
    //     },

    //     responsive: [{
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 4,
    //             swipeToSlide: true,
    //         }
    //     }],
    // };

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 0
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const CategorySliderCards = ({ id, imageUrl, name, slug }: Category) => {
        return (
            // <Grid container>
            //     <Grid item lg={2} md={3} sm={4} xs={12}>
            <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px", }}>
                <NavLink to={slug} style={{ textDecoration: "inherit" }}>
                    <Link className='category-item-link'
                        sx={{
                            display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                            borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                            transition: "0.5s", textDecoration: "none", outline: 0,
                            "&:hover .category-name":
                                { color: theme.palette.primary.main, transition: ".5s" }
                        }}>
                        <Box className="category-box" sx={{
                            margin: "0 auto 16px", width: "60px", height: "60px",
                            background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                            borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                        }}>
                            <Box component="img" src={imageUrl} alt="name"
                                sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                        </Box>
                        <Typography className="category-name truncate-two-line"
                            sx={{
                                color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                overflow: "hidden"
                            }}>{name}</Typography>
                    </Link>
                </NavLink>
            </Box>
            //     </Grid>
            // </Grid>
        )
    }

    return (
        <Container maxWidth="lg" sx={{ py: "30px" }}>
            <Box className="main-slide-div" sx={{
                "&:hover button": { background: theme.palette.text.primary, color: theme.palette.text.primary }, "& button": {
                    background: theme.palette.text.primary, p: "12px", borderRadius: "10px", width: "43px", height: "43px",
                }, "& .slick-slider .slick-prev": { left: "-90px" }, "& .slick-slider .slick-next": { right: "-88px" },
                "& .slick-slider": { display: "flex", alignItems: "center", justifyContent: "center" },
                "& .slick-slider .slick-list": { width: "100%" }
            }}>
                <Slider {...settings}>

                    {
                        apiData.map((item) => {
                            const { id, imageUrl, name, slug } = item;
                            return (
                                <CategorySliderCards key={id} id={id} name={name} imageUrl={imageUrl} slug={slug} />
                            )
                        })
                    }

                    {/* <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 1</Typography>
                        </Link>
                    </Box>

                    <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 2</Typography>
                        </Link>
                    </Box>

                    <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 3</Typography>
                        </Link>
                    </Box>

                    <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 4</Typography>
                        </Link>
                    </Box>

                    <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 5</Typography>
                        </Link>
                    </Box>

                    <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 6</Typography>
                        </Link>
                    </Box>

                    <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 7</Typography>
                        </Link>
                    </Box>

                    <Box className="single-card-div" sx={{ width: "175px!important", pr: "20px" }}>
                        <Link className='category-item-link'
                            sx={{
                                display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                                borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                                transition: "0.5s", textDecoration: "none", outline: 0,
                                "&:hover .category-name":
                                    { color: theme.palette.primary.main, transition: ".5s" }
                            }}>
                            <Box className="category-box" sx={{
                                margin: "0 auto 16px", width: "60px", height: "60px",
                                background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                                borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Box component="img" src={TravelCategoryIcon} alt="name"
                                    sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                            </Box>
                            <Typography className="category-name truncate-two-line"
                                sx={{
                                    color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                                    fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                                    display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                                    overflow: "hidden"
                                }}>Travel 8</Typography>
                        </Link>
                    </Box> */}

                </Slider>
            </Box>
        </Container>
    )
}

export default CategorySlider


// export default class SwipeToSlide extends Component {


//     render() {
//         const settings = {
//             className: "center",
//             infinite: true,
//             centerPadding: "60px",
//             slidesToShow: 6,
//             swipeToSlide: true,
//             afterChange: function (index: number) {
//                 console.log(
//                     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
//                 );
//             }
//         };
//         return (
//             <Container maxWidth="lg">
//                 <Box className="main-slide-div" sx={{
//                     "&:hover button": { background: theme.palette.text.primary, color: theme.palette.text.primary }, "& button": {
//                         background: theme.palette.text.primary, p: "12px", borderRadius: "10px", width: "43px", height: "43px",
//                     }, "& .slick-slider .slick-prev": { left: "-90px" }, "& .slick-slider .slick-next": { right: "-88px" },
//                     "& .slick-slider": { display: "flex", alignItems: "center", justifyContent: "center" },
//                 }}>
//                     <h2>Swipe To Slide</h2>
//                     <Slider {...settings}>
//                         <Box className="single-card-div">
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                         <Box>
//                             <Typography>1</Typography>
//                         </Box>
//                     </Slider>
//                 </Box>
//             </Container>
//         );
//     }
// }