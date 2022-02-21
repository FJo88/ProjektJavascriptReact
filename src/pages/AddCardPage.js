import {Link} from "react-router-dom"
import CardForm from "../components/CardForm"
import {useState } from "react"


const AddCardPage = () => {

    const[addedCard, setAddedCard] = useState(false)

        
    return ( 
        <div>
            {addedCard ? "Succesfully added your new card!": <CardForm setaddedcard={setAddedCard}/>}
            <Link to="/"><button className="gohome">Go to WalletPage</button></Link>
        </div>
     );
}

 
export default AddCardPage;