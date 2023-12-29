import { Box, Link, Typography } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import React from 'react'
import { NavLink } from 'react-router-dom';

const style = {
    menuMainDivStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ml: 10
    },
    menuButtonStyle: {
        background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)",
        color: 'white',
        textDecoration: 'none',
        px: 3,
        py: 1.25,
        borderRadius: '5px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: '.5s',
        '&:hover': {
            color: 'black',
            background: 'linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)',
        }
    },
    menuButtonIconStyle: {
        fontSize: '22px',
        pr: '8px',
        // color: "white",
        // "&: hover": {
        //     color: "black"
        // }
    },
    menuButtonNameStyle: {
        fontSize: "14px",
        fontWeight: 500,
        // color: "white",
        // "&: hover": {
        //     color: "black"
        // }
    }
}

const NavbarButtons = () => {
    return (
        <>
            <Box sx={{ ...style.menuMainDivStyle }}>
                <NavLink to="/how-it-works" style={{ textDecoration: "inherit" }}>
                    <Link sx={{ ...style.menuButtonStyle }}>
                        <HelpOutlineIcon sx={{ ...style.menuButtonIconStyle }} />
                        <Typography component="span" sx={{ ...style.menuButtonNameStyle }}>
                            {/* <NavLink to="/how-it-works" style={{ textDecoration: "inherit", ...style.menuButtonNameStyle }}> */}
                            How it works
                            {/* </NavLink> */}
                        </Typography>
                    </Link>
                </NavLink>
                <Link sx={{ ...style.menuButtonStyle, ml: 1.5, }} href="#">
                    <BusinessCenterOutlinedIcon sx={{ ...style.menuButtonIconStyle }} />
                    <Typography component="span" sx={{ ...style.menuButtonNameStyle }}>List your business</Typography>
                </Link>
            </Box >
        </>
    )
}

export default NavbarButtons