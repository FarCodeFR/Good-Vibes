import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav className="header-container-link">
      <img
        src="/src/assets/images/Logo.png"
        alt="logo good vibes l'actualité qui fait du bien"
      />
      <ul className="link-container-page">
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
  );
}

export default Header;
