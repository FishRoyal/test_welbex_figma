import React, { useCallback } from "react";
import "./Contacts.css"

const Contacts = ({showMore}: {showMore: boolean}) => {

    const contactsClass = useCallback(() => {
        return showMore ? "contacts col footerSection" : "contacts row" 
    }, [])

    const phoneAlignClass = useCallback(() => {
        return showMore ? "phone alLeft": "phone"
    },[])

    return (
        <div className={contactsClass()}>
            {showMore ? <div className="headerFooter">КОНТАКТЫ</div> : null}
            <div className={phoneAlignClass()} style={showMore ? {margin: "5px 0", display: "block"} : {}}>+7 555 555-55-55</div>
            <div className="contactIcons" style={showMore ? {margin: "5px 0"} : {}}>
                <img className="contIcon" style={showMore ? {marginLeft: "14px"}: {}} src="/img/contacts/Telegram.svg"></img>
                <img className="contIcon" style={showMore ? {marginLeft: "14px"}: {}} src="/img/contacts/phone.svg"></img>
                <img className="contIcon" style={showMore ? {marginLeft: "14px"}: {}} src="/img/contacts/Whatsapp.svg"></img>
            </div>
            {showMore ? <div className="itemFooter">Москва, Путевой проезд 3с1, к 902</div> : null}
        </div>
    )
}

export default Contacts;