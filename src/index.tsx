import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Category from './components/Category/Category';
import ShelfHeader from './components/ShelfHeader/ShelfHeader';
import ProductShelf from './components/ProductShelf/ProductShelf';
import PartnerBanner from './components/PartnerBanner/PartnerBanner';
import TitleContainer from './components/TitleContainer/TitleContainer';
import BrandNav from './components/BrandNav/BrandNav';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Category />
    <ShelfHeader />
    <ProductShelf />
    <PartnerBanner />
    <TitleContainer />
    <ProductShelf />
    <PartnerBanner />
    <BrandNav />
    <TitleContainer />
    <ProductShelf />
    <Newsletter />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
