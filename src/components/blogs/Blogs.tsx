import { Box, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../services/BlogApi';
import { IBlogs } from '../../@types/IBlogs';
import BlogCards from './BlogCards';

const Blogs: React.FC = () => {
    const [apiData, setApiData] = useState<IBlogs[]>([]);

    const url: string = "blog?v=1701406123153&where%5Bstatus%5D=active&where%5BisShowOnHome%5D=true&take=999";

    useEffect(() => {
        getBlogs(url).then((res) => {
            setApiData(res.data.items);
        });
    }, [])
    // console.log("blogs", apiData);

    return (
        <>
            <Box className="blogs-main-div" sx={{ pb: "40px", px: "50px" }}>
                <Grid container className="blogs-grid-container">
                    {
                        apiData.map((item) => {

                            const { id, imageUrl, sortDescription, title, views } = item;

                            return (
                                <BlogCards key={id} id={id} title={title} views={views} sortDescription={sortDescription} imageUrl={imageUrl} />
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Blogs