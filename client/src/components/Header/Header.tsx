import { Link } from "react-router-dom";
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
          <Link to="/accueil">
            <li>Accueil</li>
          </Link>
          <Link to="/societe">
            <li>Société</li>
          </Link>
          <Link to="/environnement">
            <li>Environnement</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
