import {useSelector} from "react-redux"
import Card from "../components/Card"
import {Link} from "react-router-dom"


const Wallet = () => {
    const { holder, cards, status } = useSelector((state) => state.cardList);
    console.log(holder.firstName)
    console.log(cards);

   
    return ( 
    <div>
        <div>
            {cards.slice(0,1).map((card, i) =>{
                return(
                    <div key={i} className="active">
                        <h1>Active Card:</h1>
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
                    </div>
                )
            })}
            <Link to={"/addcard"}><button className="addcardbutton">Add new Card</button></Link>
        </div>
        
        {cards.slice(1,4).map((card, i) => {
        return (
            <div key={i} style={{marginTop:-180}}>
               <div style={{zIndex:i-1, position: "absolute", marginTop:(i+1)*200, marginLeft: 700 }}>
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
                
                    <button style={{position: "absolute",marginLeft:380, marginTop: -260, width: 150, fontSize: 25}}>Remove</button>
                    <button style={{position: "absolute",marginLeft:380, marginTop: -200, width: 150, fontSize: 25}}>set Active</button>
                
                </div>
               
            </div>
        )})}
    </div> );
}
 
export default Wallet;