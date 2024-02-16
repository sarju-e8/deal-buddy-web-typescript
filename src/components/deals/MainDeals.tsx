import React, { useEffect } from 'react'
import CategorySlider from './CategorySlider'
import GetTheDealTitle from './GetTheDealTitle'
import FilterAndDealsList from './FilterAndDealsList'
import SwipeToSlide from './CategorySlider'
import { useDispatch } from 'react-redux'
import { shortByValue, storePageNumber } from '../../redux/features/dealModeSlice'

const MainDeals = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shortByValue("date"));
        dispatch(storePageNumber(1));
    })
    return (
        <>
            <CategorySlider />
            <GetTheDealTitle />
            <FilterAndDealsList />
        </>
    )
}

export default MainDeals