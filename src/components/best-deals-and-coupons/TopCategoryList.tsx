import { hexToRgb } from '@material-ui/core'
import { Box, Container, Link, Typography } from '@mui/material'
import { TravelCategoryIcon } from "../../assets/image_path";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useEffect, useState } from 'react'
import { Category } from '../../@types/category';
import CategoryList from './CategoryList';
import { getCategory } from '../../services/CategoryApi';
import { theme } from '../../theme/theme';

const style = {
    categoryCard: {
        border: "1px solid rgba(0,0,0,.15)",
        boxSizing: 'border-box',
        borderRadius: '10px',
        ml: "34px",
        padding: "20px",
        height: "100%"
    },
    categoryMainTitle: {
        // fontSize: "18px",
        // fontWeight: 700,
        // lineHeight: "28px",
        mb: "3px",
    },
    // categoryList: {
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-between",
    //     py: "15px",
    //     borderBottom: "1px solid rgba(0,0,0,.15)",
    //     cursor: "pointer"
    // },
    // categoryContent: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // categoryIconDiv: {
    //     bgcolor: "#00c86d",
    //     height: "36px",
    //     width: "36px",
    //     borderRadius: "10px",
    //     display: 'flex',
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // categoryIcon: {
    //     height: "20px",
    //     width: "20px",
    //     objectFit: 'cover'
    // },
    // categoryName: {
    //     px: "20px"
    // }
}

const TopCategoryList: React.FC = () => {

    const [apiData, setApiData] = useState<Category[]>([]);

    const url: string = 'category??v=1702558604710&where%5Bstatus%5D=active&order%5BorderBy%5D=ASC&take=6';

    useEffect(() => {
        // fetch("https://www.dealbuddy.co.nz/api/category?v=1702558604710&where%5Bstatus%5D=active&order%5BorderBy%5D=ASC&take=6"
        // ).then(
        //     response => {
        //         return response.json();
        //     }
        // ).then(
        //     data => {
        //         console.log("data", data);
        //         setApiData(data.items);
        //     }
        // )


        getCategory(url).then((res) => {
            setApiData(res.data.items);
        });
    }, [])
    // console.log("apidata", apiData);
    return (
        <>
            <Container maxWidth="lg">
                <Box className="category-card" sx={{ ...style.categoryCard }}>
                    <Typography className='category-main-title' sx={{ ...theme.typography.h5, marginBottom: "3px" }}>Top Categories</Typography>
                    {
                        apiData && apiData.map((item) => {
                            // console.log(item);
                            const { id, name, imageUrl } = item;
                            return (
                                <CategoryList key={id} name={name} image={imageUrl} />
                            );
                        })
                    }

                    <Link href="#" sx={{ textDecoration: "none", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: theme.palette.text.primary, fontWeight: 'bold', fontSize: "16px", lineHeight: "24px", pt: "20px", display: "block", }}>View all categories</Typography>
                    </Link>
                </Box>
            </Container>
        </>
    )
}

export default TopCategoryList