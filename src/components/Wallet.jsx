import {useSelector, useDispatch} from "react-redux"
import Card from "../components/Card"
import {Link} from "react-router-dom"
import {deleteCard, setActive} from "../redux/cardListSlice"



const Wallet = () => {
    const dispatch = useDispatch();
    const { cards, holder } = useSelector((state) => state.cardList);
    
    console.log(cards);

    window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    e.returnValue = "";})


    return ( 
    <div>
        <h1>{holder.firstName} {holder.lastName}´s-Wallet: </h1>
        <div>
            {cards.slice(0,1).map((card, i) =>{
                return(
                    <div key={i} className="active">
                        <h1>Active Card:</h1>
                     <Card
                        id={card.id}
                        cardnumber1={card.cardnumber1}
                        cardnumber2={card.cardnumber2}
                        cardnumber3={card.cardnumber3}
                        cardnumber4={card.cardnumber4}
                        month={card.month}
                        year={card.year}
                        cvv={card.cvv}
                        vendor={card.vendor}
                        />
                    </div>
                )
            })}
            <div>
            {cards.length < 4 ? <Link to={"/addcard"}><button className="addcardbutton">Add new Card</button></Link>: <h2>You reached max number of cards!</h2>}
            </div>
        </div>
        <div className="rest">
        {cards.slice(1,4).map((card, i) => {
        return (
            <div key={i} style={{marginTop:-180}}>
               <div style={{zIndex:i-1, position: "absolute", marginTop:(i+1)*200, marginLeft: 700 }}>
                <Card 
                    id={card.id}
                    cardnumber1={card.cardnumber1}
                    cardnumber2={card.cardnumber2}
                    cardnumber3={card.cardnumber3}
                    cardnumber4={card.cardnumber4}
                    month={card.month}
                    year={card.year}
                    cvv={card.cvv}
                    vendor={card.vendor}
                />
                
                    <button onClick={() => dispatch(deleteCard(card.id))} style={{position: "absolute",marginLeft:380, marginTop: -260, width: 150, fontSize: 25}}>Remove</button>
                    <button onClick={() => dispatch(setActive(card))} style={{position: "absolute",marginLeft:380, marginTop: -200, width: 150, fontSize: 25}}>set Active</button>
                
                </div>
               
            </div>
        )})}
        </div>
        
    </div> );
}
 
export default Wallet;