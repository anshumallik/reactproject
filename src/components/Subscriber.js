import React, { useEffect, useState } from "react";


const Suscriber = () => {

    const [query, setQuery] = useState("");
    const [order, setorder] = useState("ASC");
    const [data, setData] = useState([]);
    const [users, setUsers] = useState([{}])

    const sorting = (col) => {
        if (order === "ASC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toString().toLocaleLowerCase() > b[col].toString().toLocaleLowerCase() ? 1 : -1

            );
            setData(sorted);
            setorder("DSC");
        }
        if (order === "DSC") {
            const sorted = [...data].sort((a, b) =>
                a[col].toString().toLocaleLowerCase() < b[col].toString().toLocaleLowerCase() ? 1 : -1

            );
            setData(sorted);
            setorder("ASC");
        }

    }
    useEffect(() => {
        fetch('data/users.json').then((res) => res.json()).then((data) => {
            console.log(data)
            setUsers(data)
        })

    }, []);

    const getData = async () => {
        try {
            const response = await fetch('./data/subscriptions.json');
            const actualData = await response.json();
            console.log(actualData);
            setData(actualData)
        }
        catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        getData()
    }, []);

   
    return (
        <div className="content-wrapper">

            <div className="container content">
                <div className='card rounded-0'>
                    <div className="card-header">
                        <div className="card-title mb-0">
                            <span className="content-header"><strong>Subscribed User Data List</strong></span>
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
                        
                            <table className="table table-hover table-responsive-xl" id="subsTable">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col" onClick={() => sorting("id")}>ID <i className="fas fa-sort sortings"></i></th>
                                        <th scope="col" onClick={() => sorting("user_id")}>User ID <i className="fas fa-sort sortings"></i></th>
                                        <th scope="col">Username <i className="fas fa-sort sortings"></i></th>
                                        <th scope="col" onClick={() => sorting("package")}>Package <i className="fas fa-sort sortings"></i></th>
                                        <th scope="col" onClick={() => sorting("expires_on")}>Expire on <i className="fas fa-sort sortings"></i></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {data.filter((val) => {
                                        if (query === "") {
                                            return val
                                        }
                                        else if (
                                            val.id.toString().toLocaleLowerCase().includes(query.toString().toLocaleLowerCase())
                                            || val.user_id.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())
                                            || val.package.toLocaleLowerCase().includes(query.toString().toLocaleLowerCase())
                                            || val.expires_on.toString().toLocaleLowerCase().includes(query.toLocaleLowerCase())
                                        ) {
                                            return val
                                        }
                                        return false;
                                    }).map((currElem, index) => {

                                        const user = users.find(uid => uid.id === Number(currElem.user_id));

                                        return <tr key={index}>
                                            <td>{currElem.id}</td>
                                            <td>{currElem.user_id}</td>
                                            <td>{user?.username || '-'} </td>
                                            <td>{currElem.package}</td>
                                            <td>{currElem.expires_on}</td>

                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Suscriber;