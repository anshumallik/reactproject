import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
const Navbar = () => {
    let date = new Date().toLocaleDateString();


    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(UpdateTime, 1000);
    return (
        <nav className="navbar mainnav navbar-expand-lg navbar-light bg-light sticky-top">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon d-flex align-items-center justify-content-center">
                    <i class="fa fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link me-3" to="/">Dashboard</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">{date} <span className="ms-2">{ctime}</span></NavLink>
                        </li>
                        

                    </ul>
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <NavLink to="/" activeclassname="active" className="nav-link">
                                <i className="nav-icon fa-solid fa-gauge iCheck"></i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/users" activeclassname="active" className="nav-link">
                                <i className="nav-icon fa-solid fa-user iCheck"></i>
                                <p>Users List</p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink to="/subs" activeclassname="active" className="nav-link">
                                <i className="nav-icon fa-solid fa-user iCheck"></i>
                                <p>Subscription Detail List</p>
                            </NavLink>
                        </li>



                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;