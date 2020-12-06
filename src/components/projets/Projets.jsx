import React, {useState, useEffect} from 'react'
import './projets.css'
import Axios from 'axios'



const Projets = () => {

    const [projets,setProjets] = useState([])

useEffect(()=> {
    getProjet()
},[])

const getProjet = () => {

    Axios.get('https://blooming-beyond-04058.herokuapp.com/projet')
        
    .then(res => setProjets(res.data))
    
}  
    return(
        <>
       <div className="containerBetween">
        <div id='projets'>
             <div className='containerTitreProjet'>
                 <h2 className="sousTitreProjet">PROJETS</h2>
                 <div className='titreProjet'>
                 <h2 >Mes Travaux</h2>
                </div>
            </div>
            <div className="ligneProjet"></div>
            <div className='containerGlobalImageProjet'>
            {projets.map(e => {
                return(
                    <div key={e.id}>
                <div className='containerImageProjet'>
                <img className='imageProjet' src={e.image} alt={e.name}/>
                <div className="containerDescriptionProjet">
                    <div className='containTextProjet'>
                       <p>{e.name}</p >
                        <p>{e.comment}</p >
                        <p>{e.techno}</p>
                    <a href={e.link}>Lien site</a>
                    </div>
                </div>
                </div>
                
                </div>
            )} )}
            </div>

        </div>
        </div>
        </>
    )
}

export default Projets