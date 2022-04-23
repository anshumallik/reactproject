import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'



const UserDetail = () => {
    const [subsData, setSubsData] = useState([]);
    const { id } = useParams();
    // console.log(id);
    const getuserDetail = async () => {
        try {
            const response = await fetch(`data/users.json/${id}`,{
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
            // const response = await fetch(`data/users.json/${id}`);
            const data = await response.json();
            console.log(data);
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
                            <span className="content-header">User Name</span>
                        </div>
                    </div>
                    <div className='plan-detail pt-3'>
                        <div key={subsData.id}>
                            <h6><strong>Package</strong> : {subsData.first_name}</h6>
                            <h6><strong>Expiry Date</strong> : {subsData.last_name}</h6>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;