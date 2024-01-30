import { Box, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'

const NoStoreAvailabel = () => {
    return (
        <>
            <Box className="no-store-div" sx={{
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "auto"
            }}>
                <Typography sx={{ fontSize: theme.typography.h4 }}>
                    No store available yet.
                </Typography>
            </Box>
        </>
    )
}

export default NoStoreAvailabel