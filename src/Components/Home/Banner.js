import React from 'react'
import '../vendor/bootstrap/css/bootstrap.min.css'

const Banner = () => {
    return (
<>

        <div className="main-banner header-text" id="top">
            <div className="Modern-Slider">

                <div className="item item-1">
                    <div className="img-fill">
                        <div className="text-content text-justify">
                        <h6 style={{textShadow: '1px 3px 3px rgba(0, 0, 0, 1)'}}>Unlocking Government Efficiency, Simplifying Your Success</h6>
                        <h4 style={{fontSize: `clamp(1.25rem, -0.9375rem + 7vw, 3rem)`, color: 'white', textShadow: '5px 3px 3px rgba(0, 0, 0, 1)'}}>3 Niños Document <br />Processes Services</h4>
                        <p style={{color: 'black', fontWeight: 'bold'}}>We are your trusted partner in navigating the complexities of government interactions. Our mission is to make the bureaucratic processes effortless for you, whether it's handling applications, securing essential clearances, or ensuring smooth renewals. With our dedicated team of experts, we streamline the journey, so you can focus on your core business goals.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
    )
}

export default Banner