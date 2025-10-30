import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../features/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span>
              {item.name} (${item.price})
            </span>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: +e.target.value }))
              }
            />
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
