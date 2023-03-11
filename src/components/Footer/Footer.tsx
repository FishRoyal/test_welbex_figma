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
            <Contacts showMore={true}/>
            <Copyright />
        </>
    )
}

export default Footer;