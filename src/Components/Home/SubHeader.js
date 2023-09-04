import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {

    const [activeItem, setActiveItem] = useState("");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="sub-header">
        <div className="container">
            <div className="row">
            <div className="col-md-8 col-xs-12">
                <ul className="left-info text-white">
                <li>
                    <i className="fa fa-clock-o"></i>Mon-Sat 08:00 AM - 05:00 PM
                </li>
                <li>
                    <i className="fa fa-phone"></i>Smart 0928-142-0897
                </li>
                <li>
                    <i className="fa fa-phone"></i>Globe 0917-154-4522
                </li>
                </ul>
            </div>
            <div className="col-md-4">
                <ul className="right-icons">
                <li>

                    <a href="https://www.fb.com" target="_blank"><i className="fa fa-facebook"></i></a>

                </li>
                {/* <li>
                    <Link to="/">
                    <i className="fa fa-twitter"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <i className="fa fa-linkedin"></i>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                    <i className="fa fa-behance"></i>
                    </Link>
                </li> */}
                </ul>
            </div>
            </div>
        </div>
        </div>
    );
};

export default SubHeader;
