import React, { useEffect, useState } from 'react'
import './competences.css'
import Axios from 'axios'
import logoJs from '../../assets/logoJs.png'
import logoCss from '../../assets/logoCss.webp'
import logoHtml from '../../assets/logoHtml.png'
import logoReact from '../../assets/logoReact.png'
import logoNode from '../../assets/logoNode.png'
import logoGit from '../../assets/logoGit.png'


const Competences = () => {

    const  [competences,setCompetences] = useState([])
    const  [competences2,setCompetences2] = useState([])
    const  [animImageComptence,setAnimImageCompetence] = useState(0)
    

    useEffect(() => {
        // countAnim()
    },[])

    useEffect(() => {
        getCompetences()
    },[])

        const getCompetences = () => {

            Axios.get('https://blooming-beyond-04058.herokuapp.com/competence')

            .then(res =>{ setCompetences(res.data)
                          setCompetences2(res.data)  
            
            })
        }
        
// const countAnim = () => {
//     let i = 0
//     setInterval(() => {
//             i++
//             setAnimImageCompetence(i)
//          i === 5 ? i = 0 : i = i ;
//     },1000)

// }    

    return(
        <div id='compétences'>
             <div className='containerTitreCompetence'>
                 <h2 className="sousTitreCompetence">SAVOIR-FAIRE</h2>
                 <div className='titreCompetence'>
                 <h2 >Compétences</h2>
                </div>
          </div>
          <div className="ligneCompetence"></div>
           <div className='container'>
          <div className='slide'>
            <img className={animImageComptence === 1 ?'imageCompetenceAnim': 'imageCompetence'} src={logoCss} alt=""/>
            <img className={animImageComptence === 2 ?'imageCompetenceAnim': 'imageCompetence'} src={logoHtml} alt=""/>
            <img className={animImageComptence === 4 ?'imageCompetenceAnim': 'imageCompetence'} src={logoReact} alt=""/>
            <img className={animImageComptence === 1 ?'imageCompetenceAnim': 'imageCompetence'} src={logoNode} alt=""/>
            <img className={animImageComptence === 3 ?'imageCompetenceAnim': 'imageCompetence'} src={logoJs} alt=""/>
            <img className={animImageComptence === 2 ?'imageCompetenceAnim': 'imageCompetence'} src={logoGit} alt=""/>
            </div>
            <div className='slide'>
            <img className={animImageComptence === 1 ?'imageCompetenceAnim': 'imageCompetence'} src={logoCss} alt=""/>
            <img className={animImageComptence === 2 ?'imageCompetenceAnim': 'imageCompetence'} src={logoHtml} alt=""/>
            <img className={animImageComptence === 4 ?'imageCompetenceAnim': 'imageCompetence'} src={logoReact} alt=""/>
            <img className={animImageComptence === 1 ?'imageCompetenceAnim': 'imageCompetence'} src={logoNode} alt=""/>
            <img className={animImageComptence === 3 ?'imageCompetenceAnim': 'imageCompetence'} src={logoJs} alt=""/>
            <img className={animImageComptence === 2 ?'imageCompetenceAnim': 'imageCompetence'} src={logoGit} alt=""/>
            </div>
            <div className='slide'>
            <img className={animImageComptence === 1 ?'imageCompetenceAnim': 'imageCompetence'} src={logoCss} alt=""/>
            <img className={animImageComptence === 2 ?'imageCompetenceAnim': 'imageCompetence'} src={logoHtml} alt=""/>
            <img className={animImageComptence === 4 ?'imageCompetenceAnim': 'imageCompetence'} src={logoReact} alt=""/>
            <img className={animImageComptence === 1 ?'imageCompetenceAnim': 'imageCompetence'} src={logoNode} alt=""/>
            <img className={animImageComptence === 3 ?'imageCompetenceAnim': 'imageCompetence'} src={logoJs} alt=""/>
            <img className={animImageComptence === 2 ?'imageCompetenceAnim': 'imageCompetence'} src={logoGit} alt=""/>
            </div>
        </div>
        <div className='containerCompetence'>
            <div>
        {competences.filter(e => e.id <= 4).map((e,key) =>{
            return(
                <div className='containerListComp' key={e.id}>
                    <ul>
                      <li className='listCompetence'>{e.name}</li>
                    </ul>
                </div>
            )
        })}
        </div>
        
        <div>
        {competences.filter(e => e.id > 4).map((e,key) => {
            return(
                <div className='containerListComp' key={e.id}>
                       <ul>
                          <li className='listCompetence'>{e.name}</li>
                      </ul> 

                </div>
            
                )
        })}
        </div>
        </div>
        </div>
    
    )
}

export default Competences