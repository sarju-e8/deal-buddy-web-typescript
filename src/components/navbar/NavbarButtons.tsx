import { Box, Link, Typography } from '@mui/material'
import React from 'react'

const style = {
    menuButtonStyle: {
        background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)",
        color: 'white',
        textDecoration: 'none',
        px: 3,
        py: 1.25,
        borderRadius: '5px',
    }
}

const NavbarButtons = () => {
    return (
        <>
            <Box sx={{mt:1}}>
                <Link sx={{ ...style.menuButtonStyle, }} href="#">
                    <Typography component="span">How it works</Typography>
                </Link>
                <Link sx={{ ...style.menuButtonStyle, ml: 1.5 }} href="#"><Typography component="span">List your business</Typography></Link>
            </Box>
        </>
    )
}

export default NavbarButtons