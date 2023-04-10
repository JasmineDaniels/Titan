import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import portfolios from "./utils/portfolios.js"
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import MainNavigation from "./components/MainNavigation";


export default function PortfolioContainer(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {

        const getProjects = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/JasmineDaniels/repos?&sort=created`);
                const data = await response.data;
                //console.log(data);
                setProjects(data);
            } catch (error) {
                console.error(error)
                //setErrMsg(error)
            }

        }

        getProjects()

    }, [])

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