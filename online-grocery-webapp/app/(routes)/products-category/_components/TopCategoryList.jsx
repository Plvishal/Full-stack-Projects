import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function TopCategoryList({ categoryList, slectedCategory }) {
  return (
    <div className="flex gap5 mt-2 overflow-auto mx-7 md:mx-20 justify-center">
      {categoryList.map((ct, i) => (
        <Link
          href={'/products-category/' + ct?.attributes?.name}
          key={i}
          className={`flex flex-col items-center bg-green-50 gap-2 rounded-2xl hover:bg-green-600 transition-all cursor-pointer p-2 mt-2 group w-[150px] min-w-[100px] ${
            slectedCategory == ct?.attributes?.name && 'bg-green-600 text-white'
          }`}
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
        </Link>
      ))}
    </div>
  );
}

export default TopCategoryList;
