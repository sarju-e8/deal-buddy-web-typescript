import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { howItsWorkBGI } from '../../assets/image_path'
import { theme } from '../../theme/theme'

const AreYouCustomer = () => {
    return (
        <>
            <Box className="banner"
                sx={{
                    backgroundImage: `url(${howItsWorkBGI})`, backgroundRepeat: "no-repeat",
                    backgroundPosition: "center", backgroundSize: "cover"
                }}
            >
                <Box className="banner-bg" sx={{
                    background: "rgba(15,15,15,.75)",
                }}>
                    <Container maxWidth="xl" className='banner-content' sx={{ py: "140px", px: "65px !important" }}>
                        <Box className="page-title-area" sx={{
                            color: theme.palette.common.white, padding: 0, position: "relative", zIndex: 1,
                            py: "40px", px: "0",
                        }}>
                            <Typography component="h1" sx={{
                                textAlign: "center", fontSize: theme.typography.h2.fontSize,
                                fontWeight: theme.typography.h2.fontWeight, lineHeight: theme.typography.h2.lineHeight
                            }}>
                                Are you a customer ?
                            </Typography>
                            <Typography sx={{ mt: "12px", opacity: ".95", mb: 0, ...theme.typography.body1 }}>
                                DealBuddy brings together the best savings and discounts, offering great value for shopping – online or in-store. The biggest problem we are trying to solve is providing real, working deals and coupons to you. We save the time and energy you spend hunting for deals over the internet. On DealBuddy, all deals and coupons are uploaded by actual retailers or our admin team and updated on a regular basis, which guarantees both the genuineness and functionality of coupons.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default AreYouCustomer