import {Link} from "react-router-dom"
import Wallet from "../components/Wallet"

const Home = () => {
    
    

    return ( 
    <div>
        
        <Wallet/>

        <Link to={"/addcard"}><button>Add new Card</button></Link>
        <h1 style={{fontSize:80}}>Cards:</h1>
    </div> );
}
 
export default Home;