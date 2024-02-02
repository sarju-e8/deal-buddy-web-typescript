import { Box, Button, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import ButtonComp from '../common-components/Button'
import { TiSocialFacebook } from "react-icons/ti";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { RiMailSendLine } from "react-icons/ri";
import { useSelector } from 'react-redux';

const DealsProductDetailsSidebar = () => {
    const dealProductStoreDetails = useSelector((state: any) => state.DealsProductDetails.individualDealProductDetail);

    const [productRemainingDays, setProductRemainingDays] = useState(0);
    const [productRemainingHour, setProductRemainingHour] = useState(0);
    const [productRemainingMinutes, setProductRemainingMinutes] = useState(0);
    const [productRemainingSeconds, setProductRemainingSeconds] = useState(0);

    const SaleImage = "https://www.dealbuddy.co.nz/assets/img/sale.png?v=1";
    const CouponImage = "https://www.dealbuddy.co.nz/assets/img/coupon.png?v=1";

    let timeLeft = dealProductStoreDetails?.remainingDuration;
    console.log(dealProductStoreDetails)

    const secondsToDhms = (timeLeft) => {
        timeLeft = Number(timeLeft)
        var daysLeft = Math.floor(timeLeft / (3600 * 24))
        var hourLeft = Math.floor((timeLeft % (3600 * 24)) / 3600)
        var minuteLeft = Math.floor((timeLeft % 3600) / 60)
        var secondLeft = Math.floor(timeLeft % 60)
        // console.log(d, h, m, s)
        var dDisplay = daysLeft > 0 ? daysLeft + (daysLeft == 1 ? " day, " : " days, ") : ""
        var hDisplay = hourLeft > 0 ? hourLeft + (hourLeft == 1 ? " hour, " : " hours, ") : ""
        var mDisplay = minuteLeft > 0 ? minuteLeft + (minuteLeft == 1 ? " minute, " : " minutes, ") : ""
        var sDisplay = secondLeft > 0 ? secondLeft + (secondLeft == 1 ? " second" : " seconds") : ""

        setProductRemainingDays(daysLeft);
        setProductRemainingHour(hourLeft);
        setProductRemainingMinutes(minuteLeft);
        setProductRemainingSeconds(secondLeft);

        // return dDisplay + hDisplay + mDisplay + sDisplay

    }

    useEffect(() => {
        console.log(secondsToDhms(timeLeft));
        console.log('days', productRemainingDays);
        console.log('hour', productRemainingHour);
        console.log('minutes', productRemainingMinutes);
        console.log('seconds', productRemainingSeconds);
        if (timeLeft > 0) {
            const interval = setInterval(() => {
                secondsToDhms(timeLeft);
                timeLeft = timeLeft - 1;
            }, 1000);
            return () => clearInterval(interval);
        }
        // secondsToDhms(seconds);
        // const interval = setInterval(() => {
        //     secondsToDhms(seconds);
        // }, 1000);
        // return () => clearInterval(interval);

    }, [timeLeft])

    const style = {
        tagLink: {
            cursor: "pointer", mr: "16px", mb: "16px", height: "36px", width: "36px", borderRadius: "50%",
            display: "flex", alignItems: "center", justifyContent: "center"
        },
        tagColor: {
            color: "white"
        }
    }
    return (
        <>
            <Box className="product-sidebar" sx={{ pl: "85px", width: "85%" }}>
                <Box className="product-detail-sidebar" sx={{
                    py: "30px", textAlign: "center",
                    border: "1px solid rgba(0,0,0,.15)", borderRadius: "10px",
                }}>
                    <Box className="product-category-store-div">
                        <Box className="product-item-type" sx={{
                            padding: "4px 20px 20px", display: "flex",
                            justifyContent: "center"
                        }}>
                            {

                                <Box component={"img"}
                                    src={dealProductStoreDetails?.productType === 'sale' ? SaleImage : CouponImage}
                                    alt='name'
                                    sx={{ height: "24px", objectFit: "cover", mr: "12px" }} />
                            }
                            <Typography sx={{
                                fontSize: theme.typography.subtitle1,
                                color: theme.palette.grey[500],
                                textTransform: 'uppercase', letterSpacing: "1px"
                            }}>
                                {/* {`
                                    ${dealProductStoreDetails?.category?.name} - 
                                    ${dealProductStoreDetails?.productType} - 
                                    ${dealProductStoreDetails?.productModes?.[0]?.name} -
                                    ${dealProductStoreDetails?.productModes?.[1]?.name}
                                `} */}
                                {
                                    `${dealProductStoreDetails?.category?.name} -
                                    ${dealProductStoreDetails?.productType} - `
                                }
                                {
                                    dealProductStoreDetails?.productModes?.[0] &&

                                    `${dealProductStoreDetails?.productModes?.[0]?.name} `
                                }
                                {
                                    dealProductStoreDetails?.productModes?.[1] &&

                                    `- ${dealProductStoreDetails?.productModes?.[1]?.name}`
                                }
                            </Typography>
                        </Box>
                    </Box>

                    <Typography sx={{ fontSize: theme.typography.h4, px: "10px", mb: "8px" }}>{dealProductStoreDetails?.name}</Typography>

                    <Box className="buy-now-btn" sx={{
                        padding: "20px 30px",
                        borderBottom: `1px solid ${theme.palette.grey[300]}`,
                    }}>
                        <ButtonComp name={'Get Deal'} sx={{ width: "100%" }} />
                    </Box>

                    <Box className="product-value" sx={{
                        display: "flex", justifyContent: "space-around",
                        padding: "20px 20px 14px", borderBottom: `1px solid ${theme.palette.grey[300]}`,
                    }}>
                        <Box className="clicks-value-div">
                            <Typography sx={{
                                mb: "6px", textAlign: "center",
                                fontSize: theme.typography.paragraph
                            }}>Clicks</Typography>
                            <Typography sx={{
                                mb: "6px", textAlign: "center",
                                fontSize: theme.typography.paragraph
                            }}>{dealProductStoreDetails?.clicks}</Typography>
                        </Box>
                    </Box>

                    <Box className="offer-timer"
                        sx={{
                            padding: "20px",
                            borderBottom: `1px solid ${theme.palette.grey[300]}`
                        }}>
                        <Typography sx={{ fontSize: theme.typography.paragraph, mb: "16px" }}>Time Left - Limited Offer!</Typography>
                        <Box className="timer-box-container"
                            sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                            <Box sx={{
                                display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
                                width: "70px", height: "70px", margin: "5px",
                                background: theme.palette.grey[200]
                            }}>{productRemainingDays}
                                <Box component={"span"}>
                                    Days
                                </Box>
                            </Box>

                            <Box sx={{
                                display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
                                width: "70px", height: "70px", margin: "5px",
                                background: theme.palette.grey[200]
                            }}>{productRemainingHour}
                                <Box component={"span"}>
                                    Hours
                                </Box>
                            </Box>

                            <Box sx={{
                                display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
                                width: "70px", height: "70px", margin: "5px",
                                background: theme.palette.grey[200]
                            }}>{productRemainingMinutes}
                                <Box component={"span"}>
                                    Minutes
                                </Box>
                            </Box>

                            <Box sx={{
                                display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
                                width: "70px", height: "70px", margin: "5px",
                                background: theme.palette.grey[200]
                            }}>{productRemainingSeconds}
                                <Box component={"span"}>
                                    Seconds
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box className="share-btn" sx={{ pt: "20px" }}>
                        {/* <Link>
                            <FacebookOutlinedIcon sx={{
                                // width: "36px", height: "36px", mb: "16px", mr: "16px",
                                // background: "#4267B2", cursor: "pointer", borderRadius: "50%", color: "white"
                                // color: "#4267B2", backgroundColor: "4267B2", borderRadius: "50%"
                            }} />
                        </Link>
                        <Link>
                            <TwitterIcon sx={{
                                // width: "36px", height: "36px", mb: "16px", mr: "16px",
                                // background: "#00acee", cursor: "pointer", borderRadius: "50%", color: "white",
                                // padding: "0px"
                                // backgroundColor: "#00acee", color:"white", borderRadius: "50%"
                            }} />
                        </Link>
                        <Link>
                            <LinkedInIcon sx={{
                                // width: "36px", height: "36px", mb: "16px", mr: "16px",
                                // background: "#006fa6", cursor: "pointer", borderRadius: "50%", 
                            }} />
                        </Link>
                        <Link>
                            <EmailIcon sx={{
                                // width: "36px", height: "36px", mb: "16px", mr: "16px",
                                // background: "#FF961C", cursor: "pointer", borderRadius: "50%", color: "white"
                            }} />
                        </Link>
                        <Link>
                            <WhatsAppIcon sx={{
                                // width: "36px", height: "36px", mb: "16px", mr: "16px",
                                // background: "#25D366", cursor: "pointer", borderRadius: "50%", color: "white"
                            }} />
                        </Link> */}
                        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Link href="https://www.facebook.com/" target="_blank" sx={{ ...style.tagLink, backgroundColor: "#4267B2", }}>
                                <FaFacebookF style={{ ...style.tagColor }} />
                            </Link>
                            <Link href="https://twitter.com/" target="_blank" sx={{ ...style.tagLink, backgroundColor: "#00acee", }}>
                                <FaTwitter style={{ ...style.tagColor }} />
                            </Link>
                            <Link href="https://www.linkedin.com/" target="_blank" sx={{ ...style.tagLink, backgroundColor: "#006fa6", }}>
                                <FaLinkedinIn style={{ ...style.tagColor }} />
                            </Link>
                            <Link href="mailto:name@gmail.com" target="_blank" sx={{ ...style.tagLink, backgroundColor: "#FF961C", }}>
                                <RiMailSendLine style={{ ...style.tagColor }} />
                            </Link>
                            <Link href="https://web.whatsapp.com/" target="_blank" sx={{ ...style.tagLink, backgroundColor: "#25D366", }}>
                                <FaWhatsapp style={{ ...style.tagColor }} />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DealsProductDetailsSidebar