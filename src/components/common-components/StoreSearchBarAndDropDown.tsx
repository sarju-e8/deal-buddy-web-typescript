import { Box, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../theme/theme';

interface IProps {
    title: string;
    subTitle?: string;
}

const StoreSearchBarAndDropDown = ({ title, subTitle }: IProps) => {
    const [age, setAge] = React.useState<string | number>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: SelectChangeEvent<typeof age>) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <Container maxWidth='lg' sx={{ py: "40px" }}>
            <Box className="all-stores-title" sx={{ position: "relative", zIndex: 1, }}>
                <Typography sx={{ ...theme.typography.h2, mb: "8px" }}>{title}</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 400, lineHeight: "32px", mb: "24px" }}>{subTitle}</Typography>
            </Box >

            <Box className="input-field-btn" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                <Grid container>
                    <Grid item lg={8} md={6} sm={4} xs={12}>
                        <TextField
                            className="Mui-disabled"
                            placeholder='Search Store'
                            sx={{
                                // fieldset: { border: "none", outline: "none" },
                                bgcolor: "white", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.15)!important",
                                "& input::placeholder": {
                                    color: theme.palette.text.disabled
                                }
                            }}
                            fullWidth
                            id="fullWidth"
                            InputProps={{
                                sx: {
                                    '&: hover fieldset': { border: "1px solid rgba(0,0,0,0.15)!important" },
                                    '&:focus-within fieldset, &:focus-visible fieldset': { border: "1px solid Frgba(0,0,0,0.15)!important" },
                                    pr: "10px",
                                    color: theme.palette.common.black,
                                },
                                style: { height: 50, borderRadius: "10px" },
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <SearchIcon sx={{ color: theme.palette.common.black }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item lg={2} md={3} sm={3} xs={12}>
                        <FormControl sx={{ ml: "16px", minWidth: 175, }}>
                            <InputLabel id="demo-controlled-open-select-label" sx={{ color: theme.palette.common.black }}>
                                Discount Type</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                sx={{ height: "50px", borderRadius: "10px" }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={2} md={3} sm={3} xs={12}>
                        <FormControl sx={{ ml: "16px", minWidth: 175, }}>
                            <InputLabel id="demo-controlled-open-select-label" sx={{ textAlign: "center", color: theme.palette.common.black }}>
                                Categories</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                sx={{ height: "50px", borderRadius: "10px" }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* <Grid item lg={2} md={3} sm={3} xs={12}>
                            <FormControl sx={{ ml: "16px", minWidth: 120, }} size="small">
                                <InputLabel id="demo-select-small-label">Age</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    sx={{height:"50px", borderRadius:"16px"}}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid> */}
                </Grid>
            </Box>
        </Container>
    )
}

export default StoreSearchBarAndDropDown