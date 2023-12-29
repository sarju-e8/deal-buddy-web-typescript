import React from 'react'
import MainDealsCoupons from '../best-deals-and-coupons/MainDealsCoupons'
import EmailSubscription from '../email-subscription/EmailSubscription'
import MainPopularSales from '../popular-sales/MainPopularSales'
import MainPopularCoupons from '../popular-coupons/MainPopularCoupons'
import SponsoredAds from '../ads-sponsor/SponsoredAds'
import LearnMore from '../learn-more/LearnMore'
import MainPopularStores from '../popular-stores/MainPopularStores'
import MainBlog from '../blogs/MainBlog'

const Home = () => {
    return (
        <>
            <MainDealsCoupons />
            <EmailSubscription />
            <MainPopularSales />
            <MainPopularCoupons />
            <SponsoredAds />
            <MainPopularStores />
            <EmailSubscription />
            <MainBlog />
            <LearnMore />
        </>
    )
}

export default Home