import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { listYourBusinessBGI } from '../../assets/image_path'
import { theme } from '../../theme/theme'
import ButtonComp from '../common-components/Button'

const AddYourBusiness = () => {
    return (
        <>
            <Box className="business-banner"
                sx={{
                    backgroundImage: `url(${listYourBusinessBGI})`, backgroundRepeat: "no-repeat",
                    backgroundPosition: "center", backgroundSize: "cover"
                }}>
                <Box className="business-banner-bg" sx={{
                    background: "rgba(15,15,15,.75)",
                }}>
                    <Container maxWidth="xl" className='business-banner-content' sx={{ py: "140px", px: "65px !important" }}>
                        <Box className="business-page-title-area" sx={{
                            color: theme.palette.common.white, padding: 0, position: "relative", zIndex: 1,
                            py: "40px", px: "0",
                        }}>
                            <Typography component="h1" sx={{
                                fontSize: theme.typography.h2.fontSize, mb: 0,
                                fontWeight: theme.typography.h2.fontWeight,
                                lineHeight: theme.typography.h2.lineHeight
                            }}>
                                Add your business on dealbuddy
                            </Typography>
                            <Typography sx={{ mt: "12px", opacity: 0.95, mb: 0, ...theme.typography.body1 }}>Promote your specials and get more customers</Typography>
                        </Box>
                        <Box className="business-buttons" sx={{ display: "flex" }}>
                            <ButtonComp name="Sign-up"></ButtonComp>
                            <ButtonComp name="Already Registered? Login" sx={{ ml: "20px" }}></ButtonComp>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}

export default AddYourBusiness