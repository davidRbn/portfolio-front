import React, { useEffect, useState } from 'react'
import './navBar.css'

const NavBar = () => {

const [scrollNav, setScrollNav] = useState(false)
const [clickBurger, setClickBurger] = useState(false)

useEffect(() => {
    scrollPos()
},[])

const scrollPos = () => {
    let position = 0
window.addEventListener('scroll',(e) => {
    position = e.target.scrollingElement.scrollTop
    return position !== 0 && window.innerWidth > 900 ? setScrollNav(true) : setScrollNav(false);
    
})
 
}
const cli = (e) => {
    e.preventDefault()
     setClickBurger(!clickBurger)
 }



 return(
        
        <>
        <div className="containerMenuBurger" onClick={e => cli(e)}>
        <div className="menuBurger"></div>
        </div>
        <nav className={scrollNav ? 'containerNavScroll':clickBurger ?'navBurger': 'containerNav'}>
        
            <ul className="menuNav">
               
                <li><a href='#accueil'>Accueil</a></li>
                <li><a href='#présentation'>Présentation</a></li>
                <li> <a href='#projets'>Projets</a></li>
                <li><a href='#compétences'>Compétences</a></li>
                <li><a href='#contact'>Contact</a></li>
                
            </ul>

        </nav>
</>
        

        
        
    )
}

export default NavBar