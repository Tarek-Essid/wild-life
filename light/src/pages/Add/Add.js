import React, {useState} from "react";
import {useDispatch} from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import {addProduct} from "../../JS/Actions/product";
import {Link} from "react-router-dom";
import "./Add.css";

const Add = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value});
  };
  const add = () => {
    dispatch(addProduct(newProduct));
  };
  return (
    <div className="add-me">
      <Card style={{width: "18rem"}} className="round-me">
        <Card.Body>
          <Form.Label>Title :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={newProduct.name}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Description :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
          <br></br>
          <Form.Label>Price :</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter price"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
          />
          <hr></hr>
          <Link to="/products">
            <Button variant="primary" type="submit" onClick={() => add()}>
              Add Product
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Add;
