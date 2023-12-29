import { Box, InputAdornment, Link, Stack, TextField } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import React from 'react'
import { isWhiteSpaceLike } from 'typescript';
import { theme } from '../../theme/theme';

const styles = {
    someTextField: {
        minHeight: 420
    }
};

const HeaderSearchBar = () => {
    return (
        <>
            {/* <Box sx={{}}>
                <TextField sx={{bgcolor: "white", border:"none", outline: 'none', borderColor: "none",  }}
                    fullWidth
                    placeholder="Find your perfect deal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{border: "none", outline:'none', borderRadius: 2, px:0.8, py: 0.2}}>
                                <SearchOutlinedIcon sx={{}}/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box> */}

            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    ml: -2,
                    borderRadius: 2.5,
                    background: '#00C86D',
                }}
            >
                <TextField
                    className="Mui-disabled"
                    placeholder='Find your perfect deal'
                    sx={{
                        fieldset: { border: "none", outline: "none" },
                        bgcolor: "white", borderRadius: 2.5, border: "none", outline: "none",
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
                                <SearchOutlinedIcon sx={{}} />
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>
        </>
    )
}

export default HeaderSearchBar