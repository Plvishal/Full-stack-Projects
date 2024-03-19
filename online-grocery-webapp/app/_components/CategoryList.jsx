import Image from 'next/image';
import React from 'react';

function CategoryList({ categoryList }) {
  return (
    <div className="mt-5">
      <h2 className="text-green-600 font-bold text-large uppercase">
        Shop by category
      </h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7  gap-5">
        {categoryList.map((ct, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-green-50 gap-2 rounded-2xl hover:bg-green-600 transition-all cursor-pointer p-2 mt-2 group"
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_URL +
                ct?.attributes?.icon?.data[0]?.attributes?.url
              }
              alt="category"
              width={50}
              height={50}
              className="group-hover:scale-125 transition-all ease-in-out"
            />
            <h2 className="text-large font-bold text-green-900  ">
              {ct?.attributes?.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
