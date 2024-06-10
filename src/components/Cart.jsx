// src/components/Cart.js

import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../redux/features/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <h1 className="text-3xl">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="mt-4">
          {cart.map(item => (
            <div key={item.id} className="border p-4 mb-4 flex justify-between">
              <div>
                <h2>{item.name}</h2>
                <p>{item.price} USD</p>
              </div>
              <button 
                onClick={() => dispatch(removeProductFromCart(item.id))}
                className="bg-red-500 text-white px-4 py-2"
              >
                Remove
              </button>
            </div>
          ))}
          <Link to="/checkout" className="bg-green-500 text-white px-4 py-2">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;