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
import MainBlog from './components/blogs/MainBlog';
import LearnMore from './components/learn-more/LearnMore';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Router from './routes';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <MainHeader />
      <MainNavbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
