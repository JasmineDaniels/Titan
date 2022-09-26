import React, { useState } from "react"
import '../css/contact.css'
import { validateEmail } from '../utils/helpers'
import axios from 'axios'

import gmail from '../images/gmlogo.png'
import gh from '../images/GH1.png'
import linkedIn from '../images/linkedin1.png'

export default function Contact(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // const [submitted, setSubmitted] = useState(false)
    // const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //switch
        if (inputType === 'name'){
            setName(inputValue);
        }
        if (inputType === 'phone') {
            setPhone(inputValue);
        } 
        if (inputType === 'email') {
            setEmail(inputValue);
        } 
        if (inputType === 'message') {
            setMessage(inputValue);
        }        
    };

    // const renderModal = () => {
    //     if (submitted === true){
    //         return <Modal/>
    //     }
    // }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email){
                alert('Name and Email are required');
                return;
            }
    
            const checkEmail = validateEmail(email)
            if (!checkEmail ){
                alert('Please enter a valid Email')
                return;
            } 
    
            console.log(name)
            console.log(email)
            console.log(phone)
            console.log(message)
            
            //send form node mailer
            await axios.post('/api/contact', {
                name: name, 
                email: email, 
                phone: phone,
                message: message
            })
            //if successul submitted === true then renderModal
            // setName('')
            // setPhone('')
            // setEmail('')
            // setMessage('')
        } catch (error) {
            console.log(error)
        }
        
    }


    return (
        <section id="Contact" className="container my-5">
            <h2>CONTACT</h2>
            <br></br>
            <div className="row">
                <div className="col-md-3 d-flex flex-column align-items-end">
                    <h4 className="mx-3 links" >Links</h4>
                    <div className="contact-image">
                        <a href="mailto:create.jasminedaniels@gmail.com"> 
                            <img src={gmail} alt="gmail thumbnail" className="contact-img"></img>
                        </a>  
                    </div>
                    <div className="contact-image">
                        <a href="https://github.com/JasmineDaniels" target="_blank" rel="noopener noreferrer"> 
                            <img src={gh} alt="gitHub thumbnail" className="contact-img"></img>
                        </a>  
                    </div>
                    <div className="contact-image mt-2">
                        <a href="https://www.linkedin.com/in/jasmine-daniels-3a15a1235/" target="_blank" rel="noopener noreferrer"> 
                            <img src={linkedIn} alt="linkedIn thumbnail" className="contact-img"></img>
                        </a>  
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="/contact" method="post">
                        <div className="form-group mb-3">
                            <label for="inputName" className="mb-1">Name:</label>
                            <input 
                            type="text" 
                            name="name" 
                            className="form-control" 
                            id="inputName" 
                            value={name}
                            onChange={handleInputChange}
                            placeholder="Your Name" 
                            required></input>
                        </div>

                        <div className="form-group mb-3">
                            <label for="phone" className="mb-1">Phone:</label>
                            <input type="text" 
                            className="form-control" 
                            id="phone" 
                            name="phone"
                            value={phone}
                            onChange={handleInputChange}
                            placeholder="(444)-444-4444"></input>
                        </div>

                        <div className="form-group mb-3">
                            <label for="exampleInputEmail1" className="mb-1">Email address:</label>
                            <input 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="exampleInputEmail1" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email" 
                            required></input>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1" className="mb-1">Message:</label>
                            <textarea 
                            className="form-control" 
                            id="exampleFormControlTextarea1" 
                            name="message"
                            value={message}
                            onChange={handleInputChange}
                            rows="3" 
                            placeholder="Ex. Questions, Best time to contact, etc."></textarea>
                        </div>
                        <div className="text-center">
                            <button 
                            id="submit-form" 
                            type="submit" 
                            className="btn btn-primary my-3" 
                            onClick={handleFormSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </section>
        
    )
}