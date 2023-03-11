import React from "react";
import Contacts from "../Contacts/Contacts";
import About from "./About/About";
import Copyright from "./Copyright/Copyright";
import Menu from "./Menu/Menu";
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <About />
            <Menu />
            <Contacts showMore={true}/>
            <Copyright />
        </div>
    )
}

export default Footer;