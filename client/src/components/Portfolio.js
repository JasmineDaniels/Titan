import '../css/portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Portfolio({ portfolios, projects }) {

    return (
        <Container>
            <h3 className='mt-5 featured-projects'>Featured Projects</h3>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                breakpoints={{
                    400: {
                        width: 390,
                        slidesPerView: 1,
                    },
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2,
                    },
                    
                }}
                spaceBetween={50}
                // slidesPerView={3}
                autoplay={true}
                navigation
                pagination={{ clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {portfolios.map((port, idx) => (
                    <Col md='4' key={idx} className="card mx-auto">
                        <SwiperSlide className='swiper-container mb-5'>
                            <div className='project-image mx-auto p-2'>
                                <img
                                    src={port.img}
                                    className="card-img-top project-img "
                                    alt="project" />
                            </div>
                            <div className="card-body mx-3" >
                                <h5 className="card-title text-center">{`${port.title}`}</h5>
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
                <h3 className='mt-5 featured-projects'>Recent Projects</h3>

                {projects.map((p, index) => (
                    <Col md='4' key={index} className="card my-3 mx-auto">

                        <div className="card-body mx-3" >
                            <a
                            className='nav-link project-link'
                            href={`https://github.com/JasmineDaniels/${p.name}`}>
                            <h5 className="card-title text-center">{`${p.name}`}
                            <FontAwesomeIcon className='mx-2' icon={faCodeBranch} /> 
                            </h5>
                              
                            </a>                                             
                            <p className="card-text">{`${p.description}`}</p>
                            {p.homepage ? (
                                <div className='text-center'>
                                    <div>
                                        <a
                                            href={p.homepage}
                                            className="card-link"
                                            target="_blank"
                                            rel="noopener noreferrer">View Site
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href={`https://github.com/JasmineDaniels/${p.name}`}
                                            className="card-link"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            View Repository
                                        </a>
                                    </div>
                                </div>

                            ) : (
                                <div className='text-center'>
                                    <a
                                        href={`https://github.com/JasmineDaniels/${p.name}`}
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