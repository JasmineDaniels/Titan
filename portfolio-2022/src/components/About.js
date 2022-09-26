import avatar from '../images/avatar.png'
//import axios from "axios"
//import FileDownload from 'js-file-download'
import Resume from '../Resume.pdf'
export default function About(){
    const style = {
        height: "300px"
    }

    // const download = async (e) => {
    //     e.preventDefault()

    //     await axios({
    //         url: 'http://localhost:3001/',
    //         method: 'GET',
    //         responseType: 'blob'
    //     }).then((res) => {
    //         console.log(res)
    //         FileDownload(res.data, 'JDanielsResume.png')
    //     })

    //     // await axios({
    //     //     url: 'https://www.canva.com/design/DAFJ-M8DVn8/QKvh9Z7KrXONDh94GjkJuw/view?utm_content=DAFJ-M8DVn8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    //     //     method: 'POST',
    //     // })
    // }

    return (
        <section className="container mt-5" id="About">
            <div className="row mx-auto justify-content-center">
                <div className="col-md-6 ">
                    <h2>ABOUT ME</h2>
                    <p>
                        A professional software developer with experience in building full stack web applications with user friendly front-end designs that compliment new or existing database structures and maintenance protocols. 

                        <br></br> Creative and technical skills backed with 10+ years of customer service background allow me to excel in producing projects and features that make an impact for the end user and retain client relationships.
         
                    </p>

                    <div>
                        {/* <button 
                        type='button' 
                        className="btn btn-primary"
                        onClick={(e) => download(e)}>Download Resume</button> */}
                        
                        {/* <a href="https://www.canva.com/design/DAFJ-M8DVn8/QKvh9Z7KrXONDh94GjkJuw/view?utm_content=DAFJ-M8DVn8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"  
                            type="button" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary mx-2"> View Resume
                        </a> */}

                        <a 
                            href={Resume}  
                            type="button" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary mx-2"> View Resume
                        </a>

                        {/* <button  
                            onClick={(e) => download(e)} 
                            type="button" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn btn-primary">Download Resume
                        </button> */}
                        
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        <img src={avatar} alt="" style={style} className="float-start"></img>
                    </div>
                </div>
            </div>

        </section>
    );
}