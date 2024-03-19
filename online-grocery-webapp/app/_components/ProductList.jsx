import React from 'react';
import ProductItems from './ProductItems';

function ProductList({ productList }) {
  return (
    <div className="mt-10">
      <h2 className="text-green-600 font-bold text-large uppercase ">
        Our Pupular Product
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList.map((product, i) => (
          <ProductItems product={product} key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
