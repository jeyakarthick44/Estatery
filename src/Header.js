import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/fontawesome-free-solid";

export default function Header() {
  return (
    <div className="header_container">
      <h2>Estatery</h2>
      <p className="header_list">Rent</p>
      <p className="header_list">Buy</p>
      <p className="header_list">Sell</p>
      <p className="header_list">
        Manage Property <FontAwesomeIcon icon={faCaretDown} />
      </p>
      <p className="header_list">
        Resources <FontAwesomeIcon icon={faCaretDown} />
      </p>
      <button className="header_button login">Login</button>
      <button className="header_button">Sign up</button>
    </div>
  );
}
