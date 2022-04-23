import React, { useEffect, useState } from "react";
//Bootstrap and jQuery libraries

import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { Link } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);

  const getSubscriberDetail = async () => {
    try {
      const response = await fetch('./data/users.json');
      const actualData = await response.json();
      console.log(actualData);
      setUser(actualData)
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSubscriberDetail();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      $("#UserTable").DataTable();
    }, 1000)
  }, []);

  return (
    <div className="content-wrapper">

      <div className="container content">
        <div className='card rounded-0'>
          <div className="card-header">
            <div className="card-title mb-0">
              <span className="content-header"><strong>All Users</strong></span>
            </div>
          </div>
          <div className='card-body'>
            <div className="table-responsive">
              <table id="UserTable" className="table table-hover table-responsive-xl">
                <thead className="table-light">
                  <tr>
                    <th>S.N</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th>Country</th>
                    <th>Join Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    user.map((currElem) => {
                      return (
                        <tr key={currElem.id}>
                          <td>{currElem.id}</td>
                          <td>{currElem.first_name + " " + currElem.middle_name + " " + currElem.last_name}</td>
                          <td>{currElem.username}</td>
                          <td>{currElem.email}</td>
                          <td>{currElem.password}</td>
                          <td>{currElem.address}</td>
                          <td>{currElem.country}</td>
                          <td>{currElem.join_date}</td>
                          <td>
                            
                            {(currElem.active === '1') ? (
                              <span className="badge bg-success">Active</span>) : (
                                <span className="badge bg-warning">Inactive</span>
                            )}
                            
                            
                          </td>
                          <td>
                            <button className="btn view-btn">
                              <Link to={`/user-detail/${currElem.id}`}>View</Link>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
