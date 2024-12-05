import { NavLink } from "react-router-dom";
import "../../style/globals.css";
import "./header.css";

function Header() {
  return (
    <header className="header-container-link">
      <img
        src="/src/assets/images/Logo.png"
        alt="logo good vibes l'actualité qui fait du bien"
      />
      <nav className="link-container-page">
        <ul>
          <NavLink to="/accueil">
            <li>Accueil</li>
          </NavLink>
          <NavLink to="/societe">
            <li>Société</li>
          </NavLink>
          <NavLink to="/environnement">
            <li>Environnement</li>
          </NavLink>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
