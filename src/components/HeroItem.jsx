  import PropTypes from "prop-types";

  const HeroItem = ({ title, description,  image }) => {
    
    return (
      
      <div className="p-4 m-2 bg-gray-100 rounded-lg flex flex-col md:flex-row items-center">
        
        {/* Description */}
        <div className="flex-grow md:w-1/2 md:mr-4">
          <h2 className="text-5xl font-serif">{title}</h2>
          <p className="text-gray-700 mt-5">{description}</p>
          {/* <p className="text-green-600 font-semibold mt-4">Price: {price}</p> */}
          {/* <p className="text-gray-500">Color: {color}</p> */}
          {/* <button className="bg-black text-white px-4 py-2 mt-4 rounded-md cursor-pointer">
            View Details
          </button> */}
        </div>

        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full md:w-96 h-96 object-cover rounded md:ml-4 mt-4 md:mt-0"
        />
      </div>
    );
  };

  // Define prop types for HeroItem
  HeroItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    color: PropTypes.string,
    image: PropTypes.string.isRequired,
  };

  export default HeroItem;
