import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { mainSearchData } from '../../services/HeaderMainSearchBarApi';
import { Autocomplete, Box, Popper, Typography } from '@mui/material';
import axios from 'axios';
import { theme } from '../../theme/theme';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResultData, setSearchResultData] = useState([]);
    const [openListBox, setOpenLIstBox] = useState(false)
    const [anchorElSearch, setAnchorElSearch] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleSearchValueClose = () => {
        setAnchorElSearch(null);
        setSearchValue("");
    };

    const handleNavigateSearchDeal = (slug: string) => {
        navigate(`/deals/${slug}`);
        setSearchValue("");
        handleSearchValueClose();
    }

    let cancelTokenSource = axios.CancelToken.source();

    useEffect(() => {
        const params = {
            searchKeyword: searchValue,
            limit: 30,
        };
        cancelTokenSource = axios.CancelToken.source();
        mainSearchData(cancelTokenSource, params).then((res) => {
            if (res?.data?.items?.length > 0) {
                setSearchResultData(res.data.items);
            }
            else if ((res?.data?.items?.length == 0)) {
                setSearchResultData(res.data.items);
            }
        })

        if (searchValue) {
            setOpenLIstBox(true);
        }


        return () => {
            if (cancelTokenSource) {
                cancelTokenSource.cancel('Component unmounted');
            }
        };

    }, [searchValue]);

    return (
        <Box
            component={"div"}
            sx={{
                height: "80%",
                maxWidth: "80%",
                bgcolor: "white",
                ml: { xl: "2rem" },
                width: { xl: "auto" },
                alignItems: "center",
                display: "flex",
                borderRadius: "10px",
                outline: "none",
                fieldset: { border: "none", outline: "none" },

            }}
        >
            <SearchOutlinedIcon sx={{ ml: "10px" }} />


            <Autocomplete
                value={searchValue}
                open={openListBox}
                disableClearable
                onFocus={() => {
                    if (searchValue) {
                        setOpenLIstBox(true)
                    }
                }}

                PopperComponent={(props) => (
                    <Popper className='popper-custom' {...props} sx={{
                        "& .MuiPaper-root.MuiAutocomplete-paper": { color: "black", ml: "-32px", width: "432px", backgroundColor: `${theme.palette.common.white}!important` },
                        "& ul": { maxHeight: "390px", }
                    }}>
                        {props.children}
                    </Popper>
                )}
                onClose={() => setOpenLIstBox(false)}

                freeSolo
                id="country-select-demo"
                sx={{
                    width: "24.7rem",
                }}
                filterOptions={(options) => options}
                options={
                    searchResultData.length > 0
                        ? searchResultData
                        : [

                        ]
                }
                renderOption={(props, searchResultData) => (
                    searchValue && <Box
                        component="li"
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%", margin: "0px", padding: "0px",
                            justifyContent: "space-between !important",
                        }}
                        {...props}
                    >
                        <Box onClick={() => handleNavigateSearchDeal(searchResultData.slug)}
                            sx={{
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: theme.palette.common.black, "&:hover .deal-item-name": { color: theme.palette.primary.dark, transition: ".5s" }
                            }}>
                            <Box className="deal-img-div" sx={{ flex: "0 0 auto", width: "auto", pr: "22px" }}>
                                <Box className="deal-img" component="img" src={searchResultData.productImages[0]?.imageUrl} alt={searchResultData.id}
                                    sx={{ height: "40px", width: "40px", objectFit: "cover", display: "block" }} />
                            </Box>
                            <Box className="deal-search-details-div" sx={{ flex: "1 0 0%", pr: "22px" }}>
                                <Typography className="deal-item-name" sx={{ dispaly: "block", whiteSpace: "normal", fontSize: "14px", color: theme.palette.common.black }}>
                                    {searchResultData.name}</Typography>
                                <Typography className="deal-store-name" sx={{ dispaly: "block", whiteSpace: "normal", fontSize: "14px", color: theme.palette.text.primary }}>
                                    {searchResultData.stores[0]?.name}</Typography>
                            </Box>
                        </Box>
                    </Box>
                )
                }
                renderInput={(params) => (
                    <TextField
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        {...params}
                        placeholder="Find your perfect deal."
                        sx={{
                            "& input::placeholder": {
                                color: theme.palette.text.disabled
                            }
                        }}
                        inputProps={{
                            style: { color: theme.palette.common.black },
                            ...params.inputProps,
                            endAdornment: null,
                        }}
                    />
                )}
            />
            {
                searchValue && (
                    <CloseIcon
                        onClick={() => setSearchValue("")}
                        sx={{ mr: "10px", cursor: "pointer" }}
                    />
                )
            }
        </Box>
    )
}

export default SearchBar