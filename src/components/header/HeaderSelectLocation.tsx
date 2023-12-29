import { Box, Container, Grid, Link, Stack, Typography } from '@mui/material'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React from 'react'

const HeaderSelectLocation = () => {
    return (
        <>
            {/* <Container maxWidth="xl">
                <Grid container>
                    <Grid item lg={3} md={3} sm={3} xs={12}> */}
            <Box sx={{ bgcolor: 'white', borderRadius: 2.5, maxWidth: "180px" }}>
                <Link sx={{ textDecoration: "none", color: "black", cursor: 'pointer' }} >
                    <Stack direction={'row'} sx={{ px: 1.5, py: 1 }}>
                        <LocationOnOutlinedIcon sx={{ color: '#00c86d', fontSize: 26 }} />
                        <Typography sx={{ pl: 1, fontSize: 18 }}>Hamilton</Typography>
                        <KeyboardArrowDownIcon sx={{ pl: 3, fontSize: 22 }} />
                    </Stack>
                </Link>
            </Box>
            {/* </Grid>
                </Grid>
            </Container> */}
        </>
    )
}

export default HeaderSelectLocation