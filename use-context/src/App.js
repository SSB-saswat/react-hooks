import React, { useState } from 'react';
import './App.css';
import FunctionContextComponent from './FunctionContextComponent';

import { ThemeProvider } from './ThemeContext';

// export const ThemeContext = React.createContext();

// function App() {
// const [darkTheme, setDarkTheme] = useState(true);

// function toggleTheme() {
//   setDarkTheme(prevDarkTheme => !prevDarkTheme);
// }
// return (
//   <>
//     <ThemeContext.Provider value={darkTheme}>
//       <button onClick={toggleTheme}>Toggle Theme</button>
//       <FunctionContextComponent />
//     </ThemeContext.Provider>
//   </>
// );
// }

function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  )
}


export default App;
