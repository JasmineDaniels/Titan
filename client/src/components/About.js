import { useEffect, useState } from 'react';
import '../css/about.css'
//import avatar from '../images/avatar.png'
import TypeWriterEffect from 'react-typewriter-effect';
// import Resume from '../Resume.pdf'
import Resume from '../CookSystemsResume.pdf'
import axios from 'axios';

export default function About() {
    const [profile] = useState("JasmineDaniels")
    const [bio, setBio] = useState('')
    const [avatarURL, setAvatarURL] = useState('')



    useEffect(() => {

        const getProfile = async () => {
            try {
                const response = await axios.get(`https://api.github.com/users/${profile}`)

                const data = await response.data;
                //console.log(data);
                setAvatarURL(data.avatar_url);
                setBio(data.bio);
            } catch (error) {
                console.error(error)
                //setErrMsg(error)
            }

        }

        getProfile()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="container mt-5" id="About">
            <div className="row mx-auto justify-content-center">
                <div className="col-xl-6 col-lg-6">
                    <div className='typewriter'>
                        <h3 className='text first-text'>ABOUT Jasmine
                            <span className='text sec-text mx-2'>
                                <TypeWriterEffect
                                    textStyle={{
                                        fontFamily: 'Arial',
                                        color: 'rgb(240, 67, 153)',
                                        fontWeight: 500,
                                        fontSize: '1em',
                                    }}
                                    startDelay={2000}
                                    cursorColor="#3F3D56"
                                    multiText={[
                                        'Software Engineer.',
                                        'Student.',
                                        'Web Developer.',
                                        'Rockstar!',
                                        'Dog Mom.',
                                        'Driven.',
                                        'Software Developer.'
                                    ]}
                                    multiTextDelay={1000}
                                    typeSpeed={30}
                                />
                            </span>
                        </h3>

                    </div>
                    

                    <div>
                        <p className='main-text'>
                            An innovative {bio} with experience in building full stack web applications
                            with user friendly front-end designs that compliment new or existing database
                            structures and maintenance protocols.
                            <br />
                        </p>

                        <p>
                            Jasmine’s extensive technical skill-set in modern front end Javascript libraries
                            such as React, and backend frameworks such as Spring Boot and Express has shown
                            her to be a self motivated learner and quick to pick up new technologies and
                            programming languages.

                        </p>
                        <p className='main-text'>
                            She has made consistent investments to her professional education
                            by recently earning a certificate in flex full stack development
                            from the Georgia Institute of Technology, as well her completion of
                            the Cook Systems Java enterprise environment development program.
                            <br />

                        </p>

                        <p>
                            Here, she applied various aspects of the full stack software development
                            lifecycle on agile teams and multiple real world projects,
                            where her aim has been to make a positive direct impact on the end user
                            experience and exceed stakeholder expectations.
                        </p>

                        <p>
                            Ten years of customer service background allow her to 
                            leverage cross functional collaboration and the tracking of 
                            corporate initiatives as well as end user satisfaction.

                        </p>
                    </div>


                    <div className='text-center'>

                        <a
                            href={Resume}
                            type="button"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"> View Resume
                        </a>

                    </div>
                </div>
                <div className="col-xl-4 col-lg-6">
                    <div className='image'>
                        <img
                            src={avatarURL}
                            alt="github avatar"
                            className='avi'
                        ></img>
                    </div>
                </div>
            </div>

        </section>
    );
}