import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import { businessBriefcaseIcon, dealsCouponIcon, storeIcon } from '../../assets/image_path'
import { BusinessWorks } from '../../@types/BusinessWorks'

const style = {
    steps: {
        color: theme.palette.text.primary, fontSize: "20px",
        fontWeight: 500, lineHeight: "30px", py: "10px"
    },
}

const BusinessHowItWorks = () => {

    const businessWorksData: BusinessWorks[] = [
        {
            id: 1,
            name: "Sign up and add your business",
            desc: "Sign up as a user then navigate to 'Add your business' and fill in some basic details about your registered NZ business.",
            icon: businessBriefcaseIcon,
            stepCount: "Step 1"
        },
        {
            id: 2,
            name: "Create your store (s)",
            desc: "Setup your online or physical store profile, enter website or address details and upload a logo.",
            icon: storeIcon,
            stepCount: "Step 2"
        },
        {
            id: 3,
            name: "Upload your deal (s)",
            desc: "Add your special deal by adding details of the deal, enter a start and an end date and upload image(s) of the deal.",
            icon: dealsCouponIcon,
            stepCount: "Step 3"
        }
    ]

    const BusinessWorkCards = ({ id, desc, icon, name, stepCount }: BusinessWorks) => {
        return (
            <Grid item lg={4} md={6} sm={12} sx={{ px: "12px", }}>
                <Box className="find-offers-card"
                    sx={{
                        display: "flex", height: "90%", flexDirection: "column", alignItems: "center",
                        textAlign: "center", background: theme.palette.common.white,
                        border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px",
                    }}>
                    <Box className="find-offer-card-img"
                        sx={{
                            flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
                            height: "80px", width: "80px", mb: "16px", borderRadius: "10px",
                            background: theme.palette.background.default
                        }}>
                        <Box component='img' src={icon} sx={{ fontSize: "26px", color: theme.palette.common.white }} />
                    </Box>
                    <Box className="step-div">
                        <Typography className="step" sx={{
                            ...style.steps
                        }}>{stepCount}</Typography>
                    </Box>

                    <Box className="find-offer-card-content">
                        <Typography component='h3' sx={{ ...theme.typography.subtitle1, mb: "8px" }}>
                            {name}</Typography>
                        <Typography sx={{ ...theme.typography.body2 }}>
                            {desc}
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        )
    }

    return (
        <>
            <Box className="find-offers-div" sx={{ background: theme.palette.background.paper }}>
                <Container maxWidth="xl" sx={{ pt: "40px", pb: "60px" }}>
                    <Box className="find-offer-page-title" sx={{ textAlign: "center", pt: 0, pb: "40px" }}>
                        <Typography component="h1" sx={{ ...theme.typography.h2, position: "relative", zIndex: 1, }}>
                            How it works ?</Typography>
                        <Typography sx={{ mt: "12px", opacity: .95 }}>Dealbuddy is a one stop shop for local deals and coupons</Typography>
                    </Box>

                    <Grid maxWidth="xl" container sx={{ pl: "45px", pr: "40px" }}>
                        {/* <Grid item lg={4} md={6} sm={12} sx={{ px: "12px" }}>
                            <Box className="find-offers-card"
                                sx={{
                                    display: "flex", height: "auto", flexDirection: "column", alignItems: "center",
                                    textAlign: "center", background: theme.palette.common.white,
                                    border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px"
                                }}>
                                <Box className="find-offer-card-img"
                                    sx={{
                                        flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
                                        height: "80px", width: "80px", mb: "16px", borderRadius: "10px",
                                        background: theme.palette.background.default
                                    }}>
                                    <Box component='img' src={businessBriefcaseIcon} sx={{ fontSize: "26px", color: theme.palette.common.white }} />
                                </Box>
                                <Box className="step-div">
                                    <Typography className="step" sx={{
                                        ...style.steps
                                    }}>Step 1</Typography>
                                </Box>

                                <Box className="find-offer-card-content">
                                    <Typography component='h3' sx={{ ...theme.typography.subtitle1, mb: "8px" }}>
                                        Sign up and add your business</Typography>
                                    <Typography sx={{ ...theme.typography.body2 }}>
                                        Sign up as a user then navigate to 'Add your business' and fill in some basic details about your registered NZ business.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} sx={{ px: "12px" }}>
                            <Box className="find-offers-card"
                                sx={{
                                    display: "flex", height: "auto", flexDirection: "column", alignItems: "center",
                                    textAlign: "center", background: theme.palette.common.white,
                                    border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px"
                                }}>
                                <Box className="find-offer-card-img"
                                    sx={{
                                        flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
                                        height: "80px", width: "80px", borderRadius: "10px",
                                        background: theme.palette.background.default
                                    }}>
                                    <Box component="img" src={storeIcon} sx={{ fontSize: "26px", color: theme.palette.common.white }} />
                                </Box>
                                <Box className="step-div">
                                    <Typography className="step" sx={{
                                        ...style.steps
                                    }}>Step 2</Typography>
                                </Box>

                                <Box className="find-offer-card-content">
                                    <Typography component='h3' sx={{ ...theme.typography.subtitle1 }}>
                                        Create your store (s)</Typography>
                                    <Typography sx={{ ...theme.typography.body2 }}>
                                        Setup your online or physical store profile, enter website or address details and upload a logo.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={4} md={6} sm={12} sx={{ px: "12px" }}>
                            <Box className="find-offers-card"
                                sx={{
                                    display: "flex", height: "auto", flexDirection: "column", alignItems: "center",
                                    textAlign: "center", background: theme.palette.common.white,
                                    border: "1px solid rgba(0,0,0, 0.15)", borderRadius: "10px", padding: "20px"
                                }}>
                                <Box className="find-offer-card-img"
                                    sx={{
                                        flexShrink: 0, display: "flex", justifyContent: "center", alignItems: "center",
                                        height: "80px", width: "80px", mb: "16px", borderRadius: "10px",
                                        background: theme.palette.background.default
                                    }}>
                                    <Box component="img" src={dealsCouponIcon} sx={{ fontSize: "26px", color: theme.palette.common.white }} />
                                </Box>
                                <Box className="step-div">
                                    <Typography className="step" sx={{
                                        ...style.steps
                                    }}>Step 3</Typography>
                                </Box>

                                <Box className="find-offer-card-content">
                                    <Typography component='h3' sx={{ ...theme.typography.subtitle1 }}>
                                        Upload your deal (s)</Typography>
                                    <Typography sx={{ ...theme.typography.body2 }}>
                                        Add your special deal by adding details of the deal, enter a start and an end date and upload image(s) of the deal.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid> */}
                        {
                            businessWorksData.map((item) => {
                                const { desc, icon, id, name, stepCount } = item;
                                return (
                                    <BusinessWorkCards key={id} name={name} id={id} desc={desc} icon={icon} stepCount={stepCount} />
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default BusinessHowItWorks