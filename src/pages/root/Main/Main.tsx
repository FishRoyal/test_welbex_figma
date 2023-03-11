import React from "react";
import FreeConsultation from "./FreeConsultation/FreeConsultation";
import Invite from "./Invite/Invite";
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
            <Invite />
            <FreeConsultation />
        </div>
    )
}

export default Main;