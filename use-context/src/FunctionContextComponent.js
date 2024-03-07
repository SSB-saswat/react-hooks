import React, { useContext } from 'react'
import { useTheme, useUpdateTheme } from './ThemeContext'
// import { ThemeContext } from './App'


const FunctionContextComponent = () => {
    // const darkTheme = useContext(ThemeContext);
    const darkTheme = useTheme();
    const toggleTheme = useUpdateTheme();

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        margin: '2rem'

    }

    return (
        <>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={themeStyles}>
                Function Theme
            </div>
        </>
    )
}

export default FunctionContextComponent
