import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ProductItemDetails from './ProductItemDetails';

function ProductItems({ product }) {
  return (
    <div className="p-2 md:p-6 flex flex-col items-center justify-center border border-xl rounded-xl  gap-3 mt-6 hover:scale-105 cursor-pointer hover:shadow-lg transition-all  ease-in-out">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_URL +
          product?.attributes?.image?.data[0]?.attributes?.url
        }
        alt="product"
        width={500}
        height={200}
        className=" h-[200px] md:h-[300px] object-cover rounded-2xl"
      />
      <h2 className="font-bold text-large">{product?.attributes?.name}</h2>
      <div className="flex items-center justify-center gap-2">
        {product?.attributes?.sellingPricce && (
          <h2 className="font-bold text-lg">
            &#8377;{product?.attributes?.sellingPricce}
          </h2>
        )}
        <h2
          className={`font-bold  ${
            product?.attributes?.sellingPricce && 'line-through text-gray-500'
          }`}
        >
          &#8377;{product?.attributes?.mrp}
        </h2>
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="text-primary font-semibold hover:text-white hover:bg-green-400 transitio-all  ease-in-out"
          >
            Add to card
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <ProductItemDetails product={product} />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ProductItems;
