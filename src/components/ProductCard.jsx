import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



export const ProductCard = ({product}) => {

     const {name,description,image,price}=product


  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary">{price} DT</Button>
    </Card.Body>
  </Card>
  )
}
