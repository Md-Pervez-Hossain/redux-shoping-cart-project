import React from "react";

const ShowCartProduct = ({ product }) => {
  const { image, title, price } = product;
  return (
    <div>
      <div className="flex items-center gap-10 justify-between">
        <div>
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="bg-cover bg-center bg-no-repeat h-[100px] w-[100px]"
          ></div>
        </div>
        <div>
          <div className="flex items-center gap-5 text-xl font-bold">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
        </div>
        <div className="text-xl font-bold">
          <p>Price : {price} BDT</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCartProduct;
