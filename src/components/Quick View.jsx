import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/features/cartSlice";

import {
  FaPlus,
  FaMinus,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";

const QuickView = ({ category, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const RenderRatingStars = (rating) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStars = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < totalStars; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} color="#ff8a00" />);
      } else if (hasHalfStars && i === fullStars) {
        stars.push(<FaStarHalfAlt key={i} color="#ff8a00" />);
      } else {
        stars.push(<FaRegStar key={i} color="#ff8a00" />);
      }
    }

    return stars;
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    // Dispatch multiple actions based on the quantity
    for (let i = 0; i < quantity; i++) {
      const product = {
        id: category.id,
        name: category.name,
        price: category.price,
        quantity: 1, // Always add 1 item at a time
      };
      dispatch(addProductToCart(product)); // Dispatch the add to cart action
    }
    onClose(); // Close the QuickView
  };

  return (
    <div className="quick-view-overlay">
      <div className="quick-view-content">
        <button className="close-button text-4xl mb-5" onClick={onClose}>
          ×
        </button>
        <div className="quick-view-container">
          <div className="quick-view-image">
            <img
              src={category.image}
              alt={category.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="quick-view-description">
            <h2>{category.name}</h2>
            <p>Price: ${category.price}</p>
            <div className="flex">Rating: {RenderRatingStars(category.rating)}</div>
            <p>Description: {category.description}</p>
            <div className="quantity-control flex items-center mt-5">
              <div className="quantity-btn-box ">
                <button
                  className="quantity-btn border border-gray-300 rounded-md p-1"
                  onClick={handleDecreaseQuantity}
                >
                  <FaMinus size={12} />
                </button>
                <span className="quantity">{quantity}</span>
                <button
                  className="quantity-btn border border-gray-300 rounded-md p-1"
                  onClick={handleIncreaseQuantity}
                >
                  <FaPlus size={12} />
                </button>
              </div>
              <button
                className="add-to-cart-btn bg-gray-900 text-white px-4 py-2 rounded-md cursor-pointer ml-4"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

QuickView.propTypes = {
  category: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default QuickView;
