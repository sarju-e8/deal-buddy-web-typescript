import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { theme } from '../../theme/theme'

const style = {
    gridPadding: {
        px: "12px",
    },
    iconFontSize: {
        fontSize: "40px",
    },
}

const WhyShouldYouAdd = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{py:"40px"}}>
                <Box className="business-owner-title"
                    sx={{ textAlign: "center", position: "relative", zIndex: 1, py: "40px" }}>
                    <Typography component="h1" sx={{ ...theme.typography.h2 }}>
                        Why should you add your businesses on dealbuddy?
                    </Typography>
                    <Typography sx={{ mt: "12px", opacity: 0.95, ...theme.typography.paragraph }}>
                        A cost-effective platform connecting local businesses with local customers
                    </Typography>
                </Box>
                <Box className="row">
                    <Grid container>
                        <Grid item lg={4} md={3} sm={2} xs={12} sx={{ ...style.gridPadding }}>
                            <Box className="totally-free-card"
                                sx={{
                                    display: "flex", border: "1px solid rgba(0,0,0,0.15)", padding: "14px",
                                    borderRadius: "10px", background: theme.palette.common.white, alignItems: "center",
                                }}>
                                <Box className="img-icon" sx={{
                                    background: theme.palette.primary.main, borderRadius: "6px", height: "60px", width: "60px",
                                    display: "flex", alignItems: "center", justifyContent: "center", mr: "16px"
                                }}>
                                    <MonetizationOnIcon sx={{ ...style.iconFontSize, color: theme.palette.common.white, maxWidth: "100%", height: "auto" }} />
                                </Box>
                                <Box className="contact-desc">
                                    <Typography component="h3" sx={{ ...theme.typography.subtitle1 }}>Totally Free</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={3} sm={2} xs={12} sx={{ ...style.gridPadding }}>
                            <Box className="totally-free-card"
                                sx={{
                                    display: "flex", border: "1px solid rgba(0,0,0,0.15)", padding: "14px",
                                    borderRadius: "10px", background: theme.palette.common.white, alignItems: "center",
                                }}>
                                <Box className="img-icon" sx={{
                                    background: theme.palette.primary.main, borderRadius: "6px", height: "60px", width: "60px",
                                    display: "flex", alignItems: "center", justifyContent: "center", mr: "16px"
                                }}>
                                    <ThumbUpIcon sx={{ ...style.iconFontSize, color: theme.palette.common.white, maxWidth: "100%", height: "auto" }} />
                                </Box>
                                <Box className="contact-desc">
                                    <Typography component="h3" sx={{ ...theme.typography.subtitle1 }}>Easy sign up, no contract</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={3} sm={2} xs={12} sx={{ ...style.gridPadding }}>
                            <Box className="totally-free-card"
                                sx={{
                                    display: "flex", border: "1px solid rgba(0,0,0,0.15)", padding: "14px",
                                    borderRadius: "10px", background: theme.palette.common.white, alignItems: "center",
                                }}>
                                <Box className="img-icon" sx={{
                                    background: theme.palette.primary.main, borderRadius: "6px", height: "60px", width: "60px",
                                    display: "flex", alignItems: "center", justifyContent: "center", mr: "16px"
                                }}>
                                    <FmdGoodIcon sx={{ ...style.iconFontSize, color: theme.palette.common.white, maxWidth: "100%", height: "auto" }} />
                                </Box>
                                <Box className="contact-desc">
                                    <Typography component="h3" sx={{ ...theme.typography.subtitle1 }}>Geo-targeted, hyperlocal</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default WhyShouldYouAdd