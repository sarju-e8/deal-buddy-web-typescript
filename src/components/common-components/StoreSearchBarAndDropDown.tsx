import { Box, Container, FormControl, Button, Menu, Grid, Input, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { theme } from '../../theme/theme';
import { useDispatch, useSelector } from 'react-redux';
import { searchValue, discountValue, categoryValue, selectedDiscountType, selectedCategoryName } from '../../redux/features/StoreFilterSlice';
import { getDiscountType } from '../../services/DealsAndCouponsApi';
import { getAllCategoryList } from '../../services/CategoryApi';
import { storePageNumber } from '../../redux/features/dealModeSlice';

interface IProps {
    title: string;
    subTitle?: string;
}

interface FilterProps {
    id: string;
    name: string;
}

const StoreSearchBarAndDropDown = ({ title, subTitle }: IProps) => {
    // const [age, setAge] = React.useState<string | number>('');
    // const [open, setOpen] = React.useState(false);


    // const handleChange = (event: SelectChangeEvent<typeof age>) => {
    //     setAge(event.target.value);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    const [discountTypeList, setDiscountTypeList] = useState<FilterProps[]>([]);
    const [categoryList, setCategoryList] = useState<FilterProps[]>([]);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [categoryAnchorEl, setCategoryAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const categoryOpen = Boolean(categoryAnchorEl);

    const dispatch = useDispatch();

    const storeDiscountType = useSelector((state: any) => state.searchFilters.discountType);
    const storeCategoryName = useSelector((state: any) => state.searchFilters.categoryName);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const categoryHandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setCategoryAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const categoryHandleClose = () => {
        setCategoryAnchorEl(null);
    };

    const handleDiscountTypeValue = (id: string, name: string) => {
        dispatch(discountValue(id));
        dispatch(selectedDiscountType(name));
        dispatch(storePageNumber(1));
        // setAnchorEl(null);
        handleClose();
    }

    const handleCategoryValue = (id: string, name: string) => {
        dispatch(categoryValue(id));
        dispatch(selectedCategoryName(name));
        dispatch(storePageNumber(1));
        categoryHandleClose();
    }

    const handleCommonApplyAllFilter = (filter: string) => {
        if (filter === "All Discount Type") {
            console.log("All Discount applied")
            dispatch(discountValue(""));
            dispatch(selectedDiscountType("Discount Type"));
            dispatch(storePageNumber(1));
            handleClose();
        } else {
            console.log("All Categories applied")
            dispatch(categoryValue(""));
            dispatch(selectedCategoryName("Categories"));
            dispatch(storePageNumber(1));
            categoryHandleClose();
        }
    }

    let interval;

    const handleOnChangeSearch = (e) => {
        clearTimeout(interval);

        interval = setTimeout(() => {
            dispatch(searchValue(e.target.value));
        }, 1000);
    };

    useEffect(() => {
        getDiscountType().then((res) => {
            setDiscountTypeList(res.data.items);
        });

        var params = {
            where: "",
            status: "active",
            orderBy: "ASC",
        }

        getAllCategoryList(params).then((res) => {
            setCategoryList(res.data.items);
        });

    }, [])

    return (
        <Container maxWidth='lg' sx={{ py: "40px" }}>
            <Box className="all-stores-title" sx={{ position: "relative", zIndex: 1, }}>
                <Typography sx={{ ...theme.typography.h2, mb: "8px" }}>{title}</Typography>
                <Typography sx={{ fontSize: "20px", fontWeight: 400, lineHeight: "32px", mb: "24px" }}>{subTitle}</Typography>
            </Box>

            {/* <Box className="input-field-btn" sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
                <Grid container>
                    <Grid item lg={8} md={6} sm={4} xs={12}>
                        <TextField
                            className="Mui-disabled"
                            placeholder='Search Store'
                            sx={{
                                // fieldset: { border: "none", outline: "none" },
                                bgcolor: "white", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.15)!important",
                                "& input::placeholder": {
                                    color: theme.palette.text.disabled
                                }
                            }}
                            onChange={handleOnChangeSearch}
                            fullWidth
                            id="fullWidth"
                            InputProps={{
                                sx: {
                                    '&: hover fieldset': { border: "1px solid rgba(0,0,0,0.15)!important" },
                                    '&:focus-within fieldset, &:focus-visible fieldset': { border: "1px solid Frgba(0,0,0,0.15)!important" },
                                    pr: "10px",
                                    color: theme.palette.common.black,
                                },
                                style: { height: 50, borderRadius: "10px" },
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <SearchIcon sx={{ color: theme.palette.common.black }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>

                    <Grid item lg={2} md={3} sm={3} xs={12}>
                        <FormControl sx={{ ml: "16px", minWidth: 190, }}>
                            <InputLabel id="demo-controlled-open-select-label" sx={{ color: theme.palette.common.black }}>
                                Discount Type</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                sx={{ height: "50px", borderRadius: "10px" }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

               

                    <Grid item lg={2} md={3} sm={3} xs={12}>
                        <FormControl sx={{ ml: "28px", minWidth: 160, }}>
                            <InputLabel id="demo-controlled-open-select-label" sx={{ textAlign: "center", color: theme.palette.common.black }}>
                                Categories</InputLabel>
                            <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={open}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                value={age}
                                label="Age"
                                onChange={handleChange}
                                sx={{ height: "50px", borderRadius: "10px" }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item lg={2} md={3} sm={3} xs={12}>
                            <FormControl sx={{ ml: "16px", minWidth: 120, }} size="small">
                                <InputLabel id="demo-select-small-label">Age</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                    sx={{height:"50px", borderRadius:"16px"}}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                </Grid>
            </Box> */}

            <Box
                component={"div"}
                sx={{
                    height: "auto",
                    width: "100%",
                    // p: "2rem 0",
                    // mt: { xl: "2rem" },
                }}
            >
                <Box
                    component={"div"}
                    sx={{
                        height: "auto",
                        width: "auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <FormControl sx={{ height: "auto", width: "761px" }}>
                        <Input
                            placeholder="Search Store"
                            onChange={handleOnChangeSearch}
                            endAdornment={
                                <InputAdornment position="end">
                                    <SearchIcon sx={{ color: theme.palette.common.black }} />
                                </InputAdornment>
                            }
                            disableUnderline={true}
                            sx={{
                                height: "3rem",
                                width: "100%",
                                m: "1rem 0rem",
                                // border: `1px solid ${theme.palette.grey[300]}`,
                                border: "1px solid rgba(0,0,0,0.15)",
                                borderRadius: "10px",
                                p: "0 1rem",
                                textAlign: "center",
                                fontSize: theme.typography.subtitle1.xl,
                                display: "flex",
                                alignItems: "center",
                                color: "black"
                            }}
                        ></Input>
                    </FormControl>

                    <Button
                        variant="outlined"
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={{
                            height: "3rem",
                            width: "191px",
                            // border: `1px solid ${theme.palette.grey[300]}`,
                            border: "1px solid rgba(0,0,0,0.15)",
                            borderRadius: "10px",
                            "&:hover": { bgcolor: "transparent", border: `1px solid rgba(0,0,0,0.15)` }
                        }}
                    >
                        <Typography sx={{ color: theme.palette.common.black, textTransform: "capitalize" }}>
                            {storeDiscountType == "" ? `Discount Type` : `${storeDiscountType}`}
                        </Typography>
                        <ArrowDropDownIcon
                            sx={{ ml: { xl: "1rem" }, color: theme.palette.common.black }}
                        />
                    </Button>

                    <Menu
                        id="basic-menu"
                        // className='muipaper-root'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            sx: {
                                backgroundColor: theme.palette.common.white,
                            },
                        }}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem
                            sx={{ color: theme.palette.common.black }}
                            onClick={() => {
                                // dispatch(discountValue("")); dispatch(selectedDiscountType("All Discount Type"));
                                // dispatch(storePageNumber(1));
                                // handleClose();
                                handleCommonApplyAllFilter("All Discount Type")
                            }}>
                            All Discount Type
                        </MenuItem>
                        {
                            discountTypeList.map((item) => {
                                const { id, name } = item;
                                return (
                                    <MenuItem key={id} sx={{ color: theme.palette.common.black }} value={id}
                                        onClick={() => handleDiscountTypeValue(id, name)}>{name}</MenuItem>
                                )
                            })
                        }
                    </Menu>

                    <Button
                        variant="outlined"
                        id="basic-button"
                        aria-controls={categoryOpen ? 'basic-category-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={categoryOpen ? 'true' : undefined}
                        onClick={categoryHandleClick}
                        sx={{
                            height: "3rem",
                            width: "170px",
                            // border: `1px solid ${theme.palette.grey[300]}`,
                            border: "1px solid rgba(0,0,0,0.15)",
                            borderRadius: "10px",
                            "&:hover": { bgcolor: "transparent", border: `1px solid rgba(0,0,0,0.15)` }
                        }}
                    >
                        <Typography sx={{ color: theme.palette.common.black, textTransform: "capitalize" }}>
                            {storeCategoryName == "" ? `Categories` : `${storeCategoryName}`}
                        </Typography>
                        <ArrowDropDownIcon
                            sx={{ ml: { xl: "1rem" }, color: theme.palette.common.black }}
                        />
                    </Button>

                    <Menu
                        id="basic-category-menu"
                        className='muipaper-root'
                        anchorEl={categoryAnchorEl}
                        open={categoryOpen}
                        onClose={categoryHandleClose}
                        PaperProps={{
                            sx: {
                                backgroundColor: theme.palette.common.white,
                            },
                        }}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}

                    >
                        <MenuItem
                            sx={{ color: theme.palette.common.black }}
                            onClick={() => {
                                // dispatch(categoryValue("")); dispatch(selectedCategoryName("All Categories"));
                                // dispatch(storePageNumber(1));
                                // categoryHandleClose();
                                handleCommonApplyAllFilter("All Categories")
                            }}>All Categories</MenuItem>
                        {
                            categoryList.map((item) => {
                                const { id, name } = item;
                                return (
                                    <>
                                        <MenuItem key={id} sx={{ color: theme.palette.common.black }} value={id}
                                            onClick={() => handleCategoryValue(id, name)}>{name}</MenuItem>
                                    </>
                                )
                            })
                        }
                    </Menu>
                </Box>
            </Box>
        </Container>
    )
}

export default StoreSearchBarAndDropDown
