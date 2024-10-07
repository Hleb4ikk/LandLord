import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/Catalog';
import Aboutus from './Components/AboutUs/Aboutus';

import { Routes, Route, BrowserRouter as Router}  from "react-router-dom";
import House from './Components/House/House';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';

function App() {
  return ( 

      <>
      <Router>
        <Header/>
        <Routes>

          <Route path = "/" Component = { Home }/>
          <Route path = "/catalog" Component = { Catalog }/>
          <Route path = "/catalog/:id" Component = { House }/>
          <Route path = "/about_us" Component = { Aboutus }/>
          <Route path = '/registration' Component = {RegistrationForm}/>
        </Routes>
        <Footer/>
      </Router>  
      </>
    
   );
}
 
export default App;
