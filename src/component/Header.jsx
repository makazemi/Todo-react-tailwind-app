import React,{useContext} from "react"
import { ThemeContext } from "../context/ThemeContext"

function Header(){
    const {theme,toggleTheme}= useContext(ThemeContext)
    return (
        <div className="flex justify-between">
            <h1 className="text-white text-4xl text-bold tracking-wide">TODO</h1>
            {theme==="light"? <button onClick={toggleTheme}><img className="w-8 h-8" src="images/icon-moon.svg" /></button> : <button onClick={toggleTheme}><img className="w-8 h-8" src="images/icon-sun.svg"/></button>}
        </div>
    )
}

export default Header