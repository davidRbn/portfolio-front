import React, { useEffect, useState } from 'react'
import './navBar.css'

const NavBar = () => {

const [scrollNav, setScrollNav] = useState(false)
const [clickBurger, setClickBurger] = useState(false)



const scrollPos = () => {
    let position = 0
window.addEventListener('scroll',(e) => {
    position = e.target.scrollingElement.scrollTop
console.log(position);

    return position !== 0 && window.innerWidth > 900 ? setScrollNav(true) : setScrollNav(false);
    
})
 
}

useEffect(() => {
    scrollPos()
},[])

const cli = (e) => {
    e.preventDefault()
        setClickBurger(!clickBurger)
  
 }


 return(
        
        <>
        <div className="containerMenuBurger" onClick={e => cli(e)}>
        <div className="menuBurger"></div>
        </div>
        <nav className={scrollNav ? 'containerNavScroll':clickBurger && window.innerWidth < 900 ?'navBurger': 'containerNav'}>
        
            <ul className="menuNav" >
               
                <li><a onClick={e => {cli(e)
                                     window.location.href='#accueil'}} href='#accueil'>Accueil</a></li>
                <li><a onClick={e =>{ cli(e)
                                      window.location.href = '#présentation'}}href='#présentation'>Présentation</a></li>
                <li> <a onClick={e =>{ cli(e)
                                      window.location.href ='#projets'}}href='#projets'>Projets</a></li>
                <li><a onClick={e =>{ cli(e)
                                      window.location.href ='#compétences'}}href='#compétences'>Compétences</a></li>
                <li><a onClick={e =>{ cli(e)
                                      window.location.href ='#contact'}} href='#contact'>Contact</a></li>
                
            </ul>

        </nav>
</>
        

        
        
    )
}

export default NavBar