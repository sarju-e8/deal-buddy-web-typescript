import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import ButtonComp from './Button'

const BusinessOnDealBuddy = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{ py: "40px", pl: "77px!important", pr: "72px!important" }}>
                <Box className="list-business"
                    sx={{
                        display: "flex", justifyContent: "space-between", alignItems: "center",
                        border: "1px solid rgba(0,0,0,0.15)", borderRadius: "10px", padding: "18px 24px",
                        background: theme.palette.common.black, color: theme.palette.common.white,
                        position: "relative", zIndex: 1
                    }}>
                    <Typography component="h2" sx={{ fontSize: "20px", mb: 0, fontWeight: 700, lineHeight: "16.8px" }}>
                        List your business on dealbuddy</Typography>
                    <ButtonComp name='Get Started' customFontSize></ButtonComp>
                </Box>
            </Container>
        </>
    )
}

export default BusinessOnDealBuddy