import { useEffect } from 'react'; // Import useEffect from React
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/features/productsSlice';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product => (
        <div key={product.id} className="border p-4">
          <Link to={`/products/${product.id}`}>
            <h2 className="text-xl">{product.name}</h2>
            <p>{product.price} USD</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
