import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="hov">Услуги</div>
            <div className="hov">Виджеты</div>
            <div className="hov">Интеграции</div>
            <div className="hov">Кейсы</div>
            <div className="hideOnMobile hov">Сертификаты</div>
        </div>
    )
}

export default Navbar;