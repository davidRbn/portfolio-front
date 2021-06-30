import React from 'react'
import './presentation.css'
import imageProfil from '../../assets/photoProfil.jpg'



const Presentation = () => {
    
    
    
    return(
        
            <div id="présentation">
                <div className="containerImagePres">
                     <img className="imagePres" src={imageProfil} alt='imageDavidRuben'/>
                         </div>
                            <div className="containerTextPres">
                                <div className='containerTitrePres'>
                                     <h2 className="sousTitrePres">QUI SUIS JE ?</h2>
                                        <div className='titrePres'>
                                     <h2 >Présentation</h2>
                                        </div>
                                </div>
                         <div className="lignePres"></div>
                    <p className="textPres">Après avoir commencé un apprentissage en autodidacte, j'ai effectué une formation à la Wild Code School pour devenir developpeur Web. Lors de cette formation, j'ai pu aussi bien travailler sur le frontend que du coté backend lors d'excercices, de projets ou de hackations. Je vous invites à regarder mes quelques projets et si vous souhaitez mon CV est disponible au format PDF. 
                </p>
            </div>

        </div>
        
    )
}

export default Presentation