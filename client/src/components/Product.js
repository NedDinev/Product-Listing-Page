import { useState } from "react";
import { Alert, Button, Card, Modal } from "react-bootstrap";
import Rating from "./Rating";

export default function Product(props) {
  const { product } = props;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = (product) => {
    handleShow();

    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  return (
    <Card>
      <img className="card-img-top" src={product.image} alt={product.name} />

      <Card.Body className="card-body">
        <Card.Subtitle className="mb-3 card-title">
          {product.name}
        </Card.Subtitle>

        <Rating rating={product.rating} />
        <Card.Text className="mb-3 card-description">
          {product.description}
        </Card.Text>
        {product.discount ? (
          <Card.Text className="mb-3 discount ">${product.price}</Card.Text>
        ) : (
          <Card.Text className="mb-3">${product.price}</Card.Text>
        )}

        <Button variant="dark" onClick={() => addToCartHandler(product)}>
          Add to cart
        </Button>

        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Body>Product added to cart! 🛒</Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
  );
}
