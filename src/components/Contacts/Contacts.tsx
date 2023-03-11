import React, { useCallback } from "react";
import "./Contacts.css"

const Contacts = ({showMore}: {showMore: boolean}) => {

    const contactsClass = useCallback(() => {
        return showMore ? "contacts col" : "contacts row" 
    }, [])

    return (
        <div className={contactsClass()}>
            <div className="phone">+7 555 555-55-55</div>
            <div className="contactIcons">
                <img className="contIcon" src="/img/contacts/Telegram.svg"></img>
                <img className="contIcon" src="/img/contacts/phone.svg"></img>
                <img className="contIcon" src="/img/contacts/Whatsapp.svg"></img>
            </div>
        </div>
    )
}

export default Contacts;