

import { Box, CircularProgress, Typography } from '@mui/material'
import React from 'react'

const Loading = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: "column", alignItems: "center", justifyContent: "center", margin: "auto" }}>
            <CircularProgress />
            <Typography sx={{ mt: "16px" }}>Loading...</Typography>
        </Box>
    )
}

export default Loading