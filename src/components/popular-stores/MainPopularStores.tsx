import { Container } from '@mui/material'
import React from 'react'
import MainTitle from '../common-components/MainTitle'
import PopularStores from './PopularStores'


const MainPopularStores = () => {
    return (
        <Container maxWidth="xl" sx={{ pb: "40px" }}>
            <MainTitle name='Popular Stores' btnName='View All' />
            <PopularStores />
        </Container>
    )
}

export default MainPopularStores