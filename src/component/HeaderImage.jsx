import React,{useContext} from "react"
import { ThemeContext } from "../context/ThemeContext"

function HeaderImage(){
    const {theme}= useContext(ThemeContext)
    return(
        <>
            <img className="w-full h-64 md:hidden"
                    src={`images/bg-mobile-${theme}.jpg`} />

            <img className="w-full h-64 hidden md:block"
                    src={`images/bg-desktop-${theme}.jpg`} />

        </>
    )
}

export default HeaderImage