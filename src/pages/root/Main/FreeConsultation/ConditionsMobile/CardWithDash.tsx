import "./CardWithDash.css"

const CardWithDash = ({text}: {text: string}) => {
    return (
        <div className="cardWithDash">
            <div className="dash"></div>
            <div className="cardWText">{text}</div>
        </div>
    )
}

export default CardWithDash;