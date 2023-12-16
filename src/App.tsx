import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainHeader from './components/header/MainHeader';
import MainNavbar from './components/navbar/MainNavbar';
import MainDealsCoupons from './components/best-deals-and-coupons/MainDealsCoupons';

function App() {
  return (
    <>
    <MainHeader />
    <MainNavbar />
    <MainDealsCoupons />
    </>
  );
}

export default App;
