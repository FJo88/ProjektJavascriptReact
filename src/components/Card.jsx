import { useSelector} from "react-redux"

const Card = (props) => {
    let value1 = props.cardnumber1;
    let value2 = props.cardnumber2;
    let value3 = props.cardnumber3;
    let value4 = props.cardnumber4;
    let cardvendor = "";
    const { holder} = useSelector((state) => state.cardList);

    if(props.vendor ==="Visa"){
        cardvendor = "visa";
    }
    else if(props.vendor === "Master"){
        cardvendor = "mastercard"
    }
    else{
        cardvendor = "american"
    }
    let source = "images/"+cardvendor+".png"
    
    return ( 
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-inner">
                        <div className={`front${props.color}`} id="front">
                            <img src="images/map.png" className="map-img" alt="" />
                            <div className="row">
                                <img src="images/chip.png" width="80px" alt="" />
                                <img src={source} width="90px" alt=""/>
                            </div>
                            <div className="row card-no">
                                <p>{value1}</p>
                                <p>{value2}</p>
                                <p>{value3}</p>
                                <p>{value4}</p>
                            </div>
                            <div className="row card-holder">
                                <p>CARD HOLDER</p>
                                <p>VALID THRU</p>
                            </div>
                            <div className="row name">
                                <p>{holder.firstName} {holder.lastName}</p>
                                <p> {props.month} / {props.year}</p>
                            </div>
                        </div>
                        <div className={`back${props.color}`} id="back">
                            <img src="images/map.png" className="map-img" alt="" />
                            <div className="bar"></div>
                            <div className="row card-cvv">
                                <div>
                                    <img src="images/pattern.png" alt="" />
                                </div>
                                <p>{props.cvv}</p>
                            </div>
                            <div className="row card-text">
                                <p>This is a virtual Design in HTML and CSS</p>
                            </div>
                            <div className="row bottom">
                                <p>CUSTOMER SIGNATURE</p>
                                <img src={source} width="90px" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
export default Card;