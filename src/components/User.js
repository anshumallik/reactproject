import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const User = () => {
  const [query, setQuery] = useState("");
  const [order, setorder] = useState("ASC");
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

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...user].sort((a, b) =>
        a[col].toString().toLocaleLowerCase() > b[col].toString().toLocaleLowerCase() ? 1 : -1

      );
      console.log(sorted);
      setUser(sorted);
      setorder("DSC");
      
    }
    if (order === "DSC") {
      const sorted = [...user].sort((a, b) =>
        a[col].toString().toLocaleLowerCase() < b[col].toString().toLocaleLowerCase() ? 1 : -1

      );
      setUser(sorted);
      setorder("ASC");
      

    }

  }
 
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
            <div className="search_data">
              <div className="float-end mb-3">
                <label>
                  Search:
                </label>
                <input type="search"
                  className="input-field ms-2"
                  placeholder="Search..."
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>

            </div>
            <div className="table-responsive w-100">
              {!user ? ('No data found') : (
                <table id="UserTable" className="table table-hover table-responsive-xl">
                  <thead className="table-light">
                    <tr>
                      <th onClick={() => sorting("id")}>S.N <i className="fas fa-sort sortings"></i></th>
                      <th onClick={() => sorting("first_name")}>Name <i className="fas fa-sort sortings"></i></th>
                      <th onClick={() => sorting("username")}>User Name <i className="fas fa-sort sortings"></i></th>
                      <th onClick={() => sorting("email")}>Email <i className="fas fa-sort sortings"></i></th>
                      <th onClick={() => sorting("password")}>Password <i className="fas fa-sort sortings"></i></th>
                      <th onClick={() => sorting("address")}>Address <i className="fas fa-sort sortings"></i></th>
                      <th onClick={() => sorting("country")}>Country <i className="fas fa-sort sortings"></i></th>
                      <th onClick={() => sorting("join_date")}>Join Date<i className="fas fa-sort sortings"></i></th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      user.filter((val) => {
                        if (query === "") {
                          return val
                        }
                        else if (
                          val.id.toString().toLocaleLowerCase().includes(query.toString().toLocaleLowerCase())
                          || val.first_name.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())
                          || val.middle_name.toLocaleLowerCase().includes(query.toString().toLocaleLowerCase())
                          || val.last_name.toLocaleLowerCase().includes(query.toString().toLocaleLowerCase())
                          || val.email.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())
                          || val.address.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())
                          || val.country.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())
                          || val.join_date.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())
                        ) {
                          return val
                        }
                        return false;
                      }).map((currElem) => {
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
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
