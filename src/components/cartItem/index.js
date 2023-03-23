import React from "react";

const CartItem = ({ id, title, price, imageUrl, category }) => {
  return (
    <div className="item">
      <div className="item__content">
        <button href="#" className="item__delete-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <i className="fal fa-times"></i>
        </button>

        <img src={imageUrl} className="item__image" alt="Partridge Bar Stool" />

        <div>
          <p className="item__category">{category}</p>
          <a href="/" className="item__name">
            {title}
          </a>
        </div>
      </div>

      <p>${price}</p>
    </div>
  );
};

export default CartItem;
