import { AppBar, Box, Button, Grid, Link, Tab, Tabs, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { theme } from '../../theme/theme'
import { NavLink } from 'react-router-dom'
import { Deal } from '../../@types/deals'
import { getDealsAndCoupons, getFiltersData } from '../../services/DealsAndCouponsApi'
import PopularSalesCard from '../popular-sales/PopularSalesCard'
import PopularCouponsCard from '../popular-coupons/PopularCouponsCard'
import ButtonComp from '../common-components/Button'
import { DealMode } from '../../@types/DealMode'

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
    const [dealsApiData, setDealsApiData] = useState<Deal[]>([]);
    const [allItamCount, setAllItemCount] = useState();
    const [salesCount, setSalesCount] = useState();
    const [couponsCount, setCouponsCount] = useState();
    let [pageNumber, setPageNumber] = useState<number>(1);
    const [productTypeValue, setProductTypeValue] = React.useState('all');
    const [sortBy, setSortBy] = useState(namesSortBy)
    const [dealModes, setDealModes] = useState<DealMode[]>(namesDealModes)
    // const [temp, setTemp] = useState(1)

    const url: string = `deal/deals?v=1704457556025&shortBy=${namesSortBy}&limit=36&page=${pageNumber}&updateViewCount=true&t=1704457556023`;

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        if (newValue === "all") {
            setProductTypeValue(newValue);
            getDealsAndCoupons(url).then((res) => {
                // setAllItemCount(res.data.total);
                // setSalesCount(res.data.sellCount);
                // setCouponsCount(res.data.couponCount);
                setDealsApiData(res.data.items);
            });
        } else if (newValue === "sale") {
            setProductTypeValue(newValue);
            getFiltersData(url, namesSortBy, newValue).then((res) => {
                // setAllItemCount(res.data.total);
                // setSalesCount(res.data.sellCount);
                // setCouponsCount(res.data.couponCount);
                setDealsApiData(res.data.items);
                console.log("sale", dealsApiData)
            });
        } else if (newValue === "coupon") {
            setProductTypeValue(newValue);
            getFiltersData(url, namesSortBy, newValue).then((res) => {
                // setAllItemCount(res.data.total);
                // setSalesCount(res.data.sellCount);
                // setCouponsCount(res.data.couponCount);
                setDealsApiData(res.data.items);
            });
        }
        setProductTypeValue(newValue)
    }

    const dealsHandleClick = () => {
        setPageNumber(pageNumber += 1);
    }

    console.log("deals usestate", namesDealModes);

    const applyFilters = () => {
        let updatedList = dealsApiData;

        // if (dealModes) {
        //     updatedList = updatedList.filter((item) => item.productModes[0].id === dealModes);
        // }
        // console.log("updatelist", updatedList);

        const dealsCheck = dealModes.filter(item => item.checked).map(item => item.name.toLowerCase());

        if (dealsCheck.length) {
            updatedList = updatedList.filter((item) =>
                dealsCheck.includes(item.id))
        }
        console.log("updatedList", updatedList);
        setDealModes(updatedList);
    }

    // const handleChangeChecked = (namesDealModes: any) => {
    //     const changeCheckbox = namesDealModes.map((item) => {
    //         item.id === id ? {...item, }
    //     })
    // }



    const buttonClick = (e: any, btnName: string) => {
        if (e) {
            if (e.type == "click") {
                let a: any = document.getElementById(btnName);
                a.style.text = theme.palette.text.primary;
                a.style.backgroundColor = theme.palette.background.paper;
            }
        }

    }

    if (namesSortBy != sortBy) {
        if (sortBy != namesSortBy) {
            setSortBy(namesSortBy)
        }
    }


    useEffect(() => {
        if (pageNumber === 1) {
            getDealsAndCoupons(url).then((res) => {
                setAllItemCount(res.data.total);
                setSalesCount(res.data.sellCount);
                setCouponsCount(res.data.couponCount);
                setDealsApiData(res.data.items);
                console.log("default ", sortBy)
            });
        } else {
            getDealsAndCoupons(url).then((res) => {
                const loadMorePageData = dealsApiData;
                console.log("load 1", dealsApiData);

                setDealsApiData(loadMorePageData.concat(res.data.items));
            })
        }
        setSortBy(namesSortBy)
        setDealModes(namesDealModes)
    }, [pageNumber])

    useEffect(() => {

        if (productTypeValue === "all") {
            // applyFilters();
            setSortBy(namesSortBy)
            getDealsAndCoupons(url).then((res) => {
                setAllItemCount(res.data.total);
                setSalesCount(res.data.sellCount);
                setCouponsCount(res.data.couponCount);
                setDealsApiData(res.data.items);
                setDealModes(namesDealModes);
                console.log("default ", sortBy)
                console.log("dealsMode 1", namesDealModes);
            });

            // getFiltersData(url, namesSortBy).then((res) => {
            //     setAllItemCount(res.data.total);
            //     setSalesCount(res.data.sellCount);
            //     setCouponsCount(res.data.couponCount);
            //     setDealsApiData(res.data.items);
            //     console.log("default ", sortBy)
            // });

        } else {
            // applyFilters();
            setSortBy(namesSortBy)
            getFiltersData(url, namesSortBy, productTypeValue).then((res) => {
                setAllItemCount(res.data.total);
                setSalesCount(res.data.sellCount);
                setCouponsCount(res.data.couponCount);
                setDealsApiData(res.data.items);
                setDealModes(namesDealModes);
                console.log("dealsMode 2", namesDealModes);
            });
        }
    }, [sortBy, namesDealModes])

    // useEffect(() => {
    //     // if (pageNumber === 1) {
    //     setSortBy(namesSortBy)
    //     getFiltersData(url, namesSortBy, productTypeValue).then((res) => {
    //         setAllItemCount(res.data.total);
    //         setSalesCount(res.data.sellCount);
    //         setCouponsCount(res.data.couponCount);
    //         setDealsApiData(res.data.items);
    //         console.log("default ", sortBy)

    //     });
    //     // } else {
    //     //     getFiltersData(url, namesSortBy, productTypeValue).then((res) => {
    //     //         const loadMorePageData = dealsApiData;
    //     //         console.log("load 2", dealsApiData);

    //     //         setDealsApiData(loadMorePageData.concat(res.data.items));
    //     //     })
    //     // }
    //     // setDealModes(namesDealModes)
    // }, [sortBy, productTypeValue])

    return (
        <>
            <Box className="product-details" sx={{ flexShrink: 1, width: "100%", ml: "16px" }}>
                <Box className="show-deals-type-filter" sx={{ display: "block", pb: "24px" }}>

                    <Box className="main-tabs" sx={{ width: '100%', borderBottom: "1px solid #dee2e6", }}>
                        <Tabs
                            value={productTypeValue}
                            aria-label="secondary tabs example"
                            onChange={handleChange}
                            textColor='primary'
                            sx={{
                                span: { display: "none" },
                                '& .Mui-selected': {
                                    background: theme.palette.background.paper,
                                },
                                "& button": {
                                    textTransform: "none"
                                },
                            }}

                        >
                            <Tab value="all" label={`All (${allItamCount})`} sx={{ background: "rgba(0,0,0,.05)", color: theme.palette.text.secondary, width: "180px" }} />
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
                        dealsApiData.map((item) => {

                            const { NZWide, category, clicks, endDate, id, locations, name, productImages, productModes, productType, stores, couponCode } = item;

                            {
                                return (

                                    !couponCode || productType === "sale" ?

                                        <PopularSalesCard dealsLgSize={4} key={id} name={name} clicks={clicks} category={category} productImages={productImages} id={''} stores={stores} locations={locations} NZWide={NZWide} endDate={endDate} productType={productType} productModes={productModes} />

                                        :

                                        <PopularCouponsCard circleBottomClass="254px" dealsLgSize={4} key={id} name={name} category={category} productImages={productImages}
                                            id={id} NZWide={NZWide} clicks={clicks} productType={productType} productModes={productModes}
                                            endDate={endDate} stores={stores} locations={locations} />

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
                {
                    pageNumber === 2 ? <></> :
                        <Box className="btn-div" sx={{ pt: "40px", textAlign: "center", m: "auto" }}>
                            <ButtonComp func_call={dealsHandleClick} name="Load more"></ButtonComp>
                        </Box>
                }
            </Box >
        </>
    )
}

export default DealsProductResult
