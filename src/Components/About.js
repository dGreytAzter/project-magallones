import React from 'react'
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