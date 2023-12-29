import { Box, Container, Link, Typography } from '@mui/material'
import { footerLogoIcon } from '../../assets/image_path';

import React from 'react'

const NotFound = () => {
    const title: string = "Page not found";
    const desc: string = "We can't find the page you are looking for. Try going back to previous page or "
    return (
        <>
            <Container maxWidth="xl" >
                <Box className="error-404" sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
                    <Box className="error-content" sx={{ maxWidth: "400px", margin: "0 auto", width: "100%", padding: "16px" }}>
                        <Link href="#" className="logo-link"
                            sx={{ marginBottom: "16px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", objectFit: "cover" }}>
                            <Box component="img" className="img-logo" src={footerLogoIcon} sx={{ height: "150px", width: "150px", maxWidth: "100%" }} />
                        </Link>
                        <Box component="h1" className='not-found-title'
                            sx={{ textAlign: "center", marginBottom: "16px" }}>{title}</Box>
                        <Typography className='not-found-desc' sx={{
                            textAlign: "center", fontSize: "16px", marginBottom: "16px", lineHeight: 1.8
                        }}>{desc} <Link href="#" sx={{ color: "#309868", textDecoration: "none" }}>Home Page</Link>
                        </Typography>
                    </Box>
                </Box>
            </Container >
        </>
    )
}

export default NotFound