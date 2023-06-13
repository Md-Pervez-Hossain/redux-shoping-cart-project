import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartData = useSelector((state) => state.cart);
  return (
    <div>
      <div className="flex justify-between font-bold py-8 ">
        <div>
          <Link>
            <h2>Logo</h2>
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/cart">
            <div>
              <span className="ml-8">{cartData.length}</span>
              <h2 className="mb-5"> Cart </h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
