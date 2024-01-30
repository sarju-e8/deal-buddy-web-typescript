import { Box, Checkbox, Divider, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { getDealsMode, getDiscountType } from '../../services/DealsAndCouponsApi'
import { Deal } from '../../@types/deals'
import { DealMode } from '../../@types/DealMode'
import { useDispatch, useSelector } from 'react-redux'
import { addCheckboxValue, removeCheckboxValue, addDiscountTypeChkValue, removeDiscountTypeChkValue, shortByValue, storePageNumber } from '../../redux/features/dealModeSlice'
import { string } from 'yup'

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
    const shortByData = [
        {
            id: 0,
            name: "Clicks",
            value: "clicks",
        },
        {
            id: 1,
            name: "Date",
            value: "date",
        },
        {
            id: 2,
            name: "Title",
            value: "title",
        },
        {
            id: 3,
            name: "Views",
            value: "views",
        },
        // "Clicks", "Date", "Title", "Views"
    ];

    const [filterApiSortByClicksData, setFilterApiSortByClicksData] = useState<Deal[]>([]);
    let [pageNumber, setPageNumber] = useState<number>(1);
    const [currentParam, setCurrentParam] = useState("date")
    const [dealMode, setDealMode] = useState<DealMode[]>([]);
    // const [cusines, setCusines] = useState<DealMode[]>(dealMode);
    const [checkedArray, setCheckedArray] = useState<any>([]);
    const [discountType, setDiscountType] = useState([]);
    const [shortBy, setShortBy] = useState(shortByData);



    const dispatch = useDispatch();
    const checkedValues = useSelector((state: any) => state.dealModeOptions.dealModes);
    // const isChecked = useSelector((state: any) => state.dealModeOptions.isChecked);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        // console.log("event change", event);
        if (event.target.checked) {
            dispatch(addCheckboxValue(value));
            dispatch(storePageNumber(1));
        } else {
            dispatch(removeCheckboxValue(value));
            dispatch(storePageNumber(1));
        }
    };

    // const dispatchDiscountType = useDispatch();
    const discountCheckedValues = useSelector((state: any) => state.dealModeOptions.discountTypes);


    const handleDiscountTypeChkBox = (event) => {
        const discountChkBoxValue = event.target.value;
        if (event.target.checked) {
            dispatch(addDiscountTypeChkValue(discountChkBoxValue));
            dispatch(storePageNumber(1));
        } else {
            dispatch(removeDiscountTypeChkValue(discountChkBoxValue));
            dispatch(storePageNumber(1));
        }
    };

    const handleShortByData = (event) => {
        const radioButtonValue = event.target.value;
        dispatch(shortByValue(radioButtonValue));
        dispatch(storePageNumber(1));
    }

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
    const dealsUrl: string = `product-mode`;
    const discountUrl: string = `discount-type`;

    const sortByClicksData = (sortBy: any) => {
        // getSortByFilterData(url, sortBy).then((res) => {
        //     // setFilterApiSortByClicksData(res.data.items);
        //     // const temp_data = res.data.items;
        //     setNames(res.data.items);
        //     console.log("Filter Data", setNames(res.data.items));
        // })
        // if (sortBy === '') {
        //     sortBy = "date";
        // } else {
        // console.log("sort by before: ", sortBy);
        // console.log("sortbyy", sortBy);
        setNamesSortBy(sortBy);
        // console.log("sort by after: ", sortBy);
        // }
    }

    const sortByDealModesData = (dealMode: string) => {
        // console.log(">>>>", dealMode);

        setNamesDealModes(dealMode);
    }

    useEffect(() => {
        // getDealsMode(url).then((res) => {
        //     console.log("modesss", res.data.items);

        //     setDealMode(res.data.items)
        // });

        setShortBy(shortBy);

        getDealsMode().then((res) => {
            setDealMode(res.data.items.map((dealMode: any) => {
                dealMode.value = dealMode.id;
                dealMode.label = dealMode.name;
                dealMode.selected = false;
                // console.log("....", dealMode);
                return dealMode;
            }));
        });

        getDiscountType().then((res) => {
            setDiscountType(res.data.items.map((discountType: any) => {
                discountType.value = discountType.name;
                discountType.label = discountType.name;
                discountType.selected = false;
                // console.log("discount first ", discountType);
                return discountType;
            }));
        });

    }, [])

    // const handleChangeChecked: any = (e: any) => {

    //     console.log("event", e.target);
    //     const isChecked = e.target.checked;
    //     if (isChecked) {

    //         // console.log("checked true", e.target._wrapperState.initialValue)
    //         console.log("checked.....", e.target.checked)
    //         // checkedArray.push(e.target.value);

    //         console.log("checkdeals activate", checkedArray);
    //         // setCheckedArray(checkedArray);
    //         dispatch(checkedCheckboxValue(e.target.value));
    //         setNamesDealModes(checkedArray);
    //     } else {
    //         console.log("uncheckek.....", isChecked)
    //         // let checkedCheckboxValue = checkedArray.map((item: any) => {
    //         //     // checkedCheckboxValue = item;
    //         //     console.log("itemss", item);

    //         // });
    //         // console.log("abcd", checkedCheckboxValue);
    //         // // if (e.target.value == checkedCheckboxValue) {
    //         // //     checkedArray.pop(e.target.value);
    //         // // }

    //         // using filter
    //         // let filterUncheckedArray = checkedArray.filter((checkbox: any) => {
    //         //     console.log("checkboxx", checkbox)
    //         //     console.log("evm", e.target.value);
    //         //     return e.target.value !== checkbox;
    //         // })

    //         // console.log("unchecked values", filterUncheckedArray);
    //         // // setCheckedArray(filterUncheckedArray);
    //         // console.log("checkdeals activateee", checkedArray);

    //         const index = checkedArray.indexOf(e.target.value);
    //         checkedArray.splice(index, 1);
    //         // setCheckedArray(checkedArray);
    //         console.log("final", checkedArray)
    //         dispatch(checkedCheckboxValue(checkedArray));
    //         setNamesDealModes(checkedArray);
    //     }





    //     // setDealMode(changeChecked);
    //     // console.log("chengess", changeChecked)


    //     // console.log("chk id", id)
    //     // console.log("ddd", dealMode)

    //     // const ids = { currentChkId: id }

    //     // const checkedId = [{ ...ids }]

    //     // console.log("ids..", checkedId);
    // }

    // const handleChangeChecked = (event: any) => {
    //     const isChecked = event.target.checked;
    //     if (isChecked) {
    //         setCheckedArray({ checkedArray: [...checkedArray, event.target.value] });
    //         console.log("checkedarray", checkedArray);
    //     }
    // }

    // const handleCheckboxChange = () => {
    //     dispatch(toggleCheckbox());
    // }

    // const handleCheckboxValue = (event: any) => {
    //     // dispatch(toggleCheckbox());
    //     if (event.target.checked) {
    //         dispatch(setCheckbox(event.target.value));
    //     }
    // };

    const CheckboxCards = ({ id, name }: DealMode) => {
        return (
            <FormControlLabel key={id}
                onChange={handleCheckboxChange}
                control={<Checkbox sx={{ ...style.commonColor }} />}
                label={name} value={id} checked={checkedValues.includes(id)} sx={{ ...style.checkBoxLabel }} />

            // <FormControlLabel key={id}
            //     onChange={(e) => dispatch(handleChangeChecked(id))}
            //     control={<Checkbox sx={{ ...style.commonColor }} />}
            //     label={name} value={id} sx={{ ...style.checkBoxLabel }} />
        )
    }

    const DiscountTypeCheckBox = ({ id, name }) => {
        return (
            <FormControlLabel key={id}
                onChange={handleDiscountTypeChkBox}
                control={<Checkbox sx={{ ...style.commonColor }} />}
                label={name} value={name} checked={discountCheckedValues.includes(name)} sx={{ ...style.checkBoxLabel }} />
        )
    }

    const ShortByRadioButton = ({ id, name, value }) => {
        return (
            <FormControlLabel id={id} onChange={handleShortByData} value={value} control={<Radio sx={{
                ...style.commonColor
            }} />} label={name} />
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
                                    {/* <FormControlLabel onClick={() => sortByClicksData("clicks")} value="clicks" control={<Radio sx={{
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
                                    }} />} label="Views" /> */}
                                    {
                                        shortBy.map((item, index) => {
                                            const { name, value, id } = item;

                                            return (
                                                <>
                                                    <ShortByRadioButton key={index} name={name} value={value} id={id} />
                                                </>
                                            )
                                        })
                                    }
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
                                {/* <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="% off" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="$ off" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Buy X get Y Free" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Cashback" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Reward Points" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Free Shipping" sx={{ ...style.checkBoxLabel }} />
                                <FormControlLabel control={<Checkbox sx={{ ...style.commonColor }} />} label="Competition" sx={{ ...style.checkBoxLabel }} /> */}
                                {
                                    discountType.map((item, index) => {
                                        const { name, id } = item;

                                        return (
                                            <>
                                                <DiscountTypeCheckBox key={index} name={name} id={id} />
                                            </>
                                        )
                                    })
                                }
                            </FormGroup>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default DealsFilter