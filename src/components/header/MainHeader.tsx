import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import HeaderSelectLocation from './HeaderSelectLocation'
import HeaderSearchBar from './HeaderSearchBar'
import HeaderUserLoginStatus from './HeaderUserLoginStatus'
import { theme } from '../../theme/theme'
import SearchBar from './SearchBar'

const MainHeader = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{
        bgcolor: theme.palette.primary.main,
        minWidth: 100, py: 1, px: "50px", display: "flex", flexDirection: "row",
        justifyContent: "center",
      }}>

        <Box component={'div'}
          sx={{
            height: "auto", width: "90%", display: "flex",
            justifyContent: "space-between", alignItems: "center"
          }} >

          <Box sx={{ height: "auto", width: "auto", display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Logo />

            <HeaderSelectLocation />
            {/* <HeaderSearchBar /> */}

            <SearchBar />
          </Box>

          <HeaderUserLoginStatus />

        </Box>
      </Container>
    </>
  )
}

export default MainHeader