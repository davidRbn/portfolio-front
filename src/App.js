import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import BanniereLogo from './components/banniereLogo/Bannierelogo';
import Competences from './components/competences/Competences';
import Contact from './components/contact/Contact';
import HomePage from './components/homePage/HomePage';
import LoaderLogoD from './components/loaderLogoD/LoaderLogoD';
import Presentation from './components/presentation/Presentation';
import Projets from './components/projets/Projets';

function App() {


  const [isLoading,setIsLoading] = useState(false)
  const [projets,setProjets] = useState([])


  const getProjet = () => {

    Axios.get('https://blooming-beyond-04058.herokuapp.com/projet')
        
    .then(res => {
        setProjets(res.data)
        setIsLoading(true)
    })
    
}  


useEffect(()=> {
  getProjet()
},[])

 console.log(isLoading);
  return (
    <>
      
    { true ?  <LoaderLogoD/>:
      
      <>
           <BanniereLogo/>
           <HomePage/>
           <Presentation/>
           <Projets projets={projets}/>
           <Competences/>
           <Contact/>
  
        </>}
      </> 
  
  );
}

export default App;

