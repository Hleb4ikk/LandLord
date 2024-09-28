import "./Logo.css"

import logo from '../../images/logo.png'

const Logo = () => {
    return (   
        
      <div className="logo">
        <img className='image' src= { logo } alt="logo"/> 
        <h1>LandLord</h1>
      </div> 

    );
}
 
export default Logo; 
