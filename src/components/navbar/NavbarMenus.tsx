import { Box, Container, Link, Menu, MenuItem, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CategoryIcon, ShopIcon, TagIcon } from '../../assets/image_path'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { NavLink } from 'react-router-dom';
import { theme } from '../../theme/theme';

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
        pl: 1.5,
        fontSize: 14,
    },
    menuIconStyle: {
        fontSize: 22
    },
    menuItems: {
        background: theme.palette.common.white,
        color: theme.palette.common.black,
        fontSize: 14,
    }
};


const NavbarMenus = () => {
    // console.log(CategoryIcon);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event: any) => {
        if (anchorEl !== event.currentTarget) {
            setAnchorEl(event.currentTarget);
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <>
            {/* <Container maxWidth="lg" > */}
            <Box className="navbar-menu-links" sx={{ display: 'flex', alignItems: 'center', ml: 8 }}>
                <Stack direction="row" spacing={4} sx={{}}>
                    <NavLink to='/categories' style={{ textDecoration: "none" }}>
                        <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><CategoryOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}>Categories</Typography></Link>
                    </NavLink>
                    <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><StorefrontOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}
                        aria-owns={anchorEl ? "simple-menu" : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                        onMouseOver={handleClick}
                    >
                        Stores
                    </Typography></Link>
                    <Menu
                        // id:"simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        MenuListProps={{ onMouseLeave: handleClose }}

                    >
                        <NavLink style={{ textDecoration: "inherit" }} to={'/stores'}>
                            <Link sx={{ textDecoration: "none", '& : hover': { ...styles.menuNameHoverStyle } }}>
                                <MenuItem className="menuitem" onClick={handleClose} sx={{ ...styles.menuItems }}>All Stores</MenuItem>
                            </Link>
                        </NavLink>
                        <NavLink style={{ textDecoration: "inherit" }} to={'/online-stores'}>
                            <Link sx={{ textDecoration: "none", '& : hover': { ...styles.menuNameHoverStyle } }}>
                                <MenuItem className="menuitem" onClick={handleClose} sx={{ ...styles.menuItems }}>Online Stores</MenuItem>
                            </Link>
                        </NavLink>
                        <NavLink style={{ textDecoration: "inherit" }} to={'/physical-stores'}>
                            <Link sx={{ background: theme.palette.common.white, textDecoration: "none", '& : hover': { ...styles.menuNameHoverStyle } }}>
                                <MenuItem className="menuitem" onClick={handleClose} sx={{ ...styles.menuItems }}>Physical Stores</MenuItem>
                            </Link>
                        </NavLink>
                    </Menu>
                    <NavLink style={{ textDecoration: "inherit" }} to={'/deals'}>
                        <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><LocalOfferOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}>Deals</Typography></Link>
                    </NavLink>
                    <NavLink style={{ textDecoration: "inherit" }} to={'/physical-stores'}>
                        <Link sx={{ ...styles.navbarMenuStyle, '& : hover': { ...styles.menuNameHoverStyle } }} href="#"><LocationOnOutlinedIcon sx={{ ...styles.menuIconStyle }} /><Typography component='span' sx={{ ...styles.menuNameStyle }}>Map</Typography></Link>
                    </NavLink>
                </Stack>
            </Box >
            {/* </Container> */}
        </>
    )
}

export default NavbarMenus