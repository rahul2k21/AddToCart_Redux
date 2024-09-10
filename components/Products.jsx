import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {add} from '../store/cartSlice';
import { useDispatch } from "react-redux";

function Products() {
  const dispatch=useDispatch();
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setdata(result));
  }, []);

  const addToCart = (product) => {
    dispatch(add(product));
  };


  const cards = data.map((product) => (
    <div className="col-md-3 mb-4">
      <Card key={product.id} className="h-100">
        <div className="tecxt-center">
        <Card.Img variant="top" src={product.image} style={{width:'100px',height:'130px'}} />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
           INR : {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{background:"white"}}>
          <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <>
      <div className="row">{cards}</div>
    </>
  );
}

export default Products;
