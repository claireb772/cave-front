import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import arrow from '../arrow-icon.png'
import axios from 'axios';

const urlCave = "http://localhost:8080/cave"

const TRI_ASC = 'ASC';
const TRI_DESC = 'DESC';
const NOM = 'nom';
const MILLESIME = 'millesime';
const PETILLANT ='isPetillant';
const QUANTITE = 'quantite';
const COULEUR ='couleur';
const REGION = 'region';

// const options = {
//     method : "post",
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Accept-Allow-Origin':'*',
//         'Content-Type': 'application/json'
//     }
// }
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

const CaveApp = () => {

    const [listeBouteille, setListeBouteille] = useState([]);
    const [listeBouteilleTriConfig, setListeBouteilleTriConfig] = useState({direction:TRI_ASC, key:NOM});
    const paramsTri = { direction:`${listeBouteilleTriConfig.direction}`, key:`${listeBouteilleTriConfig.key}`}

    
    useEffect(() => {
        axios.post(urlCave, 
        paramsTri)
        .then((response) => {
            setListeBouteille(response.data)
        }).catch(error=> console.log(error));
 } , [listeBouteilleTriConfig]);


    const RequestSort = (key) => {
        console.log(paramsTri);
        let direction = TRI_ASC;
        if (listeBouteilleTriConfig.direction === TRI_ASC) 
         {
            direction = TRI_DESC;
        } else {
            direction = TRI_ASC;
        }
        setListeBouteilleTriConfig({direction:direction,  key:key });
  
      };


    return (
        <div className="container">
            <h1>Cave à vin</h1>
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Nom
                        <div>
                            <button type="button" onClick={() =>RequestSort(NOM)}
                            >
                                <img alt="flèche de tri" src={arrow}></img>
                            </button>
                        </div>
                    </th>
                    <th scope="col">Millésime
                        <div>
                            <button type="button" onClick={() =>RequestSort(MILLESIME)}
                            >
                                <img alt="flèche de tri" src={arrow}></img>
                            </button>
                        </div>
                     </th>   
                    <th scope="col">Pétillant
                    <div>
                            <button type="button" onClick={() =>RequestSort(PETILLANT)}
                            >
                                <img alt="flèche de tri" src={arrow}></img>
                            </button>
                        </div>
                    </th>
                    <th scope="col">Quantité
                    <div>
                            <button type="button" onClick={() =>RequestSort(QUANTITE)}
                            >
                                <img alt="flèche de tri" src={arrow}></img>
                            </button>
                        </div>
                    </th>
                    <th scope="col">Couleur
                    <div>
                            <button type="button" onClick={() =>RequestSort(COULEUR)}
                            >
                                <img alt="flèche de tri" src={arrow}></img>
                            </button>
                        </div>
                    </th>
                    <th scope="col">Région
                    <div>
                            <button type="button" onClick={() =>RequestSort(REGION)}
                            >
                                <img alt="flèche de tri" src={arrow}></img>
                            </button>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
              { 
              listeBouteille.map((item) => (


                <tr key={item.id}>
                    <td>{item.nom}</td>
                    <td>{item.millesime}</td>
                    <td>{item.petillant ? 'Oui' : 'Non'}</td>
                    <td>{item.quantite}</td>
                    <td>{item.couleur.nom}</td>
                    <td>{item.region.nom}</td>
                </tr>
)
              )
              }
            </tbody>
        </table>

        </div>
    );

}




export default CaveApp;