import { Box, Button, FormControl, Grid, Input, InputAdornment, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../theme/theme'
import { useDispatch, useSelector } from 'react-redux';
import { modalOpen, setStoreCurrentCity } from '../../redux/features/SelectCitySlice';
import { getSearchLocation } from '../../services/CityListApi';

const style = {
    hoverStyle: {
        color: theme.palette.text.primary,
        transition: ".5s"
    },
    quickOptionCityName: {
        border: "1px solid rgba(0,0,0,.15)", boxSizing: "border-box",
        fontSize: theme.typography.body2, borderRadius: "6px",
        textAlign: "center", py: "14px", cursor: "pointer",
        "&:hover": { color: theme.palette.text.primary, transition: ".5s" },
    },
}

const SelectCity = () => {
    const [searchCityList, setSearchCityList] = useState([]);
    const [searchCityValue, setSearchCityValue] = useState("");

    const quickOption = useSelector((state: any) => state.SelectCity.quickLocationData);
    const dispatch = useDispatch();

    useEffect(() => {
        var searchParams = {
            searchKeyword: searchCityValue,
            order: {
                location: 'ASC',
            },
            limit: 10,
        }

        if (searchCityValue.length > 0) {
            getSearchLocation(searchParams).then((res) => {
                setSearchCityList(res.data.items);
            });
        } else {
            setSearchCityList([]);
        }
    }, [searchCityValue])

    const currentCityValue = (cityName: string) => {
        sessionStorage.setItem("City", cityName);
    }

    let interval;

    const handleOnChangeSearch = (e) => {
        clearTimeout(interval);

        interval = setTimeout(() => {
            setSearchCityValue(e.target.value);
        }, 1000);
    };

    const handleModalClose = () => {
        dispatch(modalOpen(false));
    }

    // const handleModalClose = useCallback(() => {
    //     dispatch(modalOpen(false));
    // }, [])
    return (
        <>
            <Box className="main-select-city-div" sx={{ width: "100%", height: "auto", }}>
                <Box className="select-city-options">
                    <Box className="select-city-title" sx={{
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        color: theme.palette.common.black,
                    }}>
                        <Typography sx={{ m: 0, fontSize: theme.typography.h4, letterSpacing: "1px" }}>Select City/Town</Typography>
                        <CloseIcon onClick={handleModalClose} sx={{ cursor: "pointer", height: "24px", width: "24px" }} />
                    </Box>

                    <Box className="select-city-details">
                        <Box className="enter-city-content-div" sx={{ pt: "20px" }}>
                            <FormControl sx={{ width: "100%" }}>
                                <Input
                                    placeholder="Enter City/Town"
                                    onChange={handleOnChangeSearch}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <SearchIcon sx={{ color: theme.palette.common.black }} />
                                        </InputAdornment>
                                    }
                                    disableUnderline={true}
                                    sx={{
                                        height: "50px",
                                        width: "100%",
                                        // m: "1rem 0rem",
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
                        </Box>
                        <Link className="current-location" sx={{
                            display: "flex", alignItems: "center", py: "10px", textDecoration: "none", transition: ".5s", cursor: "pointer",
                            "&:hover .near-me-location": { ...style.hoverStyle },
                            "&:hover .current-location-title": { ...style.hoverStyle },
                        }}>
                            <NearMeOutlinedIcon className="near-me-location" sx={{ fontSize: "28px", mr: "6px", color: theme.palette.grey[500] }} />
                            <Typography className="current-location-title" sx={{ color: theme.palette.common.black }}>
                                Current Location</Typography>
                        </Link>

                        <List disablePadding sx={{ maxHeight: "170px", width: "100%", overflowY: "scroll" }}>
                            {
                                searchCityList.map((item) => {
                                    const { location, id } = item;
                                    return (
                                        <ListItem key={id} disablePadding
                                            sx={{
                                                "&:hover .city-list-icon": { ...style.hoverStyle },
                                                "&:hover .city-name": { ...style.hoverStyle }
                                            }}
                                            onClick={() => {
                                                currentCityValue(location)
                                                dispatch(setStoreCurrentCity(location))
                                                handleModalClose()
                                            }}>
                                            <ListItemButton sx={{
                                                '&.MuiButtonBase-root.MuiListItemButton-root:hover': {
                                                    backgroundColor: 'transparent',
                                                },
                                            }}>
                                                <ListItemIcon>
                                                    <FmdGoodOutlinedIcon className='city-list-icon' sx={{ color: theme.palette.grey[500] }} />
                                                </ListItemIcon>
                                                <ListItemText className="city-name" primary={location} sx={{ color: theme.palette.common.black }} />
                                            </ListItemButton>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>

                        <Box className="options" sx={{ display: "flex", flexDirection: "column" }}>
                            <Typography sx={{
                                py: "20px", fontSize: theme.typography.h6,
                            }}>Quick Options</Typography>

                            <Grid container className="option-list" spacing={1}>
                                <Grid item xl={6} md={6} sm={12} xs={12}>
                                    <Box onClick={() => {
                                        currentCityValue("")
                                        dispatch(setStoreCurrentCity(""))
                                        handleModalClose()
                                    }} sx={{ ...style.quickOptionCityName }}>
                                        NZ Wide
                                    </Box>
                                </Grid>
                                {
                                    quickOption.map((item) => {
                                        const { location, id } = item;
                                        return (
                                            <Grid item key={id} xl={6} md={6} sm={12} xs={12}>
                                                <Box onClick={() => {
                                                    currentCityValue(location)
                                                    dispatch(setStoreCurrentCity(location))
                                                    handleModalClose()
                                                }} sx={{ ...style.quickOptionCityName }}>
                                                    {location}
                                                </Box>
                                            </Grid>
                                        )
                                    })
                                }
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default SelectCity