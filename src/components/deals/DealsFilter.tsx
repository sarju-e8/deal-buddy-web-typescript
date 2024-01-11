import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { getDealsAndCoupons, getFiltersData } from '../../services/DealsAndCouponsApi'
import { Deal } from '../../@types/deals'

const style = {
    commonColor: {
        color: theme.palette.text.primary, '&.Mui-checked': {
            color: theme.palette.text.primary,
        },
        '& .MuiSvgIcon-root': {
            fontSize: 28,
        },
    },
    checkBoxLabel: {
        width: 'fit-content'
    }
}



const DealsFilter = ({ setNamesSortBy, setNamesDealModes }: any) => {
    const [filterApiSortByClicksData, setFilterApiSortByClicksData] = useState<Deal[]>([]);
    let [pageNumber, setPageNumber] = useState<number>(1);
    const [currentParam, setCurrentParam] = useState("date")

    const dealsHandleClick = () => {
        setPageNumber(pageNumber += 1);
    }

const onclick_filter_data = ()=>{
    // getFiltersData(url).then((res)=>{
    //     console.log(res.data.items);
        
    // })
}

const dealMode = [
    {dealMode : "c9155a1c-0369-4d2d-b317-d828e6218420"}
]
    // const url: string = `deal/deals?v=1704457556025&limit=36&page=${pageNumber}&updateViewCount=true&t=1704457556023`;
    // const sortBy: string = "clicks";
    const url: string = `deal/deals?v=1704457556025&shortBy=date&limit=36&page=1&updateViewCount=true&t=1704457556023`;


    const sortByClicksData = (sortBy: string) => {
        // getSortByFilterData(url, sortBy).then((res) => {
        //     // setFilterApiSortByClicksData(res.data.items);
        //     // const temp_data = res.data.items;
        //     setNames(res.data.items);
        //     console.log("Filter Data", setNames(res.data.items));
        // })
        // if (sortBy === '') {
        //     sortBy = "date";
        // } else {
        console.log("sort by before: ", sortBy);
        setNamesSortBy(sortBy);
        console.log("sort by after: ", sortBy);
        // }
    }

    const sortByDealModesData = (dealMode: string) => {
        setNamesDealModes(dealMode);
    }

    useEffect(() => {

    },)
    return (
        <>
            <Box className="filter-sidebar" sx={{ width: "100%", flexShrink: 0, }}>
                <Box className="filter-title" sx={{
                    position: "relative", transform: "translate3d(0px, 0px, 0px)",
                    border: "1px solid rgba(0,0,0,0.15)", borderRadius: "10px", padding: "20px",
                }}>
                    <Typography sx={{ ...theme.typography.h5, mb: "20px" }}>Filter</Typography>

                    <Box className="form-tag">
                        <Box className="widget-sort-by" sx={{ boxSizing: "border-box" }}>
                            <Typography sx={{
                                color: theme.palette.common.black,
                                ...theme.typography.subtitle1, mb: "5px",
                            }}>Sort By</Typography>
                            <FormControl>
                                {/* <FormLabel id="demo-radio-buttons-group-label"
                                    sx={{
                                        color: theme.palette.common.black,
                                        ...theme.typography.h6,
                                        m: 0,
                                        '.Mui-focused': {
                                            color: 'black!important', // Set the desired color for focused state
                                        },
                                    }}>
                                    Sort By</FormLabel> */}
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="date"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel onClick={() => sortByClicksData("clicks")} value="clicks" control={<Radio sx={{
                                        ...style.commonColor
                                    }} />} label="Clicks" />
                                    <FormControlLabel onClick={() => sortByClicksData("date")} value="date" control={<Radio sx={{
                                        ...style.commonColor
                                    }} />} label="Date" />
                                    <FormControlLabel onClick={() => sortByClicksData("title")} value="title" control={<Radio sx={{
                                        ...style.commonColor
                                    }} />} label="Title" />
                                    <FormControlLabel onClick={() => sortByClicksData("views")} value="views" control={<Radio sx={{
                                        ...style.commonColor
                                    }} />} label="Views" />
                                </RadioGroup>
                            </FormControl>
                        </Box>

                        <Divider sx={{ borderBottom: "1px solid #00000026", my: "20px" }} />

                        <Box className="widget-deal-mode" sx={{ boxSizing: "border-box" }}>
                            <Typography sx={{
                                color: theme.palette.common.black, ...theme.typography.subtitle1, mb: "5px",
                            }}>Deal Mode</Typography>
                            <FormGroup>
                                <FormControlLabel onClick={() => getFiltersData(url, "date",dealMode[0])} control={<Checkbox sx={{ ...style.commonColor }} />} label="Online" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="In Store" sx={{ ...style.checkBoxLabel }} />
                            </FormGroup>
                        </Box>

                        <Divider sx={{ borderBottom: "1px solid #00000026", my: "20px" }} />

                        <Box className="widget-deal-mode" sx={{ boxSizing: "border-box" }}>
                            <Typography sx={{
                                color: theme.palette.common.black, ...theme.typography.subtitle1, mb: "5px",
                            }}>Discount Type</Typography>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="% off" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="$ off" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Buy X get Y Free" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Cashback" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Reward Points" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Free Shipping" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Competition" sx={{ ...style.checkBoxLabel }} />

                            </FormGroup>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DealsFilter