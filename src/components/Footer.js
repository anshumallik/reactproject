import React from "react";

const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer className="main-footer">
            <strong>Copyright ©
                {year}
                </strong> All rights reserved.

        </footer>
    )
}

export default Footer;