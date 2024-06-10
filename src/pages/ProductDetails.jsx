
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart } from '../redux/features/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(state => 
    state.products.items.find(p => p.id === Number(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="mt-4">{product.price} USD</p>
      <button 
        onClick={() => dispatch(addProductToCart(product))}
        className="mt-4 bg-blue-500 text-white px-4 py-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
