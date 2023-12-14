import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import proyectosData from '../../data.json';
import '../CardsComp/CardsComp.css'; 

function CardsComp() {
  return (
    <div className="proyectos-container">
      {proyectosData.proyectos.map((proyecto, index) => (
        <Card key={index} className="proyecto-card">
          <Card.Img variant="top" src={proyecto.img} alt={proyecto.nombre} />
          <Card.Body>
            <Card.Title>{proyecto.nombre}</Card.Title>
            <Card.Text>{/* Agrega el contenido del texto si es necesario */}</Card.Text>
            <Button variant="primary" href={proyecto.demo} target="_blank">
              Ver Demo
            </Button>
            <Button variant="secondary" href={proyecto.repositorio} target="_blank" style={{ marginLeft: '10px' }}>
              Ver Repositorio
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardsComp;
