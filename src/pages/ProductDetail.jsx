import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <button onClick={() => navigate('/products')}>Back to Products</button>
    </div>
  );
};

export default ProductDetail;
