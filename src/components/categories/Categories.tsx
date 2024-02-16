import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { CategoryIcon } from '../../assets/image_path'
import { getAllCategoryList } from '../../services/CategoryApi'
import { Category } from '../../@types/category'
import CategoryCards from './CategoryCards'

const Categories = () => {
    const [apiData, setApiData] = useState<Category[]>([]);

    useEffect(() => {
        var params = {
            where: {
                status: "active"
            },
            order: {
                orderBy: "ASC"
            },
        }

        getAllCategoryList(params).then((res) => {
            setApiData(res.data.items);
        });
    }, [])

    return (
        <>
            <Container maxWidth="xl">
                <Box className="category-main-div">
                    <Box className="category-title" sx={{ py: "40px", pl: "60px" }}>
                        <Typography component="h1" sx={{ ...theme.typography.h2, m: 0 }}>
                            Categories
                        </Typography>
                    </Box>

                    <Box className="category-list-div" sx={{ pl: "50px", pr: "35px" }}>
                        <Grid container className="category-grid"
                            sx={{ display: "flex", justifyContent: "center" }}>
                            {
                                apiData.map((item) => {
                                    const { id, imageUrl, name, slug } = item;
                                    return (
                                        <CategoryCards key={id} id={id} name={name} imageUrl={imageUrl} slug={slug} />
                                    )
                                })
                            }
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default Categories