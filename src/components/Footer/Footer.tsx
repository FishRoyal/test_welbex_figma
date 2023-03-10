import React from "react";
import Contacts from "../Contacts/Contacts";
import About from "./About/About";
import Copyright from "./Copyright/Copyright";
import Menu from "./Menu/Menu";

const Footer = () => {
    return (
        <>
            <About />
            <Menu />
            <Contacts />
            <Copyright />
        </>
    )
}

export default Footer;