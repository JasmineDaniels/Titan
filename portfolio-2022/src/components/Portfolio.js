//import portfolios from "./utils/portfolios"

export default function Portfolio ({ portfolios }){
    
    console.log(portfolios)
    return (
        <div className="row " id="Projects">
            <div className="col-md-4">
                {portfolios.map((port, index) => (
                    <div key={index} className="card" alt="" style={{backgroundImage: `url("../images/${port.img}")`}}>
                        <div className="card-body">
                            <h5 className="card-title">{`${port.title}`}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">{`${port.description}`} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href={port.site} className="card-link">View Site</a>
                            <a href={port.repo} className="card-link">View Repository</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

// eslint-disable-next-line
{/* <div className="row " id="Projects">
            <div className="col-md-4">
                {portfolios.map((port, index) => (
                    <div key={index} className="card" alt="" src={require('../images/' + port.img )}>
                        <div className="card-body">
                            <h5 className="card-title">{`${port.title}`}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                            <p className="card-text">{`${port.description}`} Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href={port.site} className="card-link">View Site</a>
                            <a href={port.repo} className="card-link">View Repository</a>
                        </div>
                    </div>
                ))}
            </div>
        </div> */}