import React from 'react';
import { Box, Container, Grid, Link } from '@mui/material';
// import MainLogo from '../../assets/images/logo.png';
import { MainLogo } from "../../assets/image_path";
import { NavLink } from 'react-router-dom';

const Logo = () => {
    // console.log(`${image_path.main_logo}`);

    return (
        <>
            {/* <Container maxWidth="xl">
                <Grid container>
                    <Grid item lg={3} md={3} sm={3} xs={12}> */}
            <Container maxWidth="lg">
                <NavLink to="/" style={{ textDecoration: "inherit" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 0 }}>
                        <img src={MainLogo} alt='logo' height="auto" width="200px" />
                    </Box>
                </NavLink>
            </Container>
            {/* </Grid>
                </Grid>
            </Container> */}
        </>
    )
}

export default Logo