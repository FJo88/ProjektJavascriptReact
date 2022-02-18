import {useDispatch, useSelector} from "react-redux"
import {getHolder} from "../redux/cardListSlice"
import Card from "../components/Card"

const Wallet = () => {
    const dispatch = useDispatch();
    const { holder, cards } = useSelector((state) => state.cardList);
    console.log(holder.firstName)
    console.log(cards[0]);

    //Använd useeffect for att trigga hämtning vid start mount av komponent.
    
    return ( 
    <div>
          
        <button onClick={() => dispatch(getHolder())}>Get CardHolder</button>
        
        
        {cards.map((card, i) => {
        return (
            <div key={i} style={{marginTop:100}}>
                <div style={{zIndex:i-1, position: "absolute", marginTop:(i+1)*200, marginLeft: 650 }}>
                <Card 
                    cardnumber1={card.cardnumber1}
                    cardnumber2={card.cardnumber2}
                    cardnumber3={card.cardnumber3}
                    cardnumber4={card.cardnumber4}
                    month={card.month}
                    year={card.year}
                    cvv={card.cvv}
                    vendor={card.vendor}
                />
                <button style={{position: "absolute",marginLeft:400, marginTop: -260, width: 100}}>Remove</button>
                <button style={{position: "absolute",marginLeft:400, marginTop: -200, width: 100}}>set Active</button>
                </div>
            </div>
                
            
        )})}
        
    </div> );
}
 
export default Wallet;