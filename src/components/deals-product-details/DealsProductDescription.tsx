import { Box, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { theme } from '../../theme/theme'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, Link } from 'react-router-dom'
import { storePageNumber } from '../../redux/features/dealModeSlice'
import { useNavigate } from 'react-router-dom'

const style = {
    innerHtmlParagraph: {
        fontSize: theme.typography.body1,
        mb: "10px",

    }
}

interface Tags {
    name: string;
    id: string;
}

const DealsProductDescription = () => {
    const descriptionDetails = useSelector((state: any) => state.DealsProductDetails.individualDealProductDetail);
    const tagsData: Tags[] = useMemo(() => {
        return descriptionDetails.tags;
    }, [descriptionDetails]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // function useQuery() {
    //     const { search } = useLocation();


    //     return React.useMemo(() => new URLSearchParams(search), [search]);
    // }

    // let query = useQuery();

    useEffect(() => {
        document.querySelector('#description-inner-html').innerHTML = descriptionDetails?.description;
    });

    const TagCards = ({ id, name }: Tags) => {
        return (
            <>

                {/* <NavLink onClick={() => dispatch(storePageNumber(1))} style={{ textDecoration: "inherit" }}> */}
                <Link to={{
                    pathname: "/search", search: `?search=${name}`
                }}>
                    <Box
                        onClick={() => dispatch(storePageNumber(1))}
                        className='badge' sx={{
                            padding: "8px 12px", margin: "4px 2px",
                            // backgroundColor: theme.palette.grey[400],
                            backgroundColor: "rgba(248, 249, 250, 1)",
                            cursor: "pointer", textDecoration: "none",
                            borderRadius: "100px",
                            display: "inline-block", textAlign: "center", whiteSpace: "nowrap",
                            verticalAlign: "baseline"
                        }}>

                        <Typography sx={{ color: theme.palette.common.black, fontSize: "12px", fontWeight: 700, }}>
                            {name}
                        </Typography>
                    </Box>
                </Link >
                {/* </NavLink > */}
            </>
        )
    }

    return (
        <>
            <Box className="product-details-container" sx={{ pt: "30px", pb: "30px", width: "110%" }}>
                <Box className="details-desc" sx={{
                    padding: "30px", borderRadius: "10px",
                    border: "1px solid rgba(0,0,0,.15)",
                }}>
                    <Typography sx={{ mb: "16px", fontSize: theme.typography.h4, }}>Description</Typography>

                    <Box id="description-inner-html" className="inner-html" sx={{ "& a": { textDecoration: "none", color: theme.palette.text.primary } }}>
                    </Box>

                    <Box className="tag-data">
                        <Typography sx={{ mb: "16px", fontSize: theme.typography.h4, }}>Tags</Typography>

                        <Box className="tags-name">
                            {/* <Link href="#" className='badge' sx={{
                                padding: "8px 12px", margin: "4px 8px",
                                // backgroundColor: theme.palette.grey[400],
                                backgroundColor: "rgba(248, 249, 250, 1)",
                                cursor: "pointer", textDecoration: "none",
                                borderRadius: "100px",
                                display: "inline-block", textAlign: "center", whiteSpace: "nowrap",
                                verticalAlign: "baseline",
                            }}><Typography sx={{ color: theme.palette.common.black, fontSize: "12px", fontWeight: 700, }}>
                                    {
                                        tagsData && tagsData?.map((item) => {
                                            const { name } = item;
                                            return (
                                                name
                                            )
                                        })
                                    }
                                </Typography>
                            </Link> */}

                            {
                                tagsData && tagsData?.map((item) => {
                                    const { name, id } = item;
                                    return (
                                        <>
                                            <TagCards key={id} name={name} id={id} />
                                        </>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DealsProductDescription