import React, { useState } from "react";
import Nav from "./Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import portfolios from "./utils/portfolios"


export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About/>
        }
        if (currentPage === 'Contact'){
            return <Contact/>
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio portfolios={portfolios}/>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page)

    return(
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            {/* <Contact/> */}
        </div>
    )
}