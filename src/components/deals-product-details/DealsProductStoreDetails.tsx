import { Box, Link, Typography } from '@mui/material'
import React, { useState } from 'react'
import { theme } from '../../theme/theme'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { storePageNumber } from '../../redux/features/dealModeSlice';

const DealsProductStoreDetails = () => {

    const storeDetails = useSelector((state: any) => state.DealsProductDetails.individualDealProductDetail);
    const storeData = storeDetails?.stores?.[0];
    console.log("storedata", storeData)

    const [readMore, setReadMore] = useState(false);

    const [showAllText, setShowAllText] = useState(false);

    const dispatch = useDispatch();

    // const testString = storeData?.description;
    // const resultArray = testString.split(" ");
    // const arr1 = resultArray.slice(0, 35).join(" ");
    // const arr2 = resultArray.slice(35).join(" ");
    return (
        <>
            {
                storeDetails?.stores && storeData?.showInFrontend ?
                    <Box className="product-store-container" sx={{ pl: "85px", width: "85%" }}>
                        <Box className="product-store-details" sx={{
                            my: "20px", padding: "20px 16px",
                            border: "1px solid rgba(0,0,0,.15)", borderRadius: "10px",
                        }}>
                            <Typography className="store-title" sx={{
                                m: 0, fontSize: theme.typography.cardSubtitle.fontSize,
                                fontWeight: "400", lineHeight: "25px", textAlign: "center", pb: "6px"
                            }}>
                                Store</Typography>

                            <Box className="store-details"
                                sx={{ borderTop: `1px solid ${theme.palette.grey[300]}`, pb: "8px", pt: "16px" }}>

                                {
                                    storeData?.name && storeData?.showInFrontend ?
                                        <Box className="item-details" sx={{ display: "flex", mb: "12px" }}>
                                            <StorefrontOutlinedIcon sx={{
                                                color: theme.palette.text.primary, mr: "12px",
                                                fontSize: "22px", lineHeight: "16px", fontWeight: 400
                                            }} />
                                            <NavLink to={`/stores/${storeData?.slug}`} onClick={() => dispatch(storePageNumber(1))} style={{ textDecoration: "inherit" }}>
                                                <Link className="truncate" sx={{
                                                    cursor: "pointer", textDecoration: "none", color: theme.palette.common.black,
                                                    "&:hover": { color: theme.palette.text.primary, transition: ".5s", },
                                                    width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                                                }}>
                                                    {storeData?.name}
                                                </Link>
                                            </NavLink>
                                        </Box>
                                        : <></>
                                }


                                <Box className="item-details-location" sx={{ display: "flex", mb: "12px" }}>
                                    <FmdGoodOutlinedIcon sx={{
                                        color: theme.palette.text.primary, mr: "12px",
                                        fontSize: "22px", lineHeight: "16px", fontWeight: 400
                                    }} />
                                    <Typography className="location" sx={{
                                        color: theme.palette.common.black,
                                        // "&:hover": { color: theme.palette.text.primary, transition: ".5s", },
                                        // width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                                    }}>
                                        {/* {storeData?.address?.fillAddress} */}
                                        {storeData?.storeModes[0].name === "Online" ? "Online Store" : storeData?.address?.fillAddress}
                                    </Typography>
                                </Box>

                                {
                                    storeData?.phone === null ? <></> :
                                        <Box className="item-details-phone" sx={{ display: "flex", mb: "12px" }}>
                                            <PhoneInTalkOutlinedIcon sx={{
                                                color: theme.palette.text.primary, mr: "12px",
                                                fontSize: "22px", lineHeight: "16px", fontWeight: 400
                                            }} />
                                            <Typography className="phone" sx={{
                                                color: theme.palette.common.black,
                                                // "&:hover": { color: theme.palette.text.primary, transition: ".5s", },
                                                // width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                                            }}>
                                                {storeData?.phone}
                                            </Typography>
                                        </Box>
                                }


                                <Box className="item-details-website" sx={{ display: "flex", mb: "12px" }}>
                                    <LanguageOutlinedIcon sx={{
                                        color: theme.palette.text.primary, mr: "12px",
                                        fontSize: "22px", lineHeight: "16px", fontWeight: 400
                                    }} />
                                    <Link href={storeData?.website} target="_blank" className="phone" sx={{
                                        cursor: "pointer", textDecoration: "none", color: theme.palette.common.black,
                                        "&:hover": { color: theme.palette.text.primary, transition: ".5s", },
                                        // width: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
                                    }}>
                                        <Typography> {storeData?.website}</Typography>
                                    </Link>
                                </Box>

                                <Box className="store-description"
                                    sx={{ mt: "16px", fontSize: theme.typography.body1, height: "auto" }}>
                                    <Typography sx={{ fontSize: theme.typography.body1 }}>
                                        {/* {storeData?.description} */}
                                        {readMore ? storeData?.description : `${storeData?.description.substring(0, 150)}...`}
                                        <Link sx={{ mt: "8px", textDecoration: "none", cursor: "pointer", display: "block", transition: "0.5s" }}
                                            className='btn' onClick={() => setReadMore(!readMore)}>
                                            {readMore ? "Read Less" : "Read More"}
                                        </Link>
                                    </Typography>

                                    {/* <Typography sx={{ fontSize: theme.typography.body1 }}>
                                        {
                                            resultArray.length > 35
                                                ? showAllText
                                                    ? `${arr1} ${arr2}`
                                                    : `${arr1}...`
                                                : testString
                                        }
                                    </Typography>

                                    <Typography
                                        onClick={() => setShowAllText(!showAllText)}
                                        sx={{
                                            fontSize: theme.typography.body1,
                                            color: theme.palette.text.primary,
                                            cursor: "pointer",
                                            // mt: { xl: "0.5rem" },
                                        }}
                                    >
                                        {showAllText ? "Read Less" : "Read More"}
                                    </Typography> */}
                                </Box>
                            </Box>


                        </Box>


                    </Box >
                    : <></>
            }
        </>
    )
}

export default DealsProductStoreDetails