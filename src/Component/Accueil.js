import "../style.css"
import Cave from './Cave';

function Accueil() {

    
    return (

        <div class="container">
            <h1>Bienvenue dans notre application Web Service Rest</h1>
            <button onClick={()=> <Cave />}>La Cave à vin</button>

        </div>


    )


}

export default Accueil;