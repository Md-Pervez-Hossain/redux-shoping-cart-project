import { ADD_TO_CART, ADD_TO_PRODUCT } from "./actionTypes";

const initialState = {
  test: "test",
  product: [],
  cart: [],
};
export const productReducer = (state = initialState, action) => {
  const seledtedProduct = state.cart.find(
    (product) => product.find === action.payload.uiqueId
  );
  if (seledtedProduct) {
    alert("Already Have");
  }
  switch (action.type) {
    case ADD_TO_PRODUCT:
      return {
        ...state,
        product: [...state.product, action.payload],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
