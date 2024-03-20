import GlobalApi from '@/app/_utils/GlobalApi';
import React from 'react';
import TopCategoryList from '../_components/TopCategoryList';
import ProductList from '@/app/_components/ProductList';

async function ProductCategory({ params }) {
  const productList = await GlobalApi.getAllProductByCategory(
    params.categoryName
  );
  const categoryList = await GlobalApi.getCategoryLiist();
  return (
    <div>
      <h2 className="text-white bg-green-700 font-bold text-3xl items-center text-center p-4">
        {params.categoryName}
      </h2>
      <TopCategoryList
        categoryList={categoryList}
        slectedCategory={params.categoryName}
      />
      <div className="p-5 md:p-10">
        <ProductList productList={productList} />
      </div>
    </div>
  );
}

export default ProductCategory;
