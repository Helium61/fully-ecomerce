import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div className={`fixed top-0 left-0 w-80 bg-gray-900 text-white h-full z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="p-4">
        <h2 className="text-2xl mb-4">Shopping Cart</h2>
        <button onClick={onClose} className="text-red-500 hover:text-red-700">Close</button>
        
        <div className="mt-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <h3 className="text-lg font-medium">{item.name}</h3>
                <span className="px-4">Quantity: {item.quantity}</span>
                <span className="px-4">Price: ${(item.price * item.quantity).toFixed(2)}</span> {/* Calculate total price */}
              </div>
            </div>
          ))}
        </div>
        <Link to="/checkout">
          <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded-md inline-block">Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
