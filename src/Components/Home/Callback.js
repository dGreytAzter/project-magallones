import React from 'react'
import { Link } from 'react-router-dom'

const Callback = () => {
    return (
        <div class="request-form">
            <div class="container">
                <div class="row">
                <div class="col-md-8">
                    <h4>Request a call back right now ?</h4>
                    <span>Mauris ut dapibus velit cras interdum nisl ac urna tempor mollis.</span>
                </div>
                <div class="col-md-4">
                    <Link to="/contact" class="border-button">Contact Us</Link>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Callback