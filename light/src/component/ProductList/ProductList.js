import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../JS/Actions/product";
import ProductCard from "../ProductCard/ProductCard";
import Spinner from "react-bootstrap/Spinner";
import "./ProductList.css";

const ProductList = () => {
  const listProducts = useSelector(
    (state) => state.productReducer.listProducts
  );
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div className="product-list">
      {load ? (
        <h1>
          {" "}
          <Spinner className="SPINNER" animation="border" variant="primary" />
        </h1>
      ) : (
        listProducts.map((el) => <ProductCard product={el} key={el._id} />)
      )}
    </div>
  );
};

export default ProductList;
