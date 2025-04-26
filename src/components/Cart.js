import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);
    const handleCart = ()=>{
dispatch(clearCart())
    }

  return <div className="m-4 p-4 text-center">
    <h1 className="font-bold text-2xl">
    Cart
    </h1>
<div className="w-6/12 m-auto">
<button className="text-white bg-black m-4 p-2 rounded-lg" onClick={handleCart}>Clear Cart</button>
{cartItems.length===0 && <h1>Cart is empty , Add the Items.</h1>}
    <ItemList items={cartItems}/>
</div>

    </div>;
};

export default Cart;
