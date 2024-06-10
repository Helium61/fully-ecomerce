// src/components/Categories.js


import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { useRef, useState } from 'react';
import QuickView from '../components/Quick View';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

const Categories = ({ categories }) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);
   // Get the dispatch function

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
    setCurrentIndex(currentIndex + 1);
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
    setCurrentIndex(currentIndex - 1);
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
        <h2 className="text-6xl text-center mb-10 mt-14 text-black font-serif">Sneakers</h2>
        <Slider {...settings} ref={sliderRef}>
          {categories.map((category) => (
            <div key={category.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a
                className="block relative h-48 rounded overflow-hidden cursor-pointer"
                // onClick={() => navigate(`/category/${category.id}`)}
              >
                <img alt="category" className="object-cover object-center w-full h-full block" src={category.image} />
                <button className="quick-view-btn absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 text-white opacity-0 hover:opacity-100 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent navigation on button click
                    openQuickView(category); // Open the QuickView
                  }}>
                  Quick View
                </button>
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 flex text-xs tracking-widest title-font mb-1">{(category.rating)}</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">{category.name}</h2>
                <p className="mt-1">${category.price}</p>
                {/* <button 
                  className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md cursor-pointer"
                  onClick={() => handleAddToCart(category)}
                >
                  Add to Cart
                </button> */}
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

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Categories;