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
import SubsCribe from './subscribe/SubsCribe'
import { Navbar } from 'react-bootstrap'

const Home = () => {
  return (
    <div className='home_main'>
      <div className='whatsapp_overlay'>
        <div className='whatsapp_btn bg-success d-flex align-items-center justify-content-center'>
          <i class="fa fa-whatsapp" style={{fontSize: '35px', color: 'white'}} aria-hidden="true"></i>
        </div>
      </div>
      <Navbar />
        <HomeSlider />
        <ProductsSlider />
        <HighLighted />
        <ProductCards />
        <HomeRounded />
        <ProductCards2 />
        <HomeLongImg />
        <SubsCribe />
        <Footer />
    </div>
  )
}

export default Home