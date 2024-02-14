import React from 'react';
import { Box, Container, Grid, Link } from '@mui/material';
import { MainLogo } from "../../assets/image_path";
import { NavLink } from 'react-router-dom';

const Logo = () => {

    return (
        <>
            <Box>
                <NavLink to="/" style={{ textDecoration: "inherit" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0 }}>
                        <img src={MainLogo} alt='logo' height="auto" width="200px" />
                    </Box>
                </NavLink>
            </Box>
        </>
    )
}

export default Logo