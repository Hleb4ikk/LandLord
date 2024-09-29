import './App.css';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/Catalog';
import Aboutus from './Components/AboutUs/Aboutus';

import { Routes, Route, BrowserRouter as Router}  from "react-router-dom";

function App() {

  return ( 

      <>
      <Router>
        <Header/>
        <Routes>

          <Route path = "/" Component = { Home }/>
          <Route path = "/catalog" Component = { Catalog }/>
          <Route path = "/about_us" Component = { Aboutus }/>

        </Routes>
        <Footer/>
      </Router>  
      </>
    
   );
}
 
export default App;
