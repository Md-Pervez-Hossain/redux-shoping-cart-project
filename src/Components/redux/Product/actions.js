import { ADD_TO_CART, ADD_TO_PRODUCT } from "./actionTypes";

export const addToProduct = (product) => {
  return {
    type: ADD_TO_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};
