// src/pages/LandingPage.jsx

import heroList from '../data/heroList';
import headphoneList from '../data/headphoneList'; // Import the headphone data
import HeroItem from '../components/HeroItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Categories from '../components/Categories';
import HeadphoneCategories from '../components/HeadphoneCategories'; 
import ShippingInfo from '../components/ShippingInfo';

const categories = [
  {
    id: 1,
    name: 'Sneakers 1',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1542291026-7eec264c27ff.avif',
    price: 249.99,
  },
  {
    id: 2,
    name: 'Sneakers 2',
    description: 'EPremium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1549298916-b41d501d3772.avif',
    price: 249.99,
  },
  {
    id: 3,
    name: 'Sneakers 3',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1552346154-21d32810aba3.avif',
    price: 249.99,
  },
  {
    id: 4,
    name: 'Sneakers 4',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1600185365483-26d7a4cc7519.avif',
    price: 249.99,
  },
  {
    id: 5,
    name: 'Sneakers 5',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1514989940723-e8e51635b782.avif',
    price: 249.99,
  },
  {
    id: 6,
    name: 'Sneakers 6',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1552066344-2464c1135c32.avif',
    price: 249.99,
  },
  {
    id: 7,
    name: 'Sneakers 7',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1556637640-2c80d3201be8.avif',
    price: 249.99,
  },
  {
    id: 8,
    name: 'Sneakers 8',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1608231387042-66d1773070a5.avif',
    price: 249.99,
  },
  {
    id: 9,
    name: 'Sneakers 9',
    description: 'Premium Materials: Made from high-quality, durable materials to ensure long-lasting comfort and style Sleek Design: With a minimalist yet eye-catching design, these sneakers are perfect for any occasion, whether its a casual day out or a night on the town.',
    image: 'Images/photo-1600185365483-26d7a4cc7519.avif',
    price: 249.99,
  },
];

const LandingPage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="p-8">
      <section className="bg-white relative z-1">
        <h1 className='text-center text-6xl mt-10 font-serif'>Fusion of Footwear and Music</h1>
        <h1 className='text-center text-6xl mt-5 mb-10 font-serif'>Style Meets Sound</h1>
       
        <Slider {...settings}>
          {heroList.map((item) => (
            <HeroItem
              key={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              color={item.color}
              image={item.image}
            />
          ))}
        </Slider>
      </section>
      <Categories categories={categories} />
      <HeadphoneCategories categories={headphoneList} />
      <ShippingInfo categories={ShippingInfo} />
    </div>
  );
};

export default LandingPage;