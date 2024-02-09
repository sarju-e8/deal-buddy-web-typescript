import React from 'react'
import StoreSearchBarAndDropDown from '../../common-components/StoreSearchBarAndDropDown'
import { Container, Grid } from '@mui/material'
import PhysicalStoresList from './PhysicalStoresList'
import MyComponent from './PhysicalStoresMapView'

const PhysicalStores = () => {
    return (
        <>
            <StoreSearchBarAndDropDown title="Discover the best discount deals in your area" />

            <Container maxWidth="lg" sx={{ pb: "24px" }}>
                <Grid container>
                    <Grid item lg={4} md={5} sm={12} xs={12}>
                        <PhysicalStoresList />
                    </Grid>
                    <Grid item lg={8} md={7} sm={12} xs={12}>
                        <MyComponent />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default PhysicalStores