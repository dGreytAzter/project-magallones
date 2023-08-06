import React, { useState } from "react";
import "../vendor/bootstrap/css/bootstrap.css";
import SubHeader from "./SubHeader";
import { Link, Outlet } from "react-router-dom";

const Nav = () => {

    const [activeItem, setActiveItem] = useState("");

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <>
        <SubHeader />
        <header>
            <nav className="navbar navbar-expand-lg navbar-sticky">
            <div className="container">
                <Link className="navbar-brand" to="/">
                <h2>Dito ay LOGO</h2>
                </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarResponsive"
                aria-controls="navbarResponsive"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li
                    className={`nav-item ${
                        activeItem === "home" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("home")}
                    >
                    <Link className="nav-link" to="/">
                        Home
                    </Link>
                    </li>
                    <li
                    className={`nav-item ${
                        activeItem === "about" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("about")}
                    >
                    <Link className="nav-link" to="/about">
                        About Us
                    </Link>
                    </li>
                    <li
                    className={`nav-item ${
                        activeItem === "services" ? "active" : ""
                    }`}
                    onClick={() => handleItemClick("services")}
                    >
                    <Link className="nav-link" to="/services">
                        Our Services
                    </Link>
                    </li>   
                </ul>
                </div>
            </div>
            </nav>
        </header>
        <Outlet />
        </>
    );
};

export default Nav;