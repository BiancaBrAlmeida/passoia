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
        {/* <button className="btn_menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-x"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button> */}
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
