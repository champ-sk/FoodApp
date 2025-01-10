
import { LOGO_URL } from "../utils/constant";

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img 
                className="img"
                alt=""
                src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Cart</li>      
                </ul>
            </div>
        </div>
    )
  }
  export default Header;