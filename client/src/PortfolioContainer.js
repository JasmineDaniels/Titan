import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import portfolios from "./utils/portfolios.js"
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import MainNavigation from "./components/MainNavigation";


export default function PortfolioContainer(){

    return(
        <div>
            <MainNavigation/>
            <main>
                <Routes>
                    <Route path="/" element={<About/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/projects" element={<Portfolio portfolios={portfolios}/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}