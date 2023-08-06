import React from 'react'
import './assets/css/fontawesome.css'
import './assets/css/templatemo-finance-business.css'
import './assets/css/owl.css'
import './vendor/bootstrap/css/bootstrap.min.css'
import Banner from './Home/Banner'
import Callback from './Home/Callback'
import Services from './Home/Services'
import FunFacts from './Home/FunFacts'
import MoreInfo from './Home/MoreInfo'
import Footer from './Footer/Footer'

const Home = () => {
    return (
        <>
        <Banner />
        <Callback />
        <Services />
        <FunFacts />
        <MoreInfo />
        <Footer />
        </>
    )
}

export default Home