import { AppBar, Box, Button, Grid, Link, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import { Deal } from '../../@types/deals'
import { getDeals } from '../../services/DealsAndCouponsApi'
import PopularSalesCard from '../popular-sales/PopularSalesCard'
import PopularCouponsCard from '../popular-coupons/PopularCouponsCard'
import ButtonComp from '../common-components/Button'
import { DealMode } from '../../@types/DealMode'
import { useSelector, useDispatch } from 'react-redux'
import { storePageNumber, storeProductType } from '../../redux/features/dealModeSlice'
import DealsStoreItem from './DealsStoreItem'

const style = {
    navTabs: {
        borderBottom: "1px solid #dee2e6", display: "flex", flexWrap: "wrap", pl: 0, mb: 0, listStyle: "none"
    },
    navItem: {
        // background: "rgba(0,0,0,.05)", textDecoration: "none", color: theme.palette.text.secondary
    },
    navLink: {
        color: theme.palette.text.secondary, fontWeight: 500, fontSize: "16px", lineHeight: "24px",
        padding: "10px 70px", textAlign: "center",
        cursor: "pointer", mb: "-1px", background: "none", border: "1px solid transparent", borderTopLeftRadius: "4px", borderTopRightRadius: "4px",
        // "& .nav-link a.active": { background: theme.palette.background.paper }
    }
}


const DealsProductResult = ({ namesSortBy, namesDealModes }: any) => {
    const [dealsList, setDealsList] = useState<Deal[]>([]);
    const [allItamCount, setAllItemCount] = useState(0);
    const [salesCount, setSalesCount] = useState(0);
    const [couponsCount, setCouponsCount] = useState(0);
    const [totalDealsCount, setTotalDealsCount] = useState(0);

    // const [productTypeValue, setProductTypeValue] = React.useState('all');
    const [sortBy, setSortBy] = useState(namesSortBy)
    const [storeDealModes, setStoreDealModes] = useState<DealMode[]>()
    const [storeDiscountTypes, setStoreDiscountType] = useState([])
    const [storeShortBy, setStoreShortBy] = useState();

    const storeDealMode = useSelector((state: any) => state.dealModeOptions.dealModes);
    const storeDiscountType = useSelector((state: any) => state.dealModeOptions.discountTypes);
    const shortByRadionButtonValue = useSelector((state: any) => state.dealModeOptions.shortBy);
    const pageNumber = useSelector((state: any) => state.dealModeOptions.page);
    const storeProductTypeValue = useSelector((state: any) => state.dealModeOptions.productType);
    const categorySlugValue = useSelector((state: any) => state.dealModeOptions.categorySlug);
    const currentCityValue = useSelector((state: any) => state.SelectCity.currentCity);

    // const [temp, setTemp] = useState(1)

    const limit = 5;
    var page = 1;

    var category = "";
    var store = "";
    var productType = "";
    var shortBy = "date";
    var dealModes = "";
    var discountTypes = "";

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        // alert(newValue)
        dispatch(storeProductType(newValue));
        dispatch(storePageNumber(page));

        // if (newValue === "all") {
        //     setProductTypeValue(newValue);
        //     // getDealsAndCoupons(url, shortByRadionButtonValue).then((res) => {
        //     //     // setAllItemCount(res.data.total);
        //     //     // setSalesCount(res.data.sellCount);
        //     //     // setCouponsCount(res.data.couponCount);
        //     //     setDealsList(res.data.items);
        //     // });
        // } else if (newValue === "sale") {
        //     setProductTypeValue(newValue);
        //     // getFiltersData(url, shortByRadionButtonValue, newValue).then((res) => {
        //     //     // setAllItemCount(res.data.total);
        //     //     // setSalesCount(res.data.sellCount);
        //     //     // setCouponsCount(res.data.couponCount);
        //     //     setDealsList(res.data.items);
        //     //     // console.log("sale", dealsList)
        //     // });
        // } else if (newValue === "coupon") {
        //     setProductTypeValue(newValue);
        //     // getFiltersData(url, shortByRadionButtonValue, newValue).then((res) => {
        //     //     // setAllItemCount(res.data.total);
        //     //     // setSalesCount(res.data.sellCount);
        //     //     // setCouponsCount(res.data.couponCount);
        //     //     setDealsList(res.data.items);
        //     // });
        // }
        // setProductTypeValue(newValue)
    }

    const dispatch = useDispatch();

    // console.log("page", pageNumber);

    // const url: string = `deal/deals?v=1704457556025&limit=5&page=${pageNumber}&updateViewCount=true&t=1704457556023`;

    // console.log("deals usestate", namesDealModes);

    // const applyFilters = () => {
    //     let updatedList = dealsList;

    //     // if (dealModes) {
    //     //     updatedList = updatedList.filter((item) => item.productModes[0].id === dealModes);
    //     // }
    //     // console.log("updatelist", updatedList);

    //     const dealsCheck = dealModes.filter(item => item.checked).map(item => item.name.toLowerCase());

    //     if (dealsCheck.length) {
    //         updatedList = updatedList.filter((item) =>
    //             dealsCheck.includes(item.id))
    //     }
    //     console.log("updatedList", updatedList);
    //     setDealModes(updatedList);
    // }

    // const handleChangeChecked = (namesDealModes: any) => {
    //     const changeCheckbox = namesDealModes.map((item) => {
    //         item.id === id ? {...item, }
    //     })
    // }

    const urlParams = useParams();
    const { urlSlug } = urlParams; // get category url slug
    const { urlStoreSlug } = urlParams; // get store url slug


    const location = useLocation();
    const urlsearchKeyword = new URLSearchParams(location.search).get('search');


    const buttonClick = (e: any, btnName: string) => {
        if (e) {
            if (e.type == "click") {
                let a: any = document.getElementById(btnName);
                a.style.text = theme.palette.text.primary;
                a.style.backgroundColor = theme.palette.background.paper;
            }
        }

    }

    // const storeDealMode = useSelector((state: any) => state.dealModeOptions.dealModes);
    // console.log("newDealMode", storeDealMode);
    // const iterator = useSelector((state: any) => state.dealModeOptions.dealModes.keys());
    // for (const key of iterator) {
    //     console.log("key", key);
    // }

    // const storeDiscountType = useSelector((state: any) => state.dealModeOptions.discountTypes);
    // console.log("newDiscountType", storeDiscountType);

    // const shortByRadionButtonValue = useSelector((state: any) => state.dealModeOptions.shortBy);
    // console.log("radio valeu", shortByRadionButtonValue);

    // if (namesSortBy != sortBy) {
    //     if (sortBy != namesSortBy) {
    //         setSortBy(namesSortBy)
    //     }
    // }





    useEffect(() => {

        var params = {
            page: pageNumber,
            limit: 5,
            // categorySlug: categorySlugValue,
            categorySlug: urlSlug,
            storeSlug: urlStoreSlug,
            productType: storeProductTypeValue,
            shortBy: shortByRadionButtonValue,
            dealModes: storeDealMode,
            discountTypes: storeDiscountType,
            searchKeyword: urlsearchKeyword,
        }

        if (pageNumber > 1) {
            getDeals(params, currentCityValue).then((res) => {
                const concatNewData = res.data.items;
                // setAllItemCount(res.data.total);
                setAllItemCount(res.data.sellCount + res.data.couponCount);
                setSalesCount(res.data.sellCount);
                setCouponsCount(res.data.couponCount);
                setTotalDealsCount(res.data.total);
                setDealsList(dealsList.concat(concatNewData));

                // console.log("default ", shortByRadionButtonValue)
            });
        } else {
            getDeals(params, currentCityValue).then((res) => {
                setAllItemCount(res.data.sellCount + res.data.couponCount);
                setSalesCount(res.data.sellCount);
                setCouponsCount(res.data.couponCount);
                setTotalDealsCount(res.data.total);
                setDealsList(res.data.items);

                // console.log("default ", shortByRadionButtonValue)
            });
        }

    }, [pageNumber, shortByRadionButtonValue, storeProductTypeValue, storeDealMode, storeDiscountType, urlSlug, urlStoreSlug, urlsearchKeyword, currentCityValue])

    //     if (pageNumber === 1) {
    //         getDealsAndCoupons(url, shortByRadionButtonValue).then((res) => {
    //             setAllItemCount(res.data.total);
    //             setSalesCount(res.data.sellCount);
    //             setCouponsCount(res.data.couponCount);
    //             setDealsList(res.data.items);
    //             // console.log("default ", shortByRadionButtonValue)
    //         });
    //     } else {
    //         getDealsAndCoupons(url, shortByRadionButtonValue).then((res) => {
    //             const loadMorePageData = dealsList;
    //             // console.log("load 1", dealsList);

    //             setDealsList(loadMorePageData.concat(res.data.items));
    //         })
    //     }
    //     // setSortBy(namesSortBy)
    //     setStoreShortBy(shortByRadionButtonValue)
    //     setStoreDealModes(storeDealMode)
    //     setStoreDiscountType(storeDiscountType)
    // }, [pageNumber])

    // useEffect(() => {


    //     if (productTypeValue === "all") {
    //         // applyFilters();
    //         // setSortBy(namesSortBy)
    //         setStoreShortBy(shortByRadionButtonValue)
    //         getDealsAndCoupons(url, shortByRadionButtonValue, storeDealMode, storeDiscountType).then((res) => {
    //             setAllItemCount(res.data.total);
    //             setSalesCount(res.data.sellCount);
    //             setCouponsCount(res.data.couponCount);
    //             setDealsList(res.data.items);
    //             setStoreDealModes(storeDealMode);
    //             setStoreDiscountType(storeDiscountType);
    //             // console.log("default ", shortByRadionButtonValue)
    //             // console.log("dealsMode 1", storeDealMode);
    //             // console.log("discountType all", storeDiscountType);
    //         });
    //     } else {
    //         // applyFilters();
    //         // setSortBy(namesSortBy)
    //         setStoreShortBy(shortByRadionButtonValue)
    //         getFiltersData(url, shortByRadionButtonValue, productTypeValue, storeDealMode, storeDiscountType).then((res) => {
    //             setAllItemCount(res.data.sellCount + res.data.couponCount);
    //             setSalesCount(res.data.sellCount);
    //             setCouponsCount(res.data.couponCount);
    //             setDealsList(res.data.items);
    //             setStoreDealModes(storeDealMode);
    //             setStoreDiscountType(storeDiscountType);
    //             // console.log("dealsMode 2", storeDealMode);
    //             // console.log("discountType other", storeDiscountType);
    //         });
    //     }
    // }, [shortByRadionButtonValue, storeDealMode, storeDiscountType, productTypeValue])

    // useEffect(() => {
    //     // if (pageNumber === 1) {
    //     setSortBy(namesSortBy)
    //     getFiltersData(url, namesSortBy, productTypeValue).then((res) => {
    //         setAllItemCount(res.data.total);
    //         setSalesCount(res.data.sellCount);
    //         setCouponsCount(res.data.couponCount);
    //         setDealsList(res.data.items);
    //         console.log("default ", sortBy)

    //     });
    //     // } else {
    //     //     getFiltersData(url, namesSortBy, productTypeValue).then((res) => {
    //     //         const loadMorePageData = dealsList;
    //     //         console.log("load 2", dealsList);

    //     //         setDealsList(loadMorePageData.concat(res.data.items));
    //     //     })
    //     // }
    //     // setDealModes(namesDealModes)
    // }, [sortBy, productTypeValue])

    return (
        <>
            {
                urlStoreSlug ?
                    <Box className="main-store-item-box" sx={{ pb: "24px", marginLeft: "16px" }}>
                        <DealsStoreItem />
                    </Box>
                    : <></>
            }
            <Box className="product-details" sx={{ flexShrink: 1, width: "100%", ml: "16px" }}>
                <Box className="show-deals-type-filter" sx={{ display: "block", pb: "24px" }}>

                    <Box className="main-tabs" sx={{ width: '100%', borderBottom: "1px solid #dee2e6", }}>
                        <Tabs
                            value={storeProductTypeValue}
                            aria-label="secondary tabs example"
                            onChange={handleChange}
                            textColor='primary'
                            sx={{
                                // span: { display: "none" },
                                "& .MuiTabs-indicator": { display: "none" },
                                '& .Mui-selected': {
                                    background: theme.palette.background.paper,
                                },
                                "& button": {
                                    textTransform: "none"
                                },
                            }}

                        >
                            <Tab value="" label={`All (${allItamCount})`} sx={{ background: "rgba(0,0,0,.05)", color: theme.palette.text.secondary, width: "180px" }} />
                            <Tab value="sale" label={`Sales (${salesCount})`} sx={{ background: "rgba(0,0,0,.05)", color: theme.palette.text.secondary, width: "180px" }} />
                            <Tab value="coupon" label={`Coupons (${couponsCount})`} sx={{ background: "rgba(0,0,0,.05)", color: theme.palette.text.secondary, width: "180px" }} />
                        </Tabs>
                    </Box>
                </Box>
                <Box className="product-result-list" sx={{
                    overflowY: "auto", display: "flex", flexDirection: "row", flexWrap: 'wrap', height: "125vh", width: "100%",
                    "&::-webkit-scrollbar": { display: "none" }
                }}>
                    {
                        dealsList.map((item) => {

                            const { NZWide, category, clicks, endDate, id, locations, name, productImages, productModes, productType, stores, couponCode, slug } = item;

                            {
                                return (

                                    !couponCode || productType === "sale" ?

                                        <PopularSalesCard dealsLgSize={4} key={id} name={name} clicks={clicks} category={category} productImages={productImages} id={''} stores={stores} locations={locations} NZWide={NZWide} endDate={endDate} productType={productType} productModes={productModes} slug={slug} />

                                        :

                                        <PopularCouponsCard circleBottomClass="254px" dealsLgSize={4} key={id} name={name} category={category} productImages={productImages}
                                            id={id} NZWide={NZWide} clicks={clicks} productType={productType} productModes={productModes}
                                            endDate={endDate} stores={stores} locations={locations} slug={slug} />

                                    // <>
                                    //     {productType === "sale" && <PopularSalesCard dealsLgSize={4} key={id} name={name} clicks={clicks} category={category} productImages={productImages} id={''} stores={stores} locations={locations} NZWide={NZWide} endDate={endDate} productType={productType} productModes={productModes} />}
                                    //     {productType === "coupon" && <PopularCouponsCard circleBottomClass="254px" dealsLgSize={4} key={id} name={name} category={category} productImages={productImages}
                                    //         id={id} NZWide={NZWide} clicks={clicks} productType={productType} productModes={productModes}
                                    //         endDate={endDate} stores={stores} locations={locations} />}
                                    // </>
                                )
                            }

                        })
                    }


                </Box>
                {/* {
                    allItamCount > limit ? <Box className="btn-div" sx={{ pt: "40px", textAlign: "center", m: "auto" }}>
                        <ButtonComp func_call={() => dispatch(storePageNumber(pageNumber + 1))} name="Load more"></ButtonComp>
                    </Box> :
                        <></>
                } */}

                {
                    dealsList.length < totalDealsCount ? (<Box className="btn-div" sx={{ pt: "40px", textAlign: "center", m: "auto" }}>
                        <ButtonComp func_call={() => {
                            dispatch(storePageNumber(pageNumber + 1))
                            // alert(dealsList.length)
                        }} name="Load more"></ButtonComp>
                    </Box>) : (<></>)

                }
            </Box >
        </>
    )
}

export default DealsProductResult
