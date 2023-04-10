//import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
//import Nav from "./Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import portfolios from "./utils/portfolios.js"
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import MainNavigation from "./components/MainNavigation";


export default function PortfolioContainer(){
    // const [currentPage, setCurrentPage] = useState('About')

    // const renderPage = () => {
    //     if (currentPage === 'About'){
    //         return <About/>
    //     }
    //     if (currentPage === 'Skills'){
    //         return <Skills/>
    //     }
    //     if (currentPage === 'Contact'){
    //         return <Contact/>
    //     }
    //     if (currentPage === 'Projects'){
    //         return <Portfolio portfolios={portfolios}/>
    //     }
    // }

    // const handlePageChange = (page) => setCurrentPage(page)

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
            {/* <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()} */}
            <Footer/>
        </div>
    )
}