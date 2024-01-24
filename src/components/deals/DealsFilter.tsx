import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { getDealsAndCoupons, getDealsMode, getFiltersData } from '../../services/DealsAndCouponsApi'
import { Deal } from '../../@types/deals'
import { DealMode } from '../../@types/DealMode'

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
    const [dealMode, setDealMode] = useState<DealMode[]>([]);
    // const [cusines, setCusines] = useState<DealMode[]>(dealMode);
    const [checkedArray, setCheckedArray] = useState<any>([]);


    const dealsHandleClick = () => {
        setPageNumber(pageNumber += 1);
    }

    const onclick_filter_data = () => {
        // getFiltersData(url).then((res)=>{
        //     console.log(res.data.items);

        // })
    }

    // const dealMode = [
    //     { dealMode: "c9155a1c-0369-4d2d-b317-d828e6218420" }
    // ]
    // const url: string = `deal/deals?v=1704457556025&limit=36&page=${pageNumber}&updateViewCount=true&t=1704457556023`;
    // const sortBy: string = "clicks";
    // const url: string = `deal/deals?v=1704457556025&shortBy=date&limit=36&page=1&updateViewCount=true&t=1704457556023`;
    const url: string = `product-mode`;

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
        console.log(">>>>", dealMode);

        setNamesDealModes(dealMode);
    }

    useEffect(() => {
        // getDealsMode(url).then((res) => {
        //     console.log("modesss", res.data.items);

        //     setDealMode(res.data.items)
        // });
        getDealsMode(url).then((res) => {
            setDealMode(res.data.items.map((dealMode: any) => {
                dealMode.value = dealMode.id;
                dealMode.label = dealMode.name;
                dealMode.selected = false;
                console.log("....", dealMode);
                return dealMode;
            }));
        });
    }, [])

    const handleChangeChecked = (e: any, isChecked: boolean) => {

        console.log("event", e.target);
        isChecked = e.target.checked;
        if (isChecked) {

            // console.log("checked true", e.target._wrapperState.initialValue)
            console.log("checked.....", e.target.checked)
            checkedArray.push(e.target.value);

            console.log("checkdeals activate", checkedArray);
            // setCheckedArray(checkedArray);

            setNamesDealModes(checkedArray);
        } else {
            console.log("uncheckek.....", isChecked)
            // let checkedCheckboxValue = checkedArray.map((item: any) => {
            //     // checkedCheckboxValue = item;
            //     console.log("itemss", item);

            // });
            // console.log("abcd", checkedCheckboxValue);
            // // if (e.target.value == checkedCheckboxValue) {
            // //     checkedArray.pop(e.target.value);
            // // }

            // using filter
            // let filterUncheckedArray = checkedArray.filter((checkbox: any) => {
            //     console.log("checkboxx", checkbox)
            //     console.log("evm", e.target.value);
            //     return e.target.value !== checkbox;
            // })

            // console.log("unchecked values", filterUncheckedArray);
            // // setCheckedArray(filterUncheckedArray);
            // console.log("checkdeals activateee", checkedArray);

            const index = checkedArray.indexOf(e.target.value);
            checkedArray.splice(index, 1);
            // setCheckedArray(checkedArray);
            console.log("final", checkedArray)
            setNamesDealModes(checkedArray);
        }





        // setDealMode(changeChecked);
        // console.log("chengess", changeChecked)


        // console.log("chk id", id)
        // console.log("ddd", dealMode)

        // const ids = { currentChkId: id }

        // const checkedId = [{ ...ids }]

        // console.log("ids..", checkedId);
    }

    // const handleChangeChecked = (event: any) => {
    //     const isChecked = event.target.checked;
    //     if (isChecked) {
    //         setCheckedArray({ checkedArray: [...checkedArray, event.target.value] });
    //         console.log("checkedarray", checkedArray);
    //     }
    // }

    const CheckboxCards = ({ id, name }: DealMode) => {
        return (
            <FormControlLabel key={id}
                onChange={handleChangeChecked}
                control={<Checkbox sx={{ ...style.commonColor }} />}
                label={name} value={id} sx={{ ...style.checkBoxLabel }} />
        )
    }

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
                                {/* <FormControlLabel onClick={() => getFiltersData(url, "date",dealMode[0])} control={<Checkbox sx={{ ...style.commonColor }} />} label="Online" sx={{ ...style.checkBoxLabel }} /> */}
                                {/* <FormControlLabel onChange={() => changeChecked(dealMode)} control={<Checkbox sx={{ ...style.commonColor }} />} label="Online" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="In Store" sx={{ ...style.checkBoxLabel }} /> */}
                                {
                                    dealMode.map((item, index) => {
                                        const { id, name } = item;

                                        return (
                                            <>
                                                <CheckboxCards key={index} name={name} id={id} />
                                            </>
                                        )
                                    })
                                }
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