import '../css/skills.css'
import html from '../images/html.png'
import css from '../images/cssplus.jpg'
import js from '../images/js2.png'
import boot from '../images/boot.png'
import node from '../images/node-cropped.jpg'
import sequel from '../images/sequelize-logo.png'
import docker from '../images/docker.png'
import react from '../images/react.png'
import mongo from '../images/MongoDB-Logo.jpeg'
import express from '../images/express.png'
import sql from '../images/sql.png'
import jquery from '../images/jquery.png'

export default function Skills(){

    return (
        
        <section id="SKILLS" className="container my-5">
            <div className="row my-5 ">
                <h2>SKILLS</h2>
            </div>
            
            <div className="row row-cols-4 mb-3">
                <div className="col">
                    <div className="tech-image">
                        <img src={html} alt="html-logo" className="tech-img"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image">
                        <img src={css} alt="css-logo" className="tech-fit"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image">
                        <img src={js} alt="js-logo" className="tech-img"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image">
                        <img src={boot} alt="bs-logo" className="tech-img"></img>
                    </div>
                </div>
            </div>

            <div className="row row-cols-4">
                <div className="col">
                    <div className="tech-image-lg">
                        <img src={node} alt="node-logo" className="tech-fit"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image-lg">
                        <img src={sequel} alt="sequel-logo" className="tech-fit"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image">
                        <img src={docker} alt="docker-logo" className="tech-img"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image-lg">
                        <img src={react} alt="react-logo" className="tech-fit"></img>
                    </div>
                </div>
            </div>

            <div className="row row-cols-4">
                <div className="col">
                    <div className="tech-image-lg">
                        <img src={mongo} alt="mongo-logo" className="tech-fit"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image-lg">
                        <img src={express} alt="express-logo" className="tech-fit"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image-lg">
                        <img src={sql} alt="sql-logo" className="tech-fit"></img>
                    </div>
                </div>
                <div className="col">
                    <div className="tech-image">
                        <img src={jquery} alt="jquery-logo" className="tech-fit"></img>
                    </div>
                </div>
            </div>
            
        </section>
    )
}