import React from "react";

const NavBar = () => {
    return(
        <header id="headerofunorderedlist">
            <ul id="unorderedlist">
                {/* <li className="navLink">
                    <a href="/pins">All Pins</a>
                </li> */}
                <li className="navLink">
                    <a href="/pins/new"><button id="createmarker" >Create Marker</button></a>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;