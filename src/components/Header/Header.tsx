import React from "react";
import Contacts from "../Contacts/Contacts";
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <>
            <Logo />
            <Navbar />
            <Contacts />
        </>
    )
}

export default Header;