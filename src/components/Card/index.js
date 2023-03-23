import React from "react";

const Card = ({id,title,price,imageUrl,onFavorite,favorited = false,}) => {
  const [isFavorite, setIsFavorite] = React.useState(favorited);
  const obj = { id, parentId: id, title, imageUrl, price };
  
  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };
  return (
    <div className="product">
      <div className="products__image">
        <a href="/" className="products__image-block">
          <img src={imageUrl} alt="Product 01" />
        </a>

        <a href="/" className="add-to-wishlist" onClick={onClickFavorite}>
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </a>
      </div>
      <div className="product__body">
        <h3>
          <a href="/">{title}</a>
        </h3>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Card;
