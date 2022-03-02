import Wallet from "../components/Wallet"
import {startApp} from "../redux/cardListSlice"
import { useDispatch, useSelector } from "react-redux"

// Startsida. En Knapp för att starta och kör sen Wallet-komponenten. Anänder en global variabel till detta och skickar 
// med en boolean som payload till reducern.
const Home = () => {
    const dispatch = useDispatch()
    const { started } = useSelector((state) => state.cardList);
    
    let start = () =>{
       dispatch(startApp(true))
    }
    
    return ( 
        <div className="home">
        {!started ? <button className="startbutton" onClick={() => start()}>Start Application</button>: <Wallet/> }
        </div> );
}
 
export default Home;