// import { useState } from "react";
import "./header.scss";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";

function Header() {
  // const [aberto, setAberto] = useState(false);

  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="">LOOKS</a>
          </li>
          <li>
            <a href="">LANÇAMENTOS</a>
          </li>
          <li>
            <a href="">NOVIDADES</a>
          </li>
        </ul>
      </nav>
      <img src={icon} alt="Icon menu" />
    </header>
  );
}
export default Header;
