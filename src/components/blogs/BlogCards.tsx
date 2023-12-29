import { Box, Button, Grid, Link, Typography } from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import React from 'react'
import { IBlogs } from '../../@types/IBlogs';

const style = {
    BlogMainGridCard: {
        p: "10px"
    },
    BlogCardItem: {
        display: "flex",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        margin: "0 auto",
        bgcolor: "white",
        borderRadius: "10px",
        flexDirection: "column",
        maxWidth: "304px",
        border: "1px solid rgba(0, 0, 0, 0.15)",
    },
    BlogImageDiv: {
        width: "100%",
        position: "relative",
    },
    BlogLinks: {
        cursor: "pointer",
        textDecoration: "none"
    },
    BlogImg: {
        height: "200px",
        width: "100%",
        objectFit: "cover",
        borderRadius: "10px 10px 0 0",
    },
    BlogViewInfo: {
        position: "absolute",
        width: "100%",
        bottom: "4px",
        fontSize: "16px",
        color: "white",
        display: "none",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#00000080",
        boxShadow: "0 0 15px #0000000d",
        height: "38px",
    },
    BlogViewItem: {
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    BlogIconEye: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontVariant: "normal",
        textTransform: "none",
        lineHeight: 1,
        WebkitFontSmoothing: "antialiased",
    },
    BlogViewText: {
        lineHeight: "18px",
        pl: "8px"
    },
    BlogDetails: {
        bgcolor: "white",
        padding: "20px",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    BlogDescription: {
        flexGrow: 1,
        pb: "10px",
    },
    BlogHeadings: {
        webkitLineClamp: 3,
        fontSize: "18px",
        lineHeight: "28px",
        fontWeight: 500,
        mb: "10px",
        color: "black",
    },
    BlogSubTexts: {
        fontSize: "14px",
        lineHeight: "20px",
        color: "#00000080",
        margin: 0,
        webKitLineClamp: 3,
    },
    BlogReadMoreBtn: {
        borderRadius: "5px", textTransform: "none", border: "none", color: "white", padding: "10px 24px", display: "inline-block", background: "linear-gradient(107.73deg,#43df9a 13.88%,#03b465 87.89%)", transition: ".5s", boxShadow: "unset", '&:hover': {
            color: 'black',
            background: 'linear-gradient(109.06deg,#faf57e 12.84%,#fef400 87.16%)',
        }
    }
}

const BlogCards = ({ imageUrl, sortDescription, title, views }: IBlogs) => {
    return (
        <>
            <Grid item lg={3} md={4} sm={6} xs={12} className='blog-main-grid-card'
                sx={{
                    ...style.BlogMainGridCard,
                    "& : hover .blogs-image-div .blogs-view-info":
                        { gap: "24px", gridGap: "24px", display: "flex" }
                }}>
                <Box className="blogs-card-item" sx={{
                    ...style.BlogCardItem
                }}>
                    <Box className="blogs-image-div" sx={{ ...style.BlogImageDiv }}>
                        <Link href="#" className='blogs-links' sx={{ ...style.BlogLinks }}>
                            <Box component="img" src={imageUrl} className='blogs-img' alt='blog image'
                                sx={{ ...style.BlogImg }} />
                        </Link>
                        <Box className="blogs-view-info" sx={{ ...style.BlogViewInfo }}>
                            <Box className="blogs-view-item" sx={{ ...style.BlogViewItem }}>
                                <VisibilityOutlinedIcon className='blogs-icon-eye' sx={{ ...style.BlogIconEye }} />
                                <Typography className='blogs-view-text' sx={{ ...style.BlogViewText }}>{views}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="blogs-details" sx={{ ...style.BlogDetails }}>
                        <Box className="blogs-description" sx={{ ...style.BlogDescription }}>
                            <Link href="#" className='blogs-links' sx={{ ...style.BlogLinks }}>
                                <Typography className='blogs-headings truncate-two-line' sx={{ ...style.BlogHeadings }}>
                                    {title}
                                </Typography>
                            </Link>
                            <Typography className='blogs-sub-texts truncate-two-line' sx={{ ...style.BlogSubTexts }}>
                                {sortDescription}
                            </Typography>
                        </Box>
                        <Button className='default-btn blogs-read-more-btn' sx={{ ...style.BlogReadMoreBtn }}>Read More</Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}

export default BlogCards