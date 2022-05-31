import React from "react";
import BTN from "./BTN";
import "../index.css";

const Header = ({makeForm, changer}) => {
    return(
        <header className="header glassy-no-radius">
            <h1 className="header-title">Ask a Lizard</h1>
            <BTN onClick={makeForm} color={changer ? 'red' : 'green'} text={changer ? 'Close' : 'Add'}></BTN>
        </header>
    )
}
export default Header;