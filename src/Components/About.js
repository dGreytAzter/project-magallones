import React from 'react'
import './assets/css/fontawesome.css'
import './assets/css/templatemo-finance-business.css'
import './assets/css/owl.css'
import './vendor/bootstrap/css/bootstrap.min.css'
import AboutPageHeader from './About/AboutPageHeader'
import BusinessInfo from './About/BusinessInfo'
import TeamMember from './About/TeamMember'
import FunFacts from './Home/FunFacts'
import Footer from './Footer/Footer'

const About = () => {
    return (
        <>
        <AboutPageHeader />
        <BusinessInfo />
        <TeamMember />
        <FunFacts />
        <Footer />
        </>
    )
}

export default About