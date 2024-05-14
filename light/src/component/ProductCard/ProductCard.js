import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useDispatch} from "react-redux";
import {deleteProduct} from "../../JS/Actions/product";
import {useNavigate} from "react-router-dom";
import productImage from "../assets/ProductImage.png";
import "./ProductCard.css";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="my-cards">
      <Card style={{width: "18rem"}}>
        <Card.Body className="my-card">
          <img src={productImage} alt="img" width={230} height={150}></img>
          <hr></hr>
          <Card.Title>{product.title}</Card.Title>
          <hr></hr>
          <Card.Text>{product.description}</Card.Text>
          <hr></hr>
          <Card.Text>{product.price}</Card.Text>
          <hr></hr>
          <div className="two-buttons">
            <Button
              variant="danger"
              onClick={() => dispatch(deleteProduct(product._id))}>
              Delete product
            </Button>
            <Button
              className="Edit-me"
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
