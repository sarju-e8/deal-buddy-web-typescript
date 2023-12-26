import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeader from './components/header/MainHeader';
import MainNavbar from './components/navbar/MainNavbar';
import MainDealsCoupons from './components/best-deals-and-coupons/MainDealsCoupons';
import EmailSubscription from './components/email-subscription/EmailSubscription';
import MainPopularSales from './components/popular-sales/MainPopularSales';
import MainPopularCoupons from './components/popular-coupons/MainPopularCoupons';
import SponsoredAds from './components/ads-sponsor/SponsoredAds';
import MainPopularStores from './components/popular-stores/MainPopularStores';

function App() {
  return (
    <>
      <MainHeader />
      <MainNavbar />
      <MainDealsCoupons />
      <EmailSubscription />
      <MainPopularSales />
      <MainPopularCoupons />
      <SponsoredAds />
      <MainPopularStores />
    </>
  );
}

export default App;
