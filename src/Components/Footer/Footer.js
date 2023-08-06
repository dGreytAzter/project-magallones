import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <footer>
        <div className="container">
            <div className="row">
            <div className="col-md-4 footer-item">
                <h4>3Niños Document Processes Services</h4>
                <p style={{fontSize: '15px'}} className='text-justify'>we believe that access to government services should be effortless, and our mission is to empower you to succeed with ease.</p>
                <ul className="social-icons">
                <li><Link rel="nofollow" href="https://fb.com/" target="_blank"><i className="fa fa-facebook"></i></Link></li>
                </ul>
            </div>
            <div className="col-md-4 footer-item">
            </div>
            <div className="col-md-4 footer-item">
            <h4>Office Hours & Contact #</h4>
                <ul className="text-white">
                <li>
                    <i className="fa fa-calendar"></i> Monday - Saturday
                </li>
                <li>
                    <i className="fa fa-clock-o"></i> 08:00 AM - 05:00 PM
                </li>
                <li>
                    <i className="fa fa-phone"></i> Smart 0928-142-0897
                </li>
                <li>
                    <i className="fa fa-phone"></i> Globe 0917-154-4522
                </li>
                <li>
                    <i className="fa fa-envelope"></i> 3ninosdocproservices@gmail.com
                </li>
                </ul>
            </div>
            </div>
        </div>
        </footer>
        
        <div className="sub-footer">
        <div className="container">
            <div className="row">
            <div className="col-sm-12">
                <p>Copyright &copy; 2023 3 Niños Document Processes Services</p>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Footer