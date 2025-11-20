import { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.svg";

function Header() {
  const [aberto, setAberto] = useState(false);
  const toggleMenu = () => {
    setAberto(!aberto);
  };

  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav
        className={`${"menu"} ${aberto ? "mostrar" : ""}`}
        onClick={toggleMenu}
      >
        <ul>
          <li>
            <a href="">LOOKS</a>
          </li>
          <li>
            <a href="">LANÇAMENTOS</a>
          </li>
          <li>
            <a href="">NOVIDADE</a>
          </li>
        </ul>
      </nav>
      <button className="btn_menu" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </button>
    </header>
  );
}
export default Header;
