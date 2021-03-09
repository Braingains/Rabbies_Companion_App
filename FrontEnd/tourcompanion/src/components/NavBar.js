import React from "react";

const NavBar = () => {
    return(
        <header>
            <ul>
                <li className="navLink">
                    <a href="/pins">All Pins</a>
                </li>
                <li className="navLink">
                    <a href="/pins/new">Create Pin</a>
                </li>
            </ul>
        </header>
    )
}

export default NavBar;