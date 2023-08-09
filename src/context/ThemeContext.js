import { createContext, useState } from 'react';

const ThemeContext = createContext();

function ThemeProvider(props){
    const isBrowserDefaulDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches

    const getDefaultTheme = () => {
        const localStorageTheme = localStorage.getItem('default-theme')
        const browserDefault = isBrowserDefaulDark() ? 'dark' : 'light'
        console.log(`localthem:${localStorageTheme}`)
        console.log(`browserdefault:${browserDefault}`)
        console.log(`or:${"light" || browserDefault}`)
        const darkmode=localStorageTheme || browserDefault
        if(darkmode==="dark"){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        return darkmode
    }

    const [theme,setTheme]= useState(getDefaultTheme())

    const toggleTheme = () =>{
        const isCurrentDark = theme === 'dark';
        setTheme(isCurrentDark ? 'light' : 'dark');
        localStorage.setItem('default-theme', isCurrentDark ? 'light' : 'dark');
        if(isCurrentDark){
            document.documentElement.classList.remove('dark')
        }else{
            document.documentElement.classList.add('dark')
        }

    }
    
    return (
        <div>
            <ThemeContext.Provider value={{theme,toggleTheme}} >
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export {ThemeContext,ThemeProvider}