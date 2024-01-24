import { Box, Link, Typography } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme/theme';

const style = {
    menuMainDivStyle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ml: 10
    },
    menuButtonStyle: {
        background: theme.buttonGradient.greenGradient,
        color: theme.palette.common.white,
        textDecoration: 'none',
        px: 3,
        py: 1.25,
        borderRadius: '5px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        transition: '.5s',
        '&:hover': {
            color: theme.palette.common.black,
            background: theme.buttonGradient.yellowGradient,
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
        ...theme.typography.button,
        // textTransform: "none",
        // fontSize: "14px",
        // fontWeight: 500,
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
                        <Typography component="span" sx={{ ...style.menuButtonNameStyle, textTransform: "none", }}>
                            {/* <NavLink to="/how-it-works" style={{ textDecoration: "inherit", ...style.menuButtonNameStyle }}> */}
                            How it works
                            {/* </NavLink> */}
                        </Typography>
                    </Link>
                </NavLink>

                <NavLink to="/list-your-business" style={{ textDecoration: "inherit" }}>
                    <Link sx={{ ...style.menuButtonStyle, ml: 1.5, }} href="#">
                        <BusinessCenterOutlinedIcon sx={{ ...style.menuButtonIconStyle }} />
                        <Typography component="span" sx={{ ...style.menuButtonNameStyle, textTransform: "none", }}>List your business</Typography>
                    </Link>
                </NavLink>
            </Box >
        </>
    )
}

export default NavbarButtons