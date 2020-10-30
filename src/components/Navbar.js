import React from "react"
import logo from "../assets/logo.svg"
import { FaAlignRight, FaShoppingCart } from "react-icons/fa"
import PageLinks from "../constants/links"
import Cart from "../components/Cart"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img height="101" src={logo} alt="logo" />
          <Cart></Cart>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
