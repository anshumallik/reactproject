import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
                    <span className="navbar-toggler-icon d-flex align-items-center justify-content-center">
                        <i className="fa fa-bars"></i></span>
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
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item dropdown">
                            <Link id="navbarDropdown" className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre="">
                                <img className="img-circle elevation-2 img-size-32 me-1"
                                    src="assets/images/user.jpg" alt="Admin" />
                                Administrator<span className="caret"></span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown" style={{ left: 'inherit', right: '0' }}>
                                <div className="profile-sidebar">
                                    <div className="profile-userpic justify-content-center text-center">
                                        <img className="img-responsive" src="assets/images/user.jpg" alt="" />
                                    </div>
                                    <div className="profile-usertitle">
                                        <div className="profile-usertitle-name">
                                            Administrator
                                        </div>
                                        <div className="profile-usertitle-address">
                                            <i className="fa-solid fa-location-dot me-2"></i>Biratnagar, Nepal

                                        </div>
                                    </div>

                                    <div className="profile-userbuttons text-center">
                                        <button type="button" className="btn btn-success btn-sm rounded-0 me-2">
                                            Profile
                                        </button>
                                        <button type="button" className="btn btn-danger btn-sm rounded-0">
                                            Logout
                                            
                                        </button>
                                    </div>
                                </div>
                            </div>
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