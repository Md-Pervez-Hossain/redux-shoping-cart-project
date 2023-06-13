import React from "react";
import { useSelector } from "react-redux";
import ShowCartProduct from "./ShowCartProduct";

const Cart = () => {
  const cartProduct = useSelector((state) => state.cart);
  console.log(cartProduct);
  let totalAmount = 0;
  for (const priceProduct of cartProduct) {
    const amount = parseInt(priceProduct.price);
    totalAmount = totalAmount + amount;
  }
  return (
    <div className="w-1/2 mx-auto my-16">
      <div className="grid grid-cols-1 gap-10">
        {cartProduct?.map((product) => (
          <ShowCartProduct product={product}></ShowCartProduct>
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <p className="text-xl font-bold ">Total Amount : {totalAmount} BDT</p>
      </div>
    </div>
  );
};

export default Cart;
