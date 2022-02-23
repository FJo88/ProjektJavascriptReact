import {Link} from "react-router-dom"
import CardForm from "../components/CardForm"
import {useState } from "react"

const AddCardPage = () => {
    const[addedCard, setAddedCard] = useState(false)

    return ( 
        <div>
            {addedCard ? <h1 className="success">Succesfully added your new card!</h1>: <CardForm setaddedcard={setAddedCard}/>}
            <Link to="/"><button className="gohome">Go to WalletPage</button></Link>
        </div>
     );
}

export default AddCardPage;