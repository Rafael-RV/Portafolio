import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import proyectosData from '../../data.json';
import '../CardsComp/CardsComp.css'; 

function CardsComp() {
  return (
    <div>
      <h2 className='projects'>Proyectos</h2>
      <div className="proyectos-container">
        {proyectosData.proyectos.map((proyecto, index) => (
          <Card key={index} className="proyecto-card">
            <div className="card-content">
              <Card.Img variant="top" src={proyecto.img} alt={proyecto.nombre} />
            </div>
            <Card.Body>
              <Card.Title>{proyecto.nombre}</Card.Title>
              
              <Button  href={proyecto.demo} target="_blank">
                Ver Demo
              </Button>
              <a   href={proyecto.repositorio} target="_blank" style={{ marginLeft: '10px' }}>
              <ion-icon name="logo-github"></ion-icon>
              </a>
              <a href={proyecto.credencial} target="blank">
                <img src={proyecto.certificacion} alt={proyecto.nombre}/>
              </a>
              
             
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardsComp;
