import React from "react";
import CreateProduct from "../CreateProduct/CreateProduct";
import { useSelector } from "react-redux";
import ShowProduct from "../ShowProduct/ShowProduct";
const Home = () => {
  const productData = useSelector((state) => state.product);
  console.log(productData);
  return (
    <div>
      <div className="flex flex-row gap-10">
        <div className="basis-8/12">
          <div className="grid md:grid-cols-2 gap-10">
            {productData.map((product) => (
              <ShowProduct product={product}></ShowProduct>
            ))}
          </div>
        </div>
        <div className="basis-4/12">
          <CreateProduct></CreateProduct>
        </div>
      </div>
    </div>
  );
};

export default Home;
