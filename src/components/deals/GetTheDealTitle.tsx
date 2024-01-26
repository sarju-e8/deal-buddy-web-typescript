import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { useDispatch, useSelector } from 'react-redux'
import { getIndividualCategoryDetails } from '../../services/CategoryApi'
import { useParams } from 'react-router-dom'
import { storeIsActiveValueChange } from '../../redux/features/CategoryNameAndDiscSlice'

const GetTheDealTitle = () => {
    const storePageTitle = useSelector((state: any) => state.categoryNameAndDesc.pageTitle);
    const storePageDescription = useSelector((state: any) => state.categoryNameAndDesc.description);
    const storeIsActive = useSelector((state: any) => state.categoryNameAndDesc.isActive);

    const dealsPageTitle = "Get the finest deals on everything with exciting discounts and coupon codes";

    const [pageTitle, setPageTitle] = useState("");
    const [description, setDescription] = useState("");

    const urlParams = useParams();
    const { urlSlug } = urlParams;

    const dispatch = useDispatch();

    useEffect(() => {
        var individualCategoryParams = {
            isActive: storeIsActive,
        }


        if (urlSlug) {
            getIndividualCategoryDetails(urlSlug, individualCategoryParams).then((res) => {

                // setIsActiveFlag(true);
                // setIndividualCategory(res.data);
                // dispatch(storeCategoryPageTitle({ currentPageTitle: res.data.pageTitle, currentStatus: true }));

                dispatch(storeIsActiveValueChange(true));
                setPageTitle(res.data.pageTitle);
                setDescription(res.data.description);
                // dispatch(storeCategoryPageTitle(res.data.pageTitle));
                // dispatch(storeCategoryDescription(res.data.description));
            });
        }

    }, [urlSlug])

    return (
        <>
            <Container maxWidth="lg">
                <Box className="deals-finest-title">
                    <Typography sx={{ ...theme.typography.h3, pb: "6px", }}>
                        {/* Get the finest deals on everything with exciting discounts and coupon codes */}
                        {/* {storePageTitle} */}

                        {urlSlug ? pageTitle : dealsPageTitle}
                    </Typography>
                    <Typography sx={{ ...theme.typography.paragraph, mb: "20px" }}>
                        {/* {storePageDescription} */}
                        {description}
                    </Typography>
                </Box>
            </Container>
        </>
    )
}

export default GetTheDealTitle