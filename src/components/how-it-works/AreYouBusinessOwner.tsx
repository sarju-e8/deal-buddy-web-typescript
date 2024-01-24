import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'

const AreYouBusinessOwner = () => {
    return (
        <Container maxWidth="lg">
            <Box className="business-owner-title"
                sx={{ textAlign: "center", position: "relative", zIndex: 1, py: "40px" }}>
                <Typography component="h1" sx={{ ...theme.typography.h2 }}>
                    Are you a business owner?
                </Typography>
                <Typography sx={{ mt: "12px", opacity: 0.95, ...theme.typography.paragraph }}>
                    We’re dedicated to delivering innovative promotional media solutions including coupons, codes and cashback offers to help you achieve your goals and help customers save more of their hard-earned money.
                </Typography>
            </Box>
        </Container>
    )
}

export default AreYouBusinessOwner