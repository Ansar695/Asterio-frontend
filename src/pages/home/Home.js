import React from 'react'
import "./homeslider.css"
import HomeSlider from './home-slider/HomeSlider'
import ProductsSlider from './products-slider/ProductsSlider'
import HighLighted from './high-lighted/HighLighted'
import ProductCards from './products-cards/ProductCards'
import HomeRounded from './home-rounded/HomeRounded'
import ProductCards2 from './home-cards2/ProductCards2'
import HomeLongImg from './home-long-img/HomeLongImg'
import Footer from './footer/Footer'

const Home = () => {
  return (
    <div className='home_main'>
        <HomeSlider />
        <ProductsSlider />
        <HighLighted />
        <ProductCards />
        <HomeRounded />
        <ProductCards2 />
        <HomeLongImg />
        <Footer />
    </div>
  )
}

export default Home