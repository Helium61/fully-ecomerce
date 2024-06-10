

const ShippingInfo = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8 mt-14">
        <div className="shipping-box bg-gray-900 p-6 border border-blue-300 rounded-md flex-1 mx-2">
          <p className="text-xl font-semibold text-white text-center">Free Shipping</p>
          <p className="text-lg text-white text-center">Enjoy Free Shipping On ALL Orders</p>
          <p className="text-lg text-white text-center">No Minimum Purchase required</p>
        </div>
        <div className="money-back-box bg-gray-900 p-6 border border-green-300 rounded-md flex-1 mx-2">
          <p className="text-xl font-semibold text-white text-center">24/7 Support</p>
          <p className="text-lg text-white text-center">Our team is available 24/7 to help</p>
          <p className="text-lg text-white text-center">with any questions or concerns</p>
        </div>
        <div className="shipping-cost-box bg-gray-900 p-6 border border-yellow-300 rounded-md flex-1 mx-2">
          <p className="text-xl font-semibold text-white text-center">Money Back</p>
          <p className="text-lg text-white text-center">We Offer a 100% Money Back</p>
          <p className="text-lg text-white text-center">Guarantee For Your Satisfaction</p>
        </div>
      </div>

      <div className="rectangle-box bg-gray-800 p-8 border border-gray-700 rounded-md">
        <p className="text-4xl font-serif text-yellow-500 text-center mb-4">Free Shipping On All Orders Over $50</p>
        <p className="text-lg text-yellow-500 text-center"></p>
        <p className="text-lg text-yellow-500 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum sit labore facere. Aliquid ut architecto repudiandae sint officiis, repellendus asperiores, esse commodi quae quis voluptatem vel nemo maiores quas iusto, voluptatibus natus omnis. yellow-500</p>
      </div>
    </div>
  );
};

export default ShippingInfo;
