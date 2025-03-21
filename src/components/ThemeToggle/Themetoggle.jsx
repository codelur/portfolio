import "./ThemeToggle.css"

import React from "react";
import { useSelector } from "react-redux";

const ThemeToggle = ({changeTheme}) => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <label className="switch">
        <input
            type="checkbox"
            checked=""
            onChange={changeTheme}
            className="switch__box"
        />
        <span
            className={`switch__slider  
            ${
                theme === "dark"
                ? "switch__slider-dark"
                : "switch__slider-light"
            }`}
        ></span>
        <p
            className={`switch__temp-dark ${
                theme === "dark" ?  "switch__active":"switch__active" 
            }`}
        >
            &#x263C;
        </p>
        <p
            className={`switch__temp-light ${
                theme === "light" ?  "switch__inactive" :"switch__active" 
            }`}
        >
            &#9788;
        </p>
        </label>
    );
};

export default ThemeToggle;