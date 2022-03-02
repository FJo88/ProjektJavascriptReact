import {useSelector, useDispatch} from "react-redux"
import Card from "../components/Card"
import {Link} from "react-router-dom"
import {deleteCard, setActive} from "../redux/cardListSlice"

// Walletkomponenten. Hämtar holder och cards-arrayen.
const Wallet = () => {
const dispatch = useDispatch();
const { cards, holder } = useSelector((state) => state.cardList);

// Om man trycker refresh så får man en alert via nedan kodrader. Man vill/kan nästan inte disabla refresh på webbsidor.
window.addEventListener("beforeunload", function (e) {
e.preventDefault();
e.returnValue = "";})
// Renderar det aktiva kortet samt en header med holderns namn
return ( 
    <div>
        <h1 className="walletname">{holder.firstName} {holder.lastName}´s E-Wallet </h1>
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
                        color={card.color}
                        />
                    </div>
                )})}
            <div>
            {cards.length < 4 ? <Link to={"/addcard"}><button className="addcardbutton">Add new Card</button></Link>: <h1 className="max">You reached max number of cards!</h1>}
            </div>
        </div>
        {/* Renderar resterande kort med knappar för att ändra kortet till aktivt eller för att ta bort kortet 
            Kör även lite styling. 
        */}
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
                        color={card.color}
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