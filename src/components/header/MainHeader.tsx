import { Container, Grid } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import HeaderSelectLocation from './HeaderSelectLocation'
import HeaderSearchBar from './HeaderSearchBar'
import HeaderUserLoginStatus from './HeaderUserLoginStatus'

const MainHeader = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#00C86D", minWidth: 100, p: 1 }}>
        <Grid container>
          <Grid item md={3} xs={12}>
            <Logo />
          </Grid>
          <Grid item md={2} xs={12}>
            <HeaderSelectLocation />
          </Grid>
          <Grid item md={5} xs={12}>
            <HeaderSearchBar />
          </Grid>
          <Grid item md={2} xs={12}>
            <HeaderUserLoginStatus />
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default MainHeader