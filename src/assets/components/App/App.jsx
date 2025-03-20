import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Skills from '../Skills/Skills'
import Main from '../Main/Main';

import LanguageContext from '../../../contexts/languageContext'


function App() {

  const [language, setLanguage] = useState("EN");

  const handleLanguage = (language) => {
    setLanguage(language);

  }

  return (
    <div className="page">
      <LanguageContext.Provider value={{language}}>
        
        
        <Routes>
          <Route
              path="/"
              element={<Main handleLanguage={handleLanguage}/>}
          >
          </Route>
          <Route
            path="/react"
            element={
              <Skills/>
            }
          >
          </Route>      
        </Routes>
        
      </LanguageContext.Provider>
    </div>
  )
}

export default App;
