import React, { useState } from "react";
import Nav from "./Nav";
import About from "./components/About";

export default function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About/>
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