import React, { useState } from "react"
import '../css/contact.css'
import { validateEmail } from '../utils/helpers.js'
import axios from 'axios'
import gmail from '../images/gmlogo.png'
import gh from '../images/GH1.png'
import linkedIn from '../images/linkedin1.png'
import { Modal } from 'react-bootstrap'

export default function Contact() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // eslint-disable-next-line no-unused-vars
    const [submit, setSubmit] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const [errMsg, setErrMsg] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        //switch
        if (inputType === 'name') {
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

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email) {
                setErrMsg('Name and Email are required');
                return;
            }

            const checkEmail = validateEmail(email)
            if (checkEmail === false) {
                setErrMsg('Please enter a valid Email')
                return;
            }

            //send form node mailer
            await axios.post('/api/contact', {
                name: name,
                email: email,
                phone: phone,
                message: message
            })

        } catch (error) {

            if (error.code !== 'ERR_BAD_REQUEST') {
                throw error;
            }
            setName('')
            setPhone('')
            setEmail('')
            setMessage('')
            //setSubmit(!submit)

            if (submit === true) {
                setShowModal(!showModal);
            } else {
                setShowModal(!showModal);
            }
        }
    }


    return (
        <section id="Contact" className="container my-5">
            <h2>CONTACT</h2>
            <br></br>

            <div>
                <div className="col-md-3 mx-auto list-unstyled d-flex">
                    <div className="contact-image mx-1">
                        <a href="mailto:create.jasminedaniels@gmail.com">
                            <img src={gmail} alt="gmail thumbnail" className="contact-img"></img>
                        </a>
                    </div>
                    <div className="contact-image mx-1">
                        <a href="https://github.com/JasmineDaniels" target="_blank" rel="noopener noreferrer">
                            <img src={gh} alt="gitHub thumbnail" className="contact-img" />
                        </a>
                    </div>
                    <div className="contact-image ">
                        <a href="https://www.linkedin.com/in/jasmine-daniels-3a15a1235/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedIn} alt="linkedIn thumbnail" className="contact-img" />
                        </a>
                        <div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mx-auto">
                    <div
                        // ref={errRef}
                        className={errMsg ? 'errfont text-center mt-3' : 'offscreen'}
                        aria-live="assertive">
                        {errMsg}
                    </div>
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
            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='thank-you-modal'>
                <Modal.Header closeButton>
                    <Modal.Title id='thank-you-modal'>

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <h3>Success!</h3>
                    <h4> Thank you so much for your Interest </h4>
                    <br></br>
                    <h5> I have recieved your message,
                        <br></br> I will contact you shortly
                        <br></br> 😃
                    </h5>

                </Modal.Body>
                <Modal.Footer>
                    <div className="mx-auto">
                        <button className='btn btn-primary' onClick={() => setShowModal(!showModal)}>
                            Close
                        </button>
                    </div>

                </Modal.Footer>
            </Modal>

            {/* <div className="row">
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
            </div> */}

        </section>

    )
}