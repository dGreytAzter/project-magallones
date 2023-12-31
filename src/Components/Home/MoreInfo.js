import React from 'react'
import { Link } from 'react-router-dom'
import moreInfo from '../assets/images/more-info.jpg'

const MoreInfo = () => {
    return (
        <div class="more-info">
            <div class="container">
                <div class="row">
                <div class="col-md-12">
                    <div class="more-info-content">
                    <div class="row">
                        <div class="col-md-6">
                        <div class="left-image">
                            <img src={moreInfo} alt="more-info" />
                        </div>
                        </div>
                        <div class="col-md-6 align-self-center">
                        <div class="right-content">
                            <span>Who we are</span>
                            <h2>Get to know about <em>our company</em></h2>
                            <p>Curabitur pulvinar sem a leo tempus facilisis. Sed non sagittis neque. Nulla conse quat tellus nibh, id molestie felis sagittis ut. Nam ullamcorper tempus ipsum in cursus<br /><br />Praes end at dictum metus. Morbi id hendrerit lectus, nec dapibus ex. Etiam ipsum quam, luctus eu egestas eget, tincidunt</p>
                            <Link to="/" class="filled-button">Read More</Link>
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

export default MoreInfo