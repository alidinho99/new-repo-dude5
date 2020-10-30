import React from "react"
import { FaShoppingCart } from "react-icons/fa"
const Cart = () => {
  return (
    <button className="cart snipcart-checkout">
      <FaShoppingCart className="cart"></FaShoppingCart>
      <span className="snipcart-items-count"></span>
    </button>
  )
}

export default Cart
