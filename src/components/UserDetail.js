import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'



const UserDetail = () => {
    const [subsData, setSubsData] = useState([]);

    const { id } = useParams();
    console.log(id);
    const getuserDetail = async () => {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`)
            console.log(response);
            const data = await response.json();
            setSubsData(data)
        }
        catch (error) {
            console.log(error);
        }
    }
   
    useEffect(() => {
        getuserDetail();
    });
    return (
        <div className='content-wrapper'>
            <div className="container content user_detail">
                <div className='card col-md-6'>
                    <div className="card-header">
                        <div className="card-title mb-0">
                            <span className="content-header"><strong>User Detail</strong></span>
                        </div>
                    </div>
                    <div className='plan-detail pt-3'>
                        <div key={subsData.id}>
                            <div className="row">
                                <div className="col-md-3">
                                    <h6><strong>Name</strong> </h6>
                                    <h6><strong>User Name</strong></h6>
                                    <h6><strong>Email</strong> </h6>
                                    <h6><strong>Password</strong> </h6>
                                    <h6><strong>Address</strong> </h6>
                                    <h6><strong>Country</strong>  </h6>
                                    <h6><strong>Join Date</strong> </h6>
                                </div>
                                <div className="col-md-1">
                                    <h6>: </h6>
                                    <h6>:</h6>
                                    <h6>:</h6>
                                    <h6>:</h6>
                                    <h6>: </h6>
                                    <h6>: </h6>
                                    <h6>:</h6>
                                </div>
                                <div className="col-md-8">
                                    <h6>{subsData.first_name + " " + subsData.middle_name + " " + subsData.last_name}</h6>
                                    <h6> {subsData.username}</h6>
                                    <h6> {subsData.email}</h6>
                                    <h6> {subsData.password}</h6>
                                    <h6> {subsData.address}</h6>
                                    <h6> {subsData.country}</h6>
                                    <h6> {subsData.join_date}</h6>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;