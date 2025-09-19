import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the freshest ingredients, ensuring a delightful dining
          experience delivered right to your doorstep.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
