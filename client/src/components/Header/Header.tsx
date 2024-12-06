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
          <li>
            <NavLink to="/accueil">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/societe">Société</NavLink>
          </li>
          <li>
            <NavLink to="/environnement">Environnement</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
