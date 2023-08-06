import React from 'react'
import Office from '../assets/images/about-image.jpg'

const BusinessInfo = () => {
    return (
        <div className="more-info about-info">
        <div className="container">
            <div className="row">
            <div className="col-md-12">
                <div className="more-info-content">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                    <div className="right-content">
                        <span>our solid background on document processing</span>
                        <h2><em>3 Niños Document Processing Services</em></h2>
                        <p className='text-justify' style={{fontSize: '18px', fontWeight: 'bold', color: 'black'}}>The passion meets innovation. We are a dynamic and forward-thinking dedicated to delivering exceptional solutions to our clients. With a relentless pursuit of excellence, we strive to make a positive impact in the industries we serve.
                        <br /><br />From our inception, we've embraced a customer-centric approach, ensuring that every interaction with us is a delightful experience.</p>
                        {/* <a href="" className="filled-button">Read More</a> */}
                    </div>
                    </div>
                    <div className="col-md-6">
                    <div className="left-image">
                        <img src={Office} alt="office" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default BusinessInfo