import React from "react";
import Contacts from "../Contacts/Contacts";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Navbar />
            <Contacts showMore={false}/>
        </div>
    )
}

export default Header;