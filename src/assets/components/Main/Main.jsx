import './Main.css'
import Header from '../Header/Header';
import Skills from '../Skills/Skills';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import About from '../About/About';

function Main ({handleLanguage}){
    return(
        <>
            <Header handleLanguage={handleLanguage}/>
            <About/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default Main;