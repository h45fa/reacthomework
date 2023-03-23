import React from "react";
import "./Wishlist.css";
import "./reset.css";
import WishlistItem from "../../components/wishlistItem";
import AppContext from "../../context";

function Wishlist() {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
  return (
    <body>
      <div class="container">
        <h2 class="wishlist__title">Wishlist</h2>

        <div class="list">
        {favorites.map((item, index) => (
          <WishlistItem key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
        ))}
        </div>
      </div>
    </body>
  );
};

export default Wishlist;
