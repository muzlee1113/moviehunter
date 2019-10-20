import React from "react";

function Header(props) {
    return (<>
        <a href="/"><div className="header_container">
            <div className="bigName"><span><img className="logo mr-3" src={process.env.PUBLIC_URL+"/images/logo.png"} alt="logo"/></span>movie hunter</div>
        </div></a>
    </>)
}

export default Header


