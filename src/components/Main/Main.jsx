import './Main.css'
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import About from '../About/About';

import { toggleTheme } from "../../features/themeSlice";
import { useDispatch, useSelector } from "react-redux";

function Main ({handleLanguage, handleEmailContactClick}){

    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const changeTheme = () => {
        dispatch(toggleTheme());
      }

    return(
        <div className={`main__${theme}`}>
            <Header handleLanguage={handleLanguage} changeTheme={changeTheme}/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact handleEmailContactClick={handleEmailContactClick}/>
            <Footer/>
        </div>
    )
}

export default Main;