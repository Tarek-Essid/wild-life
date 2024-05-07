// IMPORTATION
import axios from "axios";
import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCCESS_PRODUCT,
} from "../ActionTypes/product";

// Get all product
export const getProducts = () => async (dispatch) => {
  dispatch({type: LOAD_PRODUCT});
  try {
    let result = await axios.get("/api/product/all");
    dispatch({type: SUCCESS_PRODUCT, payload: result.data});
  } catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response});
  }
};

// Add product
export const addProduct = (newProduct) => async (dispatch) => {
  try {
    await axios.post("/api/product/add", newProduct);
    dispatch(getProducts());
  } catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response});
  }
};

// Delete product
export const deleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/product/${id}`);
    dispatch(getProducts());
  } catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response});
  }
};

// Edit product
export const editProduct = (id, newProduct) => async (dispatch) => {
  try {
    await axios.put(`/api/product/${id}`, newProduct);
    dispatch(getProducts());
  } catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response});
  }
};

// Get one product
export const getProduct = (id) => async (dispatch) => {
  dispatch({type: LOAD_PRODUCT});
  try {
    let result = await axios.get(`/api/product/${id}`);
    dispatch({type: ONE_PRODUCT, payload: result.data});
  } catch (error) {
    dispatch({type: FAIL_PRODUCT, payload: error.response});
  }
};
