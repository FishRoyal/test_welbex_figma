import React from "react";
import Primary from "../../../../components/PrimaryButton/Primary";
import ConditionsDesktop from "./ConditionsDesktop/ConditionsDesktop";
import ConditionsMobile from "./ConditionsMobile/ConditionsMobile";
import "./FreeConsultation.css"

const FreeConsultation = () => {
    return (
        <div className="consult">
            Вместе с <span className="gradiText1">бесплатной</span> <span className="gradiText2">конультацией</span> мы дарим:
            <div className="flCond">
                <ConditionsDesktop />
                <ConditionsMobile></ConditionsMobile>
            </div>
            <Primary />
        </div>
    )
}

export default FreeConsultation;