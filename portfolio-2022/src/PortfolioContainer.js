import React, { useState } from "react";
import Nav from "./Nav";
import About from "./components/About";
import Contact from "./components/Contact";

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About/>
        }
        if (currentPage === 'Contact'){
            return <Contact/>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </div>
    )
}