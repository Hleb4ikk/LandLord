import "./Header.css"

import Logo from './../Logo/Logo'

import {NavLink, Link} from 'react-router-dom';
import Search from "../Search/Search";

const Header = () => {

    const activeLink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link ";

    return (  
      
        <header>
            <Link to ="/" className={normalLink}><Logo/></Link>
            <ul className='navi'>
              <li><NavLink to = "/" className = {({isActive}) => isActive ? activeLink : normalLink}>Home</NavLink></li>
              <li><NavLink to = "/catalog" className = {({isActive}) => isActive ? activeLink : normalLink}>Catalog</NavLink></li>
              <li><NavLink to = "/about_us" className = {({isActive}) => isActive ? activeLink : normalLink}>About US</NavLink></li>
            </ul>
        </header>
    );
}
 
export default Header;