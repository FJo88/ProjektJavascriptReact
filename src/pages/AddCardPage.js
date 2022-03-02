import {Link} from "react-router-dom"
import CardForm from "../components/CardForm"
import {useState } from "react"

// Kort-sidan. Har en styrvariabel för att avgöra om man fyllt i formen korrekt och visar då endast en knapp för att
// gå tillbaka till startsidan. Knappen finns även om du inte vill lägga till ett kort. Så länge addedCard är false så 
// renderas CardFormkomponenten.
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