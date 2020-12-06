import React from 'react'
import './homePage.css'
import photosProfile from '../../assets/photosProfile.jpg'
import NavBar from '../navBar/NavBar'

const HomePage = () => {


    return(
        <>
        <NavBar/>
        <div id='accueil'>
            <div className='divTitlePara'>
                <h1 className='nameHomePage'>David Ruben</h1>
                {/* <h1 className='lastNameHomePage'>Ruben</h1> */}
                <div>
                    <h2 className="textHomePage">Développeur web et mobile JavaScript FullStack
</h2>
                    
                </div>
            </div>
                {/* <div className='profileImage'>
                    <img src={photosProfile} alt="image David Ruben"/>
                </div> */}
        </div>
        </>
    )
}

export default HomePage