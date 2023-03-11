import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Effects from "./Effects/Effects";
import Main from "./Main/Main";
import "./Root.css"

const Root = () => {
    return (
        <>
            <Header />
            <Main />
            <Footer />
            <Effects />
        </>
    )
}

export default Root;