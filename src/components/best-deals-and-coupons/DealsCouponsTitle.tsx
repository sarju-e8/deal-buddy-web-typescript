import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'

const DealsCouponsTitle = () => {
    return (
        <Container maxWidth="lg" sx={{ py: "40px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", ml: "-18px" }}>
                <Typography sx={{ ...theme.typography.h2 }}>Find the best deals and coupons near you</Typography>
            </Box>
        </Container >
    )
}

export default DealsCouponsTitle