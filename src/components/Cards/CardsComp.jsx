import React from 'react';
import proyectosData from '../../data.json';
import Button from 'react-bootstrap/Button';
import './CardsComp.css';

function CardsComp() {
    return (
        
        <div  className="d-flex flex-wrap justify-content-around">
            {proyectosData.proyectos.map((proyecto, index) => (
                <div key={index} className="card mb-3" style={{ maxWidth: '300px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={proyecto.img} className="img-fluid rounded-start" alt={proyecto.nombre} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{proyecto.nombre}</h5>
                                <div className="card-text">

                                    <a href={proyecto.credencial} target="_blank" rel="noopener noreferrer">
                                        <img className='credencial' src={proyecto.certificacion} alt={proyecto.nombre} />
                                    </a>
                                </div>
                                <Button href={proyecto.demo} target="_blank" variant="outline-danger">Ver Demo</Button>
                                <a className='card-icon' href={proyecto.repositorio} target="_blank" rel="noopener noreferrer">
                                    <ion-icon name="logo-github"></ion-icon>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardsComp;
