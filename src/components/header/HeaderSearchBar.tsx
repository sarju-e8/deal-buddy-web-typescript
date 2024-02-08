import { Box, InputAdornment, Link, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';
import React, { useEffect, useState } from 'react'
import { isWhiteSpaceLike } from 'typescript';
import { theme } from '../../theme/theme';
import { getSearchValue } from '../../services/HeaderMainSearchBarApi';
import { NavLink, useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';

const styles = {
    someTextField: {
        minHeight: 420
    }
};

const HeaderSearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchedData, setSearchedData] = useState([]);

    const searchInput = React.useRef(null);

    const [anchorElSearch, setAnchorElSearch] = useState<null | HTMLElement>(null);
    const openSearchDataMenu = Boolean(anchorElSearch);

    const navigate = useNavigate();

    const handleSearchValueClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElSearch(event.currentTarget);
    };

    const handleSearchValueClose = () => {
        setAnchorElSearch(null);
        // setSearchValue("");
    };

    // console.log(typeof (searchValue))

    let interval;

    const handleSearchValue = (event: React.KeyboardEvent | any) => {
        // clearTimeout(interval);

        // interval = setTimeout(() => {
        // event.preventDefault();
        console.log("e", event.target.value)
        setSearchValue(event.target.value);
        setAnchorElSearch(event.currentTarget);
        console.log(">>>", event.currentTarget)
        // }, 1000);
    };

    const handleNavigateSearchDeal = (slug: string) => {
        navigate(`/deals/${slug}`);
        setSearchValue("");
        handleSearchValueClose();
    }

    useEffect(() => {

        searchInput.current.focus();

        var params = {
            limit: 30,
            searchKeyword: searchValue,
            updateViewCount: true,
        }

        // interval = setTimeout(() => {
        getSearchValue(params).then((res) => {
            setSearchedData(res.data.items);
        })
        // }, 1000);

    }, [searchValue])

    return (
        <>
            {/* <Box sx={{}}>
                <TextField sx={{bgcolor: "white", border:"none", outline: 'none', borderColor: "none",  }}
                    fullWidth
                    placeholder="Find your perfect deal"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start" sx={{border: "none", outline:'none', borderRadius: 2, px:0.8, py: 0.2}}>
                                <SearchOutlinedIcon sx={{}}/>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box> */}

            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    ml: -2,
                    borderRadius: 2.5,
                    background: theme.palette.primary.main,
                }}
            >
                <TextField
                    className="Mui-disabled"
                    placeholder='Find your perfect deal'
                    sx={{
                        fieldset: { border: "none", outline: "none" },
                        bgcolor: theme.palette.common.white, borderRadius: 2.5, border: "none", outline: "none",
                        "& input::placeholder": {
                            color: theme.palette.text.disabled
                        }
                    }}
                    fullWidth
                    id="fullWidth"
                    ref={searchInput}
                    onChange={(event) => handleSearchValue(event)}
                    // onChange={handleSearchValueClick}
                    value={searchValue}
                    InputProps={{
                        sx: {
                            '&: hover fieldset': { border: 'none' }, '&:focus-within fieldset, &:focus-visible fieldset': { border: 'none' },
                            color: theme.palette.common.black,
                        },
                        style: { border: 'none', height: 43, outline: 'none' },
                        startAdornment: (
                            <InputAdornment position="start" sx={{ border: "none", outline: 'none' }}>
                                <SearchOutlinedIcon sx={{}} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position='end'>
                                {
                                    searchValue && <CloseIcon sx={{ cursor: "pointer" }}
                                        onClick={() => setSearchValue("")} />
                                }
                            </InputAdornment>
                        )
                    }}
                />
                <Menu
                    id="basic-menu"
                    // className='muipaper-root'
                    anchorEl={anchorElSearch}
                    open={openSearchDataMenu}
                    onClose={handleSearchValueClose}
                    PaperProps={{
                        sx: {
                            backgroundColor: theme.palette.common.white,
                            width: "37%", maxHeight: "60%", left: "550px !important"
                        },
                    }}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        searchedData.map((item) => {
                            const { id, name, stores, productImages, slug } = item;
                            return (
                                <MenuItem onClick={() => handleNavigateSearchDeal(slug)} key={id} sx={{ color: theme.palette.common.black, "&:hover .deal-item-name": { color: theme.palette.primary.dark, transition: ".5s" } }} value={id}
                                // onClick={() => handleDiscountTypeValue(id, name)}
                                // onClick={handleSearchValueClose}
                                >
                                    {/* <NavLink to={`/deals/${slug}`} style={{ textDecoration: "inherit", display: "flex", alignItems: "center", justifyContent: "center" }}> */}
                                    <Box className="deal-img-div" sx={{ flex: "0 0 auto", width: "auto", pr: "22px" }}>
                                        <Box className="deal-img" component="img" src={productImages[0]?.imageUrl} alt={id}
                                            sx={{ height: "40px", width: "40px", objectFit: "cover", display: "block" }} />
                                    </Box>
                                    <Box className="deal-search-details-div" sx={{ flex: "1 0 0%", pr: "22px" }}>
                                        <Typography className="deal-item-name" sx={{ dispaly: "block", whiteSpace: "normal", fontSize: "14px", color: theme.palette.common.black }}>
                                            {name}</Typography>
                                        <Typography className="deal-store-name" sx={{ dispaly: "block", whiteSpace: "normal", fontSize: "14px", color: theme.palette.text.primary }}>
                                            {stores?.[0]?.name}</Typography>
                                    </Box>
                                    {/* </NavLink> */}
                                </MenuItem>
                            )
                        })
                    }
                </Menu>
            </Box >
        </>
    )
}

export default HeaderSearchBar