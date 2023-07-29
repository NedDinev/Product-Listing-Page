import { Button, Card } from "react-bootstrap";
import Rating from "../Rating/Rating";

export default function Product(props) {
  const { product } = props;

  const isOutOfStock = product.quantity > 0;

  const addToCartHandler = (product) => {};

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
        <Card.Text className="mb-3">${product.price}</Card.Text>
        {!isOutOfStock && (
          <Button variant="light" disabled>
            Out of stock
          </Button>
        )}
        {isOutOfStock && (
          <Button onClick={() => addToCartHandler(product)}>Add to cart</Button>
        )}
      </Card.Body>
    </Card>
  );
}
