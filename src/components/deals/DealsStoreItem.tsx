import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIndividualStoreDetails } from '../../services/AllStoreApi';
import { storeIsActiveValueChange } from '../../redux/features/CategoryNameAndDiscSlice';
import { Box, Link, Typography } from '@mui/material';
import { theme } from '../../theme/theme';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

interface DealsStoreItemIProps {
    activeDealsCount: number;
    slug: string;
    imageUrl: string;
    name: string;
    website: string;
    phone: number;
    description: string;
    address: {
        city?: string;
        fillAddress: string;
        latitude?: number;
        longitude?: number;
    },
    storeModes: {
        name: string
    }[];
}

const DealsStoreItem = () => {
    const storeIsActive = useSelector((state: any) => state.categoryNameAndDesc.isActive);

    const [dealsStoreDetail, setDealsStoreDetail] = useState<DealsStoreItemIProps>();

    // const [storeName, setStoreName] = useState("");
    // const [description, setDescription] = useState("");
    // const [imageUrl, setImageUrl] = useState("");
    // const [activeDealsCount, setActiveDealsCount] = useState();
    // const [website, setWebsite] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [slug, setSlug] = useState("");
    // const [onlineOrInstore, setOnlineOrInstore] = useState("");

    const [readMore, setReadMore] = useState(false);


    const urlParams = useParams();
    const { urlStoreSlug } = urlParams;

    const dispatch = useDispatch();

    useEffect(() => {
        var individualStoreParams = {
            isActive: storeIsActive,
        }
        if (urlStoreSlug) {
            getIndividualStoreDetails(urlStoreSlug, individualStoreParams).then((res) => {
                dispatch(storeIsActiveValueChange(true));
                setDealsStoreDetail(res.data);

                // setStoreName(res.data.name);
                // setDescription(res.data.description);
                // setImageUrl(res.data.imageUrl);
                // setActiveDealsCount(res.data.activeDealsCount);
                // setWebsite(res.data.website);
                // setPhone(res.data.phone);
                // setAddress(res.data.address.fillAddress);
                // setSlug(res.data.slug);
                // setOnlineOrInstore(res.data.storeModes[0].name)
            });
        }
    }, [urlStoreSlug])

    // const StoreItemBoxs = ({ activeDealsCount, address, description, imageUrl, name, phone, slug, website }: DealsStoreItemIProps) => {
    //     return (
    //         <>
    //             <Box className="store-box"
    //                 sx={{
    //                     display: "flex", alignItems: "center", justifyContent: "space-between",
    //                     flexDirection: "row",
    //                 }} >
    //                 <Box className="store-details"
    //                     sx={{ display: "flex", alignItems: "center", flexDirection: "row", }}>
    //                     <Box className="store-img-div" sx={{ flexShrink: 0, mr: "16px" }}>
    //                         <Box component="img" alt={slug} src={imageUrl}
    //                             sx={{ objectFit: "contain", height: "90px", width: "90px", }} />
    //                     </Box>
    //                     <Box className="store-title-div" >
    //                         <Typography className="store-title" sx={{ fontSize: theme.typography.cardSubtitle, mb: "8px", }}>
    //                             {`Deals from ${name}`}
    //                         </Typography>
    //                         <Box className="store-address" sx={{
    //                             display: "flex", alignItems: "flex-start",
    //                             fontSize: theme.typography.body2,
    //                         }}>
    //                             <LocationOnOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
    //                             <Typography>{address.fillAddress}</Typography>
    //                         </Box>
    //                         <Box className="store-active-deals" sx={{
    //                             display: "flex", alignItems: "flex-start", fontSize: theme.typography.body2, mt: "8px"
    //                         }}>
    //                             <LocalOfferOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
    //                             <Typography>{activeDealsCount} active deal</Typography>
    //                         </Box>
    //                         <Box className="store-contact" sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
    //                             <Box className="phone-number-div"
    //                                 sx={{ display: "flex", alignItems: "center", fontSize: theme.typography.body2, pr: "48px" }}>
    //                                 <PhoneInTalkOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
    //                                 <Typography sx={{ mb: 0 }}>{phone}</Typography>
    //                             </Box>
    //                             <Link href={website} target="_blank" className="store-website"
    //                                 sx={{
    //                                     display: "flex", alignItems: "center", color: "inherit",
    //                                     transition: ".5s", textDecoration: "none", outline: 0, cursor: "pointer",
    //                                 }}>
    //                                 <LanguageOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
    //                                 <Typography className="website-url" sx={{ fontSize: theme.typography.body2, mb: 0 }}>
    //                                     {website}
    //                                 </Typography>
    //                             </Link>
    //                         </Box>
    //                     </Box>
    //                 </Box>
    //                 <Link href="#" className="map-btn"
    //                     sx={{
    //                         bgcolor: theme.palette.primary.main, display: "flex", alignItems: "center",
    //                         alignSelf: "flex-end", padding: "10px", borderRadius: "10px", cursor: "pointer",
    //                         ml: "16px"
    //                     }}>
    //                     <NearMeOutlinedIcon sx={{ color: theme.palette.common.white, fontSize: "20px" }} />
    //                 </Link>
    //             </Box>

    //             <Box className="store-description"
    //                 sx={{ mt: "8px", fontSize: theme.typography.body2, }}>
    //                 <Typography>{description}</Typography>
    //             </Box>
    //         </>
    //     )
    // }

    const navigateAddress = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();
        let addressParams = "/?q=" + encodeURIComponent(dealsStoreDetail?.address?.fillAddress)
        if (dealsStoreDetail?.address?.latitude && dealsStoreDetail?.address?.longitude) {
            addressParams = '?q=' + dealsStoreDetail?.address?.latitude + ',' + dealsStoreDetail?.address?.longitude;
        }
        window.open('https://maps.google.com' + addressParams, '_blank')
    }, []);

    return (
        <>
            <Box className="store-item" sx={{
                width: "98%", height: "auto", display: "block", background: theme.palette.common.white,
                border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "14px",
            }}>
                {/* {
                    dealsStoreDetail && dealsStoreDetail.map((item) => {
                        const { activeDealsCount, address, description, imageUrl, name, phone, slug, website } = item;
                        return (
                            <StoreItemBoxs activeDealsCount={activeDealsCount} slug={slug} imageUrl={imageUrl}
                                name={name} website={website} phone={phone} description={description} address={address} />
                        )
                    })
                } */}

                <Box className="store-box"
                    sx={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        flexDirection: "row",
                    }} >
                    <Box className="store-details"
                        sx={{ display: "flex", alignItems: "center", flexDirection: "row", }}>
                        <Box className="store-img-div" sx={{ flexShrink: 0, mr: "16px" }}>
                            <Box component="img" alt={dealsStoreDetail?.slug} src={dealsStoreDetail?.imageUrl}
                                sx={{ objectFit: "contain", height: "90px", width: "90px", }} />
                        </Box>
                        <Box className="store-title-div" sx={{}}>
                            <Typography className="store-title" sx={{ fontSize: theme.typography.cardSubtitle, mb: "8px", }}>
                                {/* {`Deals From ${storeName}`} */}
                                {`Deals From ${dealsStoreDetail?.name}`}

                            </Typography>
                            <Box className="store-address" sx={{
                                display: "flex", alignItems: "flex-start",
                                fontSize: theme.typography.body2,
                            }}>
                                <LocationOnOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
                                <Typography sx={{ fontSize: theme.typography.body2 }}>
                                    {
                                        dealsStoreDetail?.storeModes[0].name === "Online" ? "Online Store" : dealsStoreDetail?.address?.fillAddress
                                    }
                                </Typography>
                            </Box>
                            <Box className="store-active-deals" sx={{
                                display: "flex", alignItems: "flex-start", fontSize: theme.typography.body2, mt: "8px"
                            }}>
                                <LocalOfferOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
                                <Typography sx={{ fontSize: theme.typography.body2 }}>
                                    {
                                        dealsStoreDetail?.activeDealsCount === 0 ? `No active deals` :
                                            `${dealsStoreDetail?.activeDealsCount} active deals`
                                    }
                                </Typography>
                            </Box>
                            <Box className="store-contact" sx={{ display: "flex", alignItems: "center", mt: "8px" }}>
                                {
                                    dealsStoreDetail?.phone === null ? <></> :
                                        <Box className="phone-number-div"
                                            sx={{ display: "flex", alignItems: "center", fontSize: theme.typography.body2, pr: "48px" }}>
                                            <PhoneInTalkOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
                                            <Typography sx={{ mb: 0, fontSize: theme.typography.body2 }}>
                                                {/* {phone} */}
                                                {dealsStoreDetail?.phone}
                                            </Typography>
                                        </Box>
                                }

                                {
                                    dealsStoreDetail?.website === null ? <></> :
                                        <Link href={dealsStoreDetail?.website} target="_blank" className="store-website"
                                            sx={{
                                                display: "flex", alignItems: "center", color: "inherit",
                                                transition: ".5s", textDecoration: "none", outline: 0, cursor: "pointer",
                                            }}>
                                            <LanguageOutlinedIcon sx={{ fontSize: "22px", pr: "8px", color: theme.palette.text.primary }} />
                                            <Typography className="website-url" sx={{ fontSize: theme.typography.body2, mb: 0 }}>
                                                {dealsStoreDetail?.website}
                                            </Typography>
                                        </Link>
                                }
                            </Box>
                        </Box>
                    </Box>
                    {
                        dealsStoreDetail?.storeModes[0].name === "In Store" ?
                            <Link onClick={navigateAddress} className="map-btn"
                                sx={{
                                    bgcolor: theme.palette.primary.main, display: "flex", alignItems: "center",
                                    alignSelf: "flex-end", padding: "10px", borderRadius: "10px", cursor: "pointer",
                                    ml: "16px"
                                }}>
                                <NearMeOutlinedIcon sx={{ color: theme.palette.common.white, fontSize: "20px" }} />
                            </Link>
                            : <></>
                    }

                </Box>

                <Box className="store-description"
                    sx={{ mt: "8px", fontSize: theme.typography.body2, }}>
                    <Typography sx={{ fontSize: theme.typography.body2 }}>
                        {/* {description} */}
                        {readMore ? dealsStoreDetail?.description : `${dealsStoreDetail?.description.substring(0, 150)}...`}
                        <Link sx={{ textDecoration: "none", cursor: "pointer", display: "block", transition: "0.5s" }}
                            className='btn' onClick={() => setReadMore(!readMore)}>
                            {readMore ? "Read Less" : "Read More"}
                        </Link>
                    </Typography>
                </Box>
            </Box >
        </>
    )
}

export default DealsStoreItem