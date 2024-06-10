import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import QuickView from '../components/Quick View';// Import the QuickView component

export const RenderRatingStars = (rating) => {
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

  return <div className="flex">{stars}</div>;
};

const HeadphoneCategories = ({ categories }) => {
  const sliderRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false); // State to control the visibility of QuickView

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const openQuickView = (category) => {
    setSelectedCategory(category);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setSelectedCategory(null);
    setShowQuickView(false);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 mx-auto">
        <h2 className="text-6xl text-center mb-10 mt-20 text-black font-serif">Headphones</h2>
        <Slider {...settings} ref={sliderRef}>
          {categories.map((category) => (
            <div key={category.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <div className="image-container relative">
                <a className="block h-48 rounded overflow-hidden">
                  <img alt={category.name} className="object-cover object-center w-full h-full block" src={category.image} />
                  <button className="quick-view-btn absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent navigation on button click
                      openQuickView(category); // Open the QuickView
                    }}>
                    Quick View
                  </button>
                </a>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 flex text-xs tracking-widest title-font mb-1">{RenderRatingStars(category.rating)}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{category.name}</h2>
                <p className="mt-1">${category.price}</p>
                <p className="text-gray-500 mt-1">{category.description}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-4">
          <button onClick={goToPrevSlide} className="bg-gray-900 text-white px-4 py-2 mr-4 rounded-md cursor-pointer">Previous</button>
          <button onClick={goToNextSlide} className="bg-gray-900 text-white px-4 py-2 rounded-md cursor-pointer">Next</button>
        </div>
      </div>

      {showQuickView && selectedCategory && (
        <QuickView category={selectedCategory} onClose={closeQuickView} />
      )}
    </section>
  );
};

HeadphoneCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default HeadphoneCategories;
