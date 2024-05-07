import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../JS/Actions/product";
import {useNavigate} from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <Card style={{width: "18rem"}}>
        <Card.Body className="my-card">
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <div className="two-buttons">
            <Button
              className="delete"
              variant="primary"
              onClick={() => dispatch(deleteProduct(product._id))}>
              Delete product
            </Button>
            <Button
              className="edit"
              variant="primary"
              onClick={() => navigate(`/edit/${product._id}`)}>
              Edit product
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
