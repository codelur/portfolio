import { useState } from 'react'

import './App.css'
import Header from '../Header/Header'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Skills from '../Skills/Skills'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

import LanguageContext from '../../../contexts/languageContext'


function App() {

  const [language, setLanguage] = useState("EN");

  const handleLanguage = (language) => {
    setLanguage(language);

  }

  return (
    <div className="page">
      <LanguageContext.Provider value={{language}}>
        <Header handleLanguage={handleLanguage}/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </LanguageContext.Provider>
    </div>
  )
}

export default App;
