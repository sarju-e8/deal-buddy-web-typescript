import { Box, Container, InputAdornment, TextField, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'

const AllStores = () => {
    return (
        <>
            <Box className="all-stores-title" sx={{ position: "relative", zIndex: 1, py: "40px" }}>
                <Container maxWidth='lg'>
                    <Typography sx={{ ...theme.typography.h2, mb: "8px" }}>All Stores</Typography>
                    <Typography sx={{ fontSize: "20px", fontWeight: 400, lineHeight: "32px", mb: "24px" }}>Find your store and grab a deal!</Typography>
                </Container>
            </Box>

            <Box className="search-and-select-menu" sx={{ display: "flex" }}>
                <TextField
                    className="Mui-disabled"
                    placeholder='Find your perfect deal'
                    sx={{
                        fieldset: { border: "none", outline: "none" },
                        bgcolor: theme.palette.common.white, borderRadius: 2.5, border: "none", outline: "none",
                        "& input::placeholder": {
                            color: theme.palette.text.disabled
                        }
                    }}
                    fullWidth
                    id="fullWidth"
                    InputProps={{
                        sx: {
                            '&: hover fieldset': { border: 'none' }, '&:focus-within fieldset, &:focus-visible fieldset': { border: 'none' },
                            color: theme.palette.common.black,
                        },
                        style: { border: 'none', height: 43, outline: 'none' },
                        startAdornment: (
                            <InputAdornment position="start" sx={{ border: "none", outline: 'none' }}>
                                {/* <SearchOutlinedIcon sx={{}} /> */}
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </>
    )
}

export default AllStores