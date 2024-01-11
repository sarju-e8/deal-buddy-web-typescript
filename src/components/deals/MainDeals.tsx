import React from 'react'
import CategorySlider from './CategorySlider'
import GetTheDealTitle from './GetTheDealTitle'
import FilterAndDealsList from './FilterAndDealsList'
import SwipeToSlide from './CategorySlider'

const MainDeals = () => {
    return (
        <>
            <CategorySlider />
            <GetTheDealTitle />
            <FilterAndDealsList />
        </>
    )
}

export default MainDeals