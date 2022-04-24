import React from "react";

const Common = (props) =>{
return (
    <div className={props.classVal}>
        <span className="info-box-icon elevation-1"><i className={props.icon}></i></span>
        <div className="info-box-content">
            <span className="info-box-text">{props.title}</span>
            <span className="info-box-number">{props.plan}</span>
        </div>
    </div>
)
}

export default Common;