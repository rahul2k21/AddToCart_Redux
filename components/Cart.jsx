import React from 'react'
import { useSelector } from 'react-redux'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from '../store/cartSlice';

import { useDispatch } from 'react-redux';

function Cart() {
  const productCart=useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id)=>{
     dispatch(remove(id));

  }

  const cards = productCart.map((product) => (
    <div className="col-md-12 mb-4">
      <Card key={product.id} className="h-100">
        <div className="tecxt-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR : {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button variant="danger" onClick={() => removeToCart(product.id)}>
            Remove Item
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return(
    <>
    {cards}
    </>
  )

}

export default Cart
