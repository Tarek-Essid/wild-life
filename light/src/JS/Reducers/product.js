// Importation
import {
  FAIL_PRODUCT,
  LOAD_PRODUCT,
  ONE_PRODUCT,
  SUCCESS_PRODUCT,
} from "../ActionTypes/product";

// InitialState
const initialState = {
  listProducts: [],
  error: null,
  load: false,
  productToGet: {},
};

// Pure function
const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOAD_PRODUCT:
      return {...state, load: true};
    case SUCCESS_PRODUCT:
      return {...state, load: false, listProducts: payload.listProducts};
    case FAIL_PRODUCT:
      return {...state, load: false, errors: payload};
    case ONE_PRODUCT:
      return {...state, load: false, productToGet: payload.productToGet};
    default:
      return state;
  }
};

// Exports
export default productReducer;
