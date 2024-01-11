import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'

const GetTheDealTitle = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box className="deals-finest-title">
                    <Typography sx={{ ...theme.typography.h3, mb: "24px", pb: "6px", }}>
                        Get the finest deals on everything with exciting discounts and coupon codes
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default GetTheDealTitle