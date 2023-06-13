import React from "react";
import { useDispatch } from "react-redux";
import { addToProduct } from "../redux/Product/actions";
import { v4 } from "uuid";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const uniqueId = v4();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const details = form.details.value;
    const image = form.image.value;
    const quantity = form.quantity.value;
    const formData = new FormData();
    formData.append("image", image);
    const productInfo = {
      title,
      price,
      details,
      image,
      uniqueId,
      quantity,
    };
    console.log(productInfo);
    dispatch(addToProduct(productInfo));
    // fetch(
    //   "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     const image = data?.data?.display_url;
    //     const productInfo = {
    //       title,
    //       price,
    //       details,
    //       image,
    //     };
    //     console.log(productInfo);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          required
          className="input input-bordered w-full mb-3"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          required
          className="input input-bordered w-full mb-3"
        />
        <input
          type="text"
          name="image"
          placeholder="Image Link"
          required
          className="input input-bordered w-full mb-3"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Enter Quantity"
          required
          className="input input-bordered w-full mb-3"
        />

        <textarea
          name="details"
          required
          className="textarea textarea-bordered w-full mb-3"
          placeholder="Product Description"
        ></textarea>
        <button className="btn btn-success text-white w-full">Default</button>
      </form>
    </div>
  );
};

export default CreateProduct;
