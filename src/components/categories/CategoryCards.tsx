import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme/theme'
import { Category } from '../../@types/category'

const CategoryCards = ({ id, imageUrl, name }: Category) => {
    return (
        <>
            {/* <Grid container className="category-grid" sx={{ display: "flex", justifyContent: "center", }}> */}
            <Grid item lg={2} md={3} sm={4} xs={12} className='category-individual'
                sx={{ p: "10px", }}>
                <Link className='category-item-link'
                    sx={{
                        display: "block", border: "1px solid rgba(0,0,0,0.15)", boxSizing: "border-box",
                        borderRadius: "10px", padding: "20px", margin: "1px", height: "100%", cursor: "pointer",
                        transition: "0.5s", textDecoration: "none", outline: 0,
                        "&:hover .category-name":
                            { color: theme.palette.primary.main, transition: ".5s" }
                    }}>
                    <Box className="category-box" sx={{
                        margin: "0 auto 16px", width: "60px", height: "60px",
                        background: theme.palette.primary.main, boxShadow: "0 1px 2px #1018280d",
                        borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                        <Box component="img" src={imageUrl} alt={name}
                            sx={{ height: "26px", width: "26px", objectFit: "cover" }} />
                    </Box>
                    <Typography className="category-name truncate-two-line"
                        sx={{
                            color: theme.palette.common.black, fontSize: theme.typography.body1.fontSize, lineHeight: "24px",
                            fontWeight: theme.typography.body1.fontWeight, textAlign: "center", margin: 0,
                            display: "-webkit-box", maxWidth: "100%", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                            overflow: "hidden"
                        }}>{name}</Typography>
                </Link>
            </Grid>
            {/* </Grid> */}
        </>
    )
}

export default CategoryCards