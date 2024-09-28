import Logo from "../Logo/Logo";

import "./Footer.css"

const Footer = () => {
    return ( 
        <footer>

            <div className = "footerContainer">

                <Logo/>
                <span className = "copyrights"> 2024 ©</span>
            </div>
            
        </footer>
    );
}
 
export default Footer;
