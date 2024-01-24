import { Box, Link } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { theme } from '../../theme/theme'

const KnowMoreBusiness = () => {
    return (
        <>
            <Box className="more-question" sx={{ textAlign: "center", ...theme.typography.subtitle1, }}>
                <NavLink to='/list-your-business' style={{ textDecoration: "inherit" }}>
                    <Link sx={{
                        color: theme.palette.text.primary, textDecoration: "none",
                        outline: 0, transition: ".5s"
                    }}>Know More</Link>
                </NavLink>
            </Box>
        </>
    )
}

export default KnowMoreBusiness