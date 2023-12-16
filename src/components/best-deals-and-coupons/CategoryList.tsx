import { Box, Typography } from '@mui/material'
import { TravelCategoryIcon } from "../../assets/image_path";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { FC } from 'react'

export interface CategoryListProps {
    name: string;
    image: string;
}

const style = {
    categoryList: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        py: "15px",
        borderBottom: "1px solid rgba(0,0,0,.15)",
        cursor: "pointer"
    },
    categoryContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryIconDiv: {
        bgcolor: "#00c86d",
        height: "36px",
        width: "36px",
        borderRadius: "10px",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryIcon: {
        height: "20px",
        width: "20px",
        objectFit: 'cover'
    },
    categoryName: {
        px: "20px"
    }
}

const CategoryList = ({ name, image }: CategoryListProps) => {
    return (
        <>
            <Box className="category-list" sx={{ ...style.categoryList }}>
                <Box className="category-content" sx={{ ...style.categoryContent }}>
                    <Box className="category-icon-div" sx={{ ...style.categoryIconDiv }}>
                        <Box className='category-icon'
                            component="img" src={image}
                            sx={{ ...style.categoryIcon }} />
                    </Box>
                    <Typography className='category-name' sx={{ ...style.categoryName }}>{name}</Typography>
                </Box>
                <KeyboardArrowRightIcon />
            </Box>
        </>
    )
}

export default CategoryList