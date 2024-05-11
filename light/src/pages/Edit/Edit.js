import React, {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import {Link, useMatch, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editProduct, getProduct} from "../../JS/Actions/product";
import "./Edit.css";

const Edit = () => {
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
  });
  const dispatch = useDispatch();
  const productToGet = useSelector(
    (state) => state.productReducer.productToGet
  );
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();
  const HandleChange = (e) => {
    setNewProduct({...newProduct, [e.target.name]: e.target.value});
  };
  useEffect(() => {
    dispatch(getProduct(match.params.id));
  });
  const handleEdit = () => {
    dispatch(editProduct(match.params.id, newProduct));
    navigate(-1);
  };
  return (
    <div className="edit-me">
      <Card style={{width: "18rem"}}>
        <Card.Body>
          <Form.Label>Title :</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.title}`}
            name="title"
            value={newProduct.title}
            onChange={HandleChange}
          />
          <Form.Label>Description :</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.description}`}
            name="description"
            value={newProduct.description}
            onChange={HandleChange}
          />
          <Form.Label>Price :</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${productToGet.price}`}
            name="price"
            value={newProduct.price}
            onChange={HandleChange}
          />
          <hr></hr>
          <Link to="/products">
            <Button variant="primary" type="submit" onClick={handleEdit}>
              Edit Product
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Edit;
