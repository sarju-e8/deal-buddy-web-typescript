import { Label } from '@mui/icons-material'
import { Box, Button, Container, FormControl, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { relative } from 'path'
import React from 'react'
import { theme } from '../../theme/theme';
import ButtonComp from '../common-components/Button';



const EmailSubscription = () => {
    return (
        <>
            <Box className="join-now" sx={{
                py: "40px", pl: "82px", width: "88.5%"
            }}>
                <Grid container sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: "10px",
                    py: "24px",
                    px: "50px",
                    alignItems: "center",
                }}>
                    <Grid className='grid-title' item xl={6} lg={6} md={6} sm={12} >
                        <Box className="join-now-content" sx={{ display: "flex", alignItems: "center", }}>
                            <Typography component="h2" sx={{ ...theme.typography.h4, margin: "auto 0" }}>Join the deals wagon and start saving..</Typography>
                        </Box>
                    </Grid>

                    <Grid className='grid-input' item xl={6} lg={6} md={6} sm={12} sx={{}}>
                        <Box className="input-field-btn" sx={{ display: "flex", alignItems: "center", ml: "15px" }}>
                            <TextField
                                className="Mui-disabled"
                                placeholder='Enter your email address'
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
                                        '&: hover fieldset': { border: 'none' }, '&:focus-within fieldset, &:focus-visible fieldset': { border: 'none' }, pr: "10px",
                                        color: theme.palette.common.black,
                                    },
                                    style: { border: 'none', height: 50, outline: 'none' },
                                    startAdornment: (
                                        <InputAdornment position="start" sx={{ border: "none", outline: 'none' }}>
                                            <MailOutlineOutlinedIcon sx={{ fontSize: "26px", color: "#a8a8a8" }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            {/* <Button sx={{
                                                borderRadius: "5px", border: "none", color: "white", padding: "10px 24px", display: "inline-block", background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)", transition: ".5s", boxShadow: "unset", '&:hover': {
                                                    color: 'black',
                                                    background: 'linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)',
                                                }
                                            }}>
                                                <Typography sx={{ lineHeight: 1.4, fontWeight: 500, fontSize: "14px", textTransform: "capitalize" }}>Subscribe</Typography>
                                            </Button> */}
                                            <ButtonComp name="Subscribe"></ButtonComp>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                        </Box>
                    </Grid>
                </Grid>
            </Box >

        </>
    )
}

export default EmailSubscription