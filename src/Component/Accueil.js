import "../style.css"
import { Link } from 'react-router-dom'


function Accueil() {

    
    return (

        <div className="container">

            <h1>Bienvenue dans notre application Web Service Rest</h1>

            <div className="lien">
            <Link to="/cave">La Cave à vin</Link>
            </div>
        </div>


    )


}

export default Accueil;