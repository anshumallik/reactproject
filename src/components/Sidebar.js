import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return(
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="text-center">
                <NavLink to="/" className="brand-link">
                    <img src="assets/images/logo.png" alt="Logo"
                     className="brand-image"/>
                </NavLink>
            </div>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image1 my-auto">
                        <img src="assets/images/user.jpg" 
                        className="img-circle elevation-2" alt="User" />
                    </div>
                    <div className="info">
                        <NavLink to="/" className="d-block"> Administrator </NavLink>

                        <div>
                            <small className="designation text-muted">
                                Superuser
                                <i className="fa fa-circle text-success ms-2"></i>
                            </small>

                        </div>
                    </div>
                </div>
               
                <nav className="mt-2">
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
                </nav>
                
            </div>
        </aside>
    )
}

export default Sidebar;