import React from 'react';
import CartItem from '../../components/cartItem';
import "./Cart.css";
import "./reset.css";

const Cart = () => {
  return (
    <body>
    <h1 class="cart__title">Shopping Cart</h1>

    <div class="container">
      <div class="cart__grid">
        <div class="cart__list">
          <CartItem/>
        </div>

        <div class="summary">
          <h4 class="summary__title">Summary</h4>

          <div class="summary__body">
            <div class="summary__line">
              <div>Total</div>
              <div>$2020.00</div>
            </div>
          </div>

          <button type="submit" class="btn btn-dark btn-full-width">
            Check Out
          </button>
        </div>
      </div>
    </div>
  </body>
  )
}

export default Cart