import { useState } from 'react'

import reactLogo from '../../react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Header from '../Header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'

import LanguageContext from '../../../contexts/languageContext'

function App() {
  const [count, setCount] = useState(0)
  const [language, setLanguage] = useState("EN");

  const handleLanguage = (language) => {
    setLanguage(language);

  }

  return (
    <div className="page">
      <LanguageContext.Provider
      value={{language}}>
        <Header handleLanguage={handleLanguage}/>
        <About/>
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <Skills/>
        <Experience/>
        <Contact/>
        <Footer/>
      </LanguageContext.Provider>
    </div>
  )
}

export default App;
