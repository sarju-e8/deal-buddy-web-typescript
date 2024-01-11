import { Box, Button, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../../theme/theme'
import SearchIcon from '@mui/icons-material/Search';
import StoreSearchBarAndDropDown from '../../common-components/StoreSearchBarAndDropDown';
import AllStoresList from './AllStoresList';

const AllStores = () => {

    return (
        <>
            <StoreSearchBarAndDropDown title="All Stores" subTitle="Find your store and grab a deal!" />
            <AllStoresList />
        </>
    )
}

export default AllStores