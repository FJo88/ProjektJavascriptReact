import Card from "./Card"
import {useState, useEffect} from "react"
import { useDispatch, useSelector} from "react-redux"
import {addCard} from "../redux/cardListSlice"

const CardForm = (props) => {
    const dispatch = useDispatch();            
    const[cardnumber1, setCardnumber1] = useState(0);  
    const[cardnumber2, setCardnumber2] = useState(0); 
    const[cardnumber3, setCardnumber3] = useState(0); 
    const[cardnumber4, setCardnumber4] = useState(0);
    const[month, setMonth] = useState(0); 
    const[year, setYear] = useState(0);
    const[cvv, setCvv] = useState(0);
    const[vendor, setVendor] = useState("");

    const { holder , cards } = useSelector((state) => state.cardList);
   
     let createCard = () => {  
        props.setaddedcard(true)
        dispatch(addCard({
        id: Date.now(),
        cardnumber1: cardnumber1,
        cardnumber2: cardnumber2,
        cardnumber3: cardnumber3,
        cardnumber4: cardnumber4,
        holder: {
            firstName: holder.firstName,
            lastName:  holder.lastName
        },
        month: month,
        year: year,
        vendor: vendor,
        cvv: cvv
     }))
     console.log(cards);
    };
    
    let getMonth = () => {
       let selected = document.getElementById("month");
       let value = selected.value;
       setMonth(value);
    }
   let getYear = () => {
        let selected = document.getElementById("year");
        let value = selected.value;
        setYear(value);
    }
    let getVendor = () => {
        let selected = document.getElementById("vendor");
        let value = selected.value;
        setVendor(value);
    }
    
    useEffect(() => {

    }, [cardnumber1,cardnumber2,cardnumber3,cardnumber4,cvv])

    return ( 
        <div className="credit-form">
            <div className="formcard">
                <Card 
                cardnumber1={cardnumber1}
                cardnumber2={cardnumber2}
                cardnumber3={cardnumber3}
                cardnumber4={cardnumber4}
                month={month}
                year={year}
                cvv={cvv}
                vendor={vendor}
                />
            </div> 
            <form id="creditForm" onSubmit={() => {createCard()}}>
                <h2>Credit Card Details</h2>
                <div className="form-body">
                    <h4>Type 16 DIGITS in pattern: XXXX-XXXX-XXXX-XXXX</h4>
                    <input type="text" name="cardnumber1" id="cardnum" pattern="[0-9]{4}" maxLength="4" onChange={(e) => {
                        setCardnumber1(e.target.value);
                    }} required/>
                    <input type="text" name="cardnumber2" id="cardnum" pattern="[0-9]{4}" maxLength="4" onChange={(e) => {
                        setCardnumber2(e.target.value);
                    }} required/>
                    <input type="text" name="cardnumber3" id="cardnum" pattern="[0-9]{4}" maxLength="4" onChange={(e) => {
                        setCardnumber3(e.target.value);
                    }} required/>
                    <input type="text" name="cardnumber4" id="cardnum" pattern="[0-9]{4}" maxLength="4" onChange={(e) => {
                        setCardnumber4(e.target.value);
                    }} required/>

                    <h4>Card Holder</h4>
                        <div className="holder">
                            <h5>First Name:</h5>
                            <input type="text" name="firstName" placeholder={holder.firstName} readOnly />
                            <h5>Last Name:</h5>
                            <input type="text" name="lastName" placeholder={holder.lastName} readOnly />
                        </div>
                    <div className="date-field">
                        <h4>Choose Month:</h4>
                        <div className="month">
                            <select id="month" required onChange={getMonth}>
                                <option value="">Choose One</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        
                        <h4>Choose Year:</h4>
                        <div className="year">
                        <select id="year" required onChange={getYear}>
                            <option value="">Choose One</option>
                            <option value="22">2022</option>
                            <option value="23">2023</option>
                            <option value="24">2024</option>
                            <option value="25">2025</option>
                            <option value="26">2026</option>
                        </select>
                        </div>
                    </div>
                </div>
                    <div className="vendor-cvv">
                        <div>
                            <h4>Choose Vendor</h4>
                            <div className="vendor">
                                <select id="vendor" onChange={getVendor} required>
                                    <option value="">Choose vendor</option>
                                    <option value="Visa">Visa</option>
                                    <option value="Master">MasterCard</option>
                                    <option value="American">American Express</option>
                                </select>
                            </div>
                        </div>
                            <div className="cvv">
                                <h4>Choose CVV Digits in pattern: XXX</h4>
                                <input type="text" name="cvv" id="cvv" pattern="[0-9]{3}" maxLength="3"  onChange={(e) => {
                                setCvv(e.target.value);
                                }} required/>
                            </div>
                    </div>
                
                    <button className="submit" type="submit">Add card to Wallet</button>
                    
            </form>
   
            
        </div>
     );
}
 
export default CardForm;