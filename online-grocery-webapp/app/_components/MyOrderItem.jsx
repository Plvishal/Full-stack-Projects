import Image from 'next/image';
import React from 'react';

function MyOrderItem({ orderItem }) {
  return (
    <div className="flex justify-between w-[80% ] md:w-[60%] mt-3 items-center">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_URL +
          orderItem?.product?.data?.attributes?.image?.data[0]?.attributes?.url
        }
        alt="image"
        width={80}
        height={80}
        className="border p-3 rounded-md object-cover"
      />
      <div className="">
        <h2>{orderItem?.product?.data?.attributes?.name}</h2>
        <h2>Item Price{orderItem?.product?.data?.attributes?.mrp}</h2>
      </div>
      <div>
        <h2>Quantity:{orderItem?.quantity}</h2>
        <h2>Price:{orderItem?.amount}</h2>
      </div>
    </div>
  );
}

export default MyOrderItem;
