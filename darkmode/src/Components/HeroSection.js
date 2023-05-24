import React, {useContext} from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors"
import ThemeToggler from "./ThemeToggle";

const HeroSection = () => {
    // const theme = useContext(ThemeContext)[0]
    // const currentTheme = AppTheme[theme]
    // const currentTheme = AppTheme[useContext(ThemeContext)[0]]

    return(
        <div style={{
            padding: "14rem",
            backgroundColor:`${AppTheme[useContext(ThemeContext)[0]].backgroundColor}`,
            color:`${AppTheme[useContext(ThemeContext)[0]].textColor}`,
            textAlign: "center"
        }} >
            <h1>Context API theme toggler</h1>
            <p>Click to enable/disable Dark Mode</p>
            <button style={{
                backgroundColor: "#26ae60",
                padding: "10px 100px",
                fontSize: "20px",
                color:"#FFF",
                border: `${AppTheme[useContext(ThemeContext)[0]].border}`
            }}
            ><ThemeToggler/></button>
        </div>
    )
}

export default HeroSection;