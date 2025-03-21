import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Skills from '../Skills/Skills'
import Main from '../Main/Main';
import EmailContactForm from '../EmailContactForm/EmailContactForm';

import { Provider } from "react-redux";
import store from "../../app/store";

import LanguageContext from '../../contexts/languageContext'


function App() {
  const [language, setLanguage] = useState("EN");
  const handleLanguage = (language) => {
    setLanguage(language);

  }

  const [activeModal, setActiveModal] = useState("");

  const handleEmailContactClick = () => {
    setActiveModal("email-contact");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleOverlay = (e) => {
      // that's why you should have a `modal` class name in each modal to be able to universally handle the overlay click
      if (e.target.classList.contains("modal")) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlay);
    return () => { //OnUnmount
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <LanguageContext.Provider value={{language}}>
        
        
        <Routes>
          <Route
              path="/"
              element={<Provider store={store}>
                      <Main handleLanguage={handleLanguage}
                              handleEmailContactClick={handleEmailContactClick}
                      />
                      </Provider>
                      }
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
        <EmailContactForm closeModal={closeModal} 
                isOpen={activeModal === "email-contact"} 
                />
      </LanguageContext.Provider>
    </div>
  )
}

export default App;
