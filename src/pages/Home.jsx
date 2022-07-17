import React from 'react'
import Navbar from '../components/Navbar'
import Anouncement from '../components/Anouncement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products  from '../components/Products'
import Newsletter from "../components/Newsletter";
import Footer from '../components/Footer';

/**
 * It returns a div that contains the Anouncement, Navbar, Slider, Categories, Products, Newsletter,
 * and Footer components
 */
const Home = () => {    
  return (
    <div>
        <Anouncement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>

    </div>
  )
}

export default Home