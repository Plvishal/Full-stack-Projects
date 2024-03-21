'use client';
import { Button } from '@/components/ui/button';
import tailwindConfig from '@/tailwind.config';
import { TrashIcon } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function CartItemList({ cartItemList, onDeleteItem }) {
  return (
    <div>
      <div className="h-[500px] overflow-auto">
        {cartItemList.map((cart, i) => (
          <div key={i} className="flex justify-between items-center">
            <div className="flex gap-6 items-center">
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_URL + cart.image}
                alt="image"
                width={70}
                height={70}
                className="border p-2"
              />
              <div className="mt-4">
                <h2 className="font-bold">{cart.name}</h2>
                <h2>
                  <span className="font-bold text-md">Quantity</span>:
                  {cart.quantity}
                </h2>
                <h2 className="text-lg">&#8377;{cart.amount}</h2>
              </div>
            </div>
            <TrashIcon
              className="cursor-pointer"
              onClick={() => onDeleteItem(cart.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItemList;
