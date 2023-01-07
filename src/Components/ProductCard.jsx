import React from 'react'
import {Button,Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ProductCard = ({item}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.pic} />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
        {item.prix} $
        </Card.Text>
<Link to={`/details/${item.id}`}>
<Button variant="primary">Info</Button>
</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard