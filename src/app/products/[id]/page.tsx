'use client';
import { useParams } from 'next/navigation';

const ProductPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Page</h1>
      <p>Product ID: {id}</p>
    </div>
  );
};

export default ProductPage;
