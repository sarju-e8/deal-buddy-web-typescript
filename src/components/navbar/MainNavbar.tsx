import { Container, Grid } from '@mui/material'
import React from 'react'
import NavbarMenus from './NavbarMenus'
import NavbarButtons from './NavbarButtons'

const MainNavbar = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{ bgcolor: "white", minWidth: 100, p: 1, boxShadow: '0 4px 8px #00000005, 0 6px 20px #00000005' }}>
                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item md={7} xs={12}>
                        <NavbarMenus />
                    </Grid>
                    <Grid item md={5} xs={12}>
                        <NavbarButtons />
                    </Grid>
                </Grid>
            </Container >
        </>
    )
}

export default MainNavbar