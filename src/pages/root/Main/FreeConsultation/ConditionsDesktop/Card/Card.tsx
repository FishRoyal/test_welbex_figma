import "./Card.css"

const Card = ({title, sub1, sub2}: {title: string, sub1: string, sub2: string}) => {
    return (
        <div className="cardCond">
            <div className="titleCond">{title}</div>
            <div className="subCond">{sub1}</div>
            <div className="subCond">{sub2}</div>
        </div>
    )
}

export default Card;