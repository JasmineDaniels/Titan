import '../css/portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio({ portfolios, projects }) {

    console.log(portfolios)
    return (
        <Container>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {portfolios.map((port, index) => (
                    <Col md='4' key={index} className="card my-3 mx-auto">
                        <SwiperSlide className='mb-4'>
                        <div className='project-image mx-auto p-2'>
                            <img 
                            src={port.img}
                            className="card-img-top project-img " 
                            alt="project"/>
                        </div>
                        <div className="card-body mx-3" >
                            <h5 className="card-title">{`${port.title}`}</h5>
                            <p className="card-text">{`${port.description}`}</p>
                            {port.site ? (
                                <div className='text-center'>
                                <div>
                                    <a
                                        href={port.site} 
                                        className="card-link"
                                        target="_blank"
                                        rel="noopener noreferrer">View Site
                                    </a>
                                </div>
                                <div>
                                    <a
                                        href={port.repo}
                                        className="card-link"
                                        target="_blank"
                                        rel="noopener noreferrer">View Repository
                                    </a>
                                </div>
                                </div>
                            ) : (
                                <div className='text-center'>
                                    <a
                                        href={port.repo}
                                        className="card-link"
                                        target="_blank"
                                        rel="noopener noreferrer">View Repository</a>
                                </div>

                            )}
                        </div>
                        </SwiperSlide>
                    </Col>
                ))}
            </Swiper>

            <Row className="my-5 " id="Projects">
                {projects.map((port, index) => (
                    <Col md='4' key={index} className="card my-3 mx-auto">
                
                        <div className="card-body mx-3" >
                            <h5 className="card-title text-center">{`${port.name}`}</h5>
                            <p className="card-text">{`${port.description}`}</p>
                            {port.homepage ? (
                                <div>
                                    <a
                                        href={port.homepage}
                                        className="card-link"
                                        target="_blank"
                                        rel="noopener noreferrer">View Site</a>

                                    <a
                                        href={`https://github.com/JasmineDaniels/${port.name}`}
                                        className="card-link"
                                        target="_blank"
                                        rel="noopener noreferrer">View Repository
                                    </a>
                                </div>
                            ) : (
                                <div>
                                    <a
                                        href={`https://github.com/JasmineDaniels/${port.name}`}
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