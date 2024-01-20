import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Product(props) {
    return (
        <div>
            <Link to={`/courses/${props.id}`} style={{ textDecoration: "none" }}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text className='mt-3'>
                            {props.price}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}