import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import { useSelector } from 'react-redux'

const GetTheDealTitle = () => {
    const storePageTitle = useSelector((state: any) => state.categoryNameAndDesc.pageTitle);
    const storePageDescription = useSelector((state: any) => state.categoryNameAndDesc.description);
    const storeIsActive = useSelector((state: any) => state.categoryNameAndDesc.isActive);

    return (
        <>
            <Container maxWidth="lg">
                <Box className="deals-finest-title">
                    <Typography sx={{ ...theme.typography.h3, pb: "6px", }}>
                        {/* Get the finest deals on everything with exciting discounts and coupon codes */}
                        {storePageTitle}
                    </Typography>
                    <Typography sx={{ ...theme.typography.paragraph, mb: "20px" }}>
                        {storePageDescription}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default GetTheDealTitle