import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'

const LearnMore = () => {
    return (
        <>
            <Container maxWidth="xl">
                <Box className="earn-commison-main-container-div" sx={{ px: "60px" }}>
                    <Typography className='learn-more-description'
                        sx={{
                            border: "1px dashed rgba(0, 0, 0, 0.15)", boxSizing: "border-box", borderRadius: "10px",
                            padding: "12px 0", margin: "0 0 30px", fontSize: "14px", color: theme.palette.text.secondary, textAlign: "center"
                        }}>
                        When you buy through links on dealbuddy, we may earn a commission.
                        <Link href="#" className='learn-more-link' sx={{
                            color: theme.palette.text.primary, textDecoration: "none",
                        }}> Learn More</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default LearnMore