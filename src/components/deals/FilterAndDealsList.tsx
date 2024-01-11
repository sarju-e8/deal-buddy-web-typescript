import { Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import DealsFilter from './DealsFilter'
import DealsProductResult from './DealsProductResult'
import { Deal } from '../../@types/deals'

const FilterAndDealsList = () => {

    const [namesSortBy, setNamesSortBy] = useState<any>("date");
    const [namesDealModes, setNamesDealModes] = useState([]);
    useEffect(() => {
        // alert(namesDealModes)
    }, [namesSortBy, namesDealModes])


    return (
        <>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid lg={3} md={4} sm={12} xs={12}>
                        <DealsFilter setNamesSortBy={setNamesSortBy} setNamesDealModes={setNamesDealModes} />
                    </Grid>
                    <Grid lg={9} md={8} sm={12} xs={12}>

                        <DealsProductResult namesSortBy={namesSortBy} namesDealModes={namesDealModes} />


                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default FilterAndDealsList