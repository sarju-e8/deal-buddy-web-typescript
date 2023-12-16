import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const DealsCouponsTitle = () => {
    return (
        <Container maxWidth="lg" sx={{ py: "40px" }}>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", ml: "-18px" }}>
                <Typography sx={{ fontSize: "30px", fontWeight: 600, lineHeight: "38px" }}>Find the best deals and coupons near you</Typography>
            </Box>
        </Container>
    )
}

export default DealsCouponsTitle