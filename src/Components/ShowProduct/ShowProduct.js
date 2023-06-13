import React from "react";
import { addToCart } from "../redux/Product/actions";
import { useDispatch } from "react-redux";

const ShowProduct = ({ product }) => {
  const { title, details, price, image, quantity, uniqueId } = product;
  const dispatch = useDispatch();

  const hanldeAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className="bg-cover bg-center bg-no-repeat h-[300px]"
      ></div>
      <div>
        <div className="flex items-center justify-between ">
          <h2 className="my-3">{title}</h2>
          <p className="bg-orange-500 text-white w-[50px] h-[50px] p-3 mt-3 text-center rounded-full">
            {quantity}
          </p>
        </div>
        <p className="mb-3">Price : {price}</p>
        <p className=""> {details.slice(0, 70)}</p>
        <div className="flex items-center gap-5 mt-5">
          <button className="bg-orange-500 border-2 border-orange-500 px-6 py-2 text-white rounded-md">
            Buy Now
          </button>
          <button
            onClick={hanldeAddToCart}
            className="border-2 border-orange-500 px-6 py-2  rounded-md"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
