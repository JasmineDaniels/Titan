import '../css/portfolio.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio ({ portfolios }){
    
    console.log(portfolios)
    return (
        <Container>
            <Row className="my-5 " id="Projects">
                {portfolios.map((port, index) => (
                    // <div key={index} className="card" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/${port.img})`}}>
                    <Col md='4' key={index} className="card my-3 mx-auto">
                        <div className='project-image mx-auto p-2'>
                            <img src={port.img} className="card-img-top project-img " alt="project"></img>
                        </div>
                        <div className="card-body mx-3" >
                            <h5 className="card-title">{`${port.title}`}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">{`${port.description}`}</p>
                            {port.site ? (
                                <div>
                                    <a 
                                    href={port.site} 
                                    className="card-link"
                                    target="_blank" 
                                    rel="noopener noreferrer">View Site</a>

                                    <a 
                                        href={port.repo} 
                                        className="card-link"
                                        target="_blank" 
                                        rel="noopener noreferrer">View Repository
                                    </a>
                                </div>
                            ) : (
                                <div>
                                    <a 
                                    href={port.repo} 
                                    className="card-link"
                                    target="_blank" 
                                    rel="noopener noreferrer">View Repository</a>
                                </div>
                            
                            )}
                        </div>   
                    </Col>
                ))}
                
            </Row>
        </Container>
        
        
    )
}