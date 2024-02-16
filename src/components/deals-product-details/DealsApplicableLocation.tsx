import { Box, Link, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { theme } from '../../theme/theme'
import { useSelector } from 'react-redux';

const DealsApplicableLocation = () => {
    const locationDetails = useSelector((state: any) => state.DealsProductDetails.individualDealProductDetail);
    const locationData = useMemo(() => {
        return locationDetails.locations;
    }, [locationDetails]);

    return (
        <>
            <Box className="product-store-address-container" sx={{ pl: "85px", width: "85%" }}>
                <Box className="product-store-address" sx={{
                    my: "20px", padding: "20px 16px",
                    border: "1px solid rgba(0,0,0,.15)",
                    borderRadius: "10px",
                }}>
                    <Typography className="product-store-address-title" sx={{
                        m: 0, fontSize: theme.typography.cardSubtitle.fontSize,
                        fontWeight: "400", lineHeight: "25px", textAlign: "center", pb: "6px"
                    }}>Applicable Locations</Typography>

                    <Box className="applicable-address-names" sx={{
                        borderTop: `1px solid ${theme.palette.grey[300]}`, pb: "8px", pt: "16px"
                    }} >
                        <Link href="#" className='badge' sx={{
                            padding: "8px 12px", margin: "4px 8px",
                            // backgroundColor: theme.palette.grey[400],
                            backgroundColor: "rgba(248, 249, 250, 1)",
                            cursor: "pointer", textDecoration: "none",
                            borderRadius: "100px",
                            display: "inline-block", textAlign: "center", whiteSpace: "nowrap",
                            verticalAlign: "baseline",
                        }}><Typography sx={{ color: theme.palette.common.black, fontSize: "12px", fontWeight: 700, }}>
                                {/* {locationData?.[0]?.location} */}
                                {
                                    locationDetails?.NZWide ? `NZ Wide` :

                                        locationData && locationData?.map((item) => {
                                            const { location } = item;

                                            return (
                                                location
                                            )
                                        })
                                }
                                {/* {
                                    locationData && locationData?.map((item) => {
                                        const { location } = item;

                                        return (
                                            location
                                        )
                                    })} */}
                            </Typography>
                        </Link>

                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DealsApplicableLocation