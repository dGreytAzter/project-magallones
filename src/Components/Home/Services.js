import React from 'react'
import { Link } from 'react-router-dom'
import Service01 from '../assets/images/service_01.jpg'
import Service02 from '../assets/images/service_02.jpg'
import Service03 from '../assets/images/service_03.jpg'

const Services = () => {
    return (
        <div className="services">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="section-heading text-justify">
                <h2 className='text-center'><em>Our Services</em></h2>
                <span>At 3 Niños Document Processes Services, we take pride in providing a comprehensive range of solutions designed to simplify your interactions with the government. Our dedicated team is committed to making your experience seamless and stress-free. Whether you need assistance with business applications, securing vital clearances, or smooth renewals, we've got you covered.</span>

                <span>With years of expertise and a deep understanding of government processes, we navigate the complexities on your behalf, so you can focus on what matters most – achieving your goals. Our personalized approach ensures that every client receives the attention they deserve, and our commitment to excellence guarantees efficient and reliable service.</span>
                </div>
            </div>
            <div className="col-md-4 text-justify">
                <div className="service-item">
                <img src={Service01} alt="service01" />
                <div className="down-content">
                    <h4>Application Services</h4>
                    <p>Simplify Your Government Applications! We handle everything from business permits to tax filings. Focus on your business while we navigate the paperwork for you. Fast, reliable, and hassle-free service to kickstart your entrepreneurial journey.</p>
                    <Link to="/" className="filled-button">Read More</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-justify">
                <div className="service-item">
                <img src={Service02} alt="service02" />
                <div className="down-content">
                    <h4>Clearance Assistance</h4>
                    <p>Clearance Made Easy! Obtain your vital documents stress-free with our expert assistance. From PSA-authenticated certificates to estate tax clearances, we've got you covered. Say goodbye to long queues and hello to convenience!</p>
                    <Link to="/" className="filled-button">Read More</Link>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-justify">
                <div className="service-item">
                <img src={Service03} alt="service03" />
                <div className="down-content">
                    <h4>Renewal Solutions</h4>
                    <p>Renew with Confidence! Let us handle your permits and licenses' renewals effortlessly. Stay compliant without the headache. <br /> Our team ensures timely and smooth renewals, so you can keep your focus on growing your business.</p>
                    <Link to="/" className="filled-button">Read More</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Services