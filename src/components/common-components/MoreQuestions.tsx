import { Box, Link, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { theme } from '../../theme/theme'

const MoreQuestions = () => {
    return (
        <>
            <Box className="more-questions" sx={{ py: "40px" }}>
                <Typography sx={{ textAlign: "center", ...theme.typography.subtitle1 }}>More Questions ?
                    <NavLink to='/contact-us' style={{ textDecoration: "inherit" }}>
                        <Link sx={{
                            color: theme.palette.text.primary, textDecoration: "none",
                            outline: 0, transition: ".5s"
                        }}> Contact Us</Link>
                    </NavLink>
                </Typography>
            </Box>
        </>
    )
}

export default MoreQuestions