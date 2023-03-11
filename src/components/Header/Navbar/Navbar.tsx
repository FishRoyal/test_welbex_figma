import React from "react";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>Услуги</div>
            <div>Виджеты</div>
            <div>Интеграции</div>
            <div>Кейсы</div>
            <div className="hideOnMobile">Сертификаты</div>
        </div>
    )
}

export default Navbar;