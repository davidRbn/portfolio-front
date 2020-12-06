import './App.css';
import BanniereLogo from './components/banniereLogo/Bannierelogo';
import Competences from './components/competences/Competences';
import Contact from './components/contact/Contact';
import HomePage from './components/homePage/HomePage';
import Presentation from './components/presentation/Presentation';
import Projets from './components/projets/Projets';

function App() {
  return (
    <>
        <BanniereLogo/>
        <HomePage/>
        <Presentation/>
        <Projets/>
        <Competences/>
        <Contact/>
    </>
  );
}

export default App;
