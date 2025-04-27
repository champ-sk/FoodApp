import React, { useState } from 'react'; // Add React import here
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo">
        <img className="w-56" alt="" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>

          <li className="px-4 font-bold">
          <Link to="/cart">
            Cart({cartItems.length} items)
            </Link>
            </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
