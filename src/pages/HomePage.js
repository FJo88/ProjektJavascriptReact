import Wallet from "../components/Wallet"
import {startApp} from "../redux/cardListSlice"
import { useDispatch, useSelector } from "react-redux";


const Home = () => {
    const dispatch = useDispatch()
    const { started } = useSelector((state) => state.cardList);
    
    let start = () =>{
       dispatch(startApp(true))
    }
    
    return ( 
    <div>
    {!started ? <button className="startbutton" onClick={() => start()}>Start Application</button>: <Wallet/> }
        
    </div> );
}
 
export default Home;