import { Box, Button, Typography } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'
import { user } from "../../assets/image_path";

const HeaderUserLoginStatus = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="outlined"
                    sx={{
                        borderColor: "white",
                        width: 125,
                        // height: 45,
                        color: "white",
                        textTransform: "capitalize",
                        borderRadius: 2.5,
                        '&.MuiButton-root:hover': { borderColor: 'white' }
                    }}>
                    <img src={user} alt='user-profile' height="36px" width="36px" />
                    <Typography component="span"
                        sx={{
                            marginLeft: 1
                        }}>
                        Login</Typography>
                </Button>
            </Box>
        </>
    )
}

export default HeaderUserLoginStatus