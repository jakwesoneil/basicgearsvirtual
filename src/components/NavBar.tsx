// Navbar.js

import './NavBar.css'; // Import CSS for Navbar styling
import logo from "/src/assets/BeGuiVir.png";
const NavBar = () => {
  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
        
        <img src={logo} alt="logo"/>
        <p>Beyondguidancevirtual</p>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Topics</a></li>
        <li><a href="#">Profile</a></li>

      </ul>
    </nav>
  );
};

export default NavBar;
