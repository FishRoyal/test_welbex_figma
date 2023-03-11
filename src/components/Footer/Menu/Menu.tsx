import React from "react";
import "./Menu.css"

const Menu = () => {
    return (
        <div className="sectionFooter">
            <div className="headerFooter">МЕНЮ</div>
            <div className="horAlign">
                <div className="subSectionFooter" style={{display: "flex"}}>
                    <div className="itemFooter hov">Расчет стоимости</div>
                    <div className="itemFooter hov">Услуги</div>
                    <div className="itemFooter hov">Виджеты</div>
                    <div className="itemFooter hov">Интеграции</div>
                    <div className="itemFooter hov">Наши клиенты</div>
                </div>
                <div className="subSectionFooter desktop">
                    <div className="itemFooter hov">Кейсы</div>
                    <div className="itemFooter hov">Благодарственные письма</div>
                    <div className="itemFooter hov">Сертификаты</div>
                    <div className="itemFooter hov">Блог на Youtube</div>
                    <div className="itemFooter hov">Вопрос / Ответ</div>
                </div>
                <div className="subSectionFooter mobile">
                    <div className="itemFooter hov">Благодарность клиентов</div>
                    <div className="itemFooter hov">Кейсы</div>
                    <div className="itemFooter hov">Сертификаты</div>
                    <div className="itemFooter hov">Блог на Youtube</div>
                    <div className="itemFooter hov">Вопрос / Ответ</div>
                </div>
            </div>
            
        </div>
    )
}

export default Menu;