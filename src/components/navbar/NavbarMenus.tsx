import { Box, Container, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { CategoryIcon, ShopIcon, TagIcon } from '../../assets/image_path'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const styles = {
    navbarMenuStyle: {
        color: 'black',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    menuNameHoverStyle: {
        fontWeight: 'bold',
    },
    menuNameStyle: {
        ml: 1.5,
        fontSize: 16,
    },
    menuIconStyle: {
        fontSize: 22
    }
};


const NavbarMenus = () => {
    console.log(CategoryIcon);

    return (
        <>
            {/* <Container maxWidth="lg" > */}
            <Box className="navbar-menu-links" sx={{ display: 'flex', alignItems: 'center', ml: 8 }}>
                <Stack direction="row" spacing={4} sx={{}}>
                    <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><CategoryOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}>Categories</Typography></Link>
                    <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><LocalOfferOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}>Deals</Typography></Link>
                    <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><LocationOnOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}>Map</Typography></Link>
                    <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><StorefrontOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}>Stores </Typography></Link>
                </Stack>
            </Box>
            {/* </Container> */}
        </>
    )
}

export default NavbarMenus