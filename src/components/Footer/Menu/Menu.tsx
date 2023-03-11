import React from "react";
import "./Menu.css"

const Menu = () => {
    return (
        <div className="sectionFooter">
            <div className="headerFooter">МЕНЮ</div>
            <div className="horAlign">
                <div className="subSectionFooter" style={{display: "flex"}}>
                    <div className="itemFooter">Расчет стоимости</div>
                    <div className="itemFooter">Услуги</div>
                    <div className="itemFooter">Виджеты</div>
                    <div className="itemFooter">Интеграции</div>
                    <div className="itemFooter">Наши клиенты</div>
                </div>
                <div className="subSectionFooter desktop">
                    <div className="itemFooter">Кейсы</div>
                    <div className="itemFooter">Благодарственные письма</div>
                    <div className="itemFooter">Сертификаты</div>
                    <div className="itemFooter">Блог на Youtube</div>
                    <div className="itemFooter">Вопрос / Ответ</div>
                </div>
                <div className="subSectionFooter mobile">
                    <div className="itemFooter">Благодарность клиентов</div>
                    <div className="itemFooter">Кейсы</div>
                    <div className="itemFooter">Сертификаты</div>
                    <div className="itemFooter">Блог на Youtube</div>
                    <div className="itemFooter">Вопрос / Ответ</div>
                </div>
            </div>
            
        </div>
    )
}

export default Menu;