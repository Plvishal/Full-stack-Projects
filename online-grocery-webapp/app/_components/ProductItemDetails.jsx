'use client';
import { Button } from '@/components/ui/button';
import { LoaderCircle, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import { toast } from 'sonner';
import { UpdateCartContext } from '../_context/UpdateCartContext';

function ProductItemDetails({ product }) {
  const jwt = sessionStorage.getItem('jwt');
  const user = JSON.parse(sessionStorage.getItem('user'));
  const { updateCart, setUpdateCart } = useContext(UpdateCartContext);
  const [productTotalPrice, setProductTotalPrice] = useState(
    product.attributes.sellingPricce
      ? product.attributes.sellingPricce
      : product.attributes.mrp
  );
  const [loader, setLoader] = useState();
  let [quantity, setQuantity] = useState(1);

  const router = useRouter();
  const addToCart = () => {
    setLoader(true);
    if (!jwt) {
      router.push('/sign-in');
      setLoader(false);
      return;
    }
    const data = {
      data: {
        quantity: quantity,
        amount: (quantity * productTotalPrice).toFixed(2),
        products: product.id,
        users_permissions_users: user.id,
        userId: user.id,
      },
    };
    GlobalApi.addToCart(data, jwt).then(
      (resp) => {
        console.log(resp.data);
        toast('Added to cart');
        setUpdateCart(!updateCart);
        setLoader(false);
      },
      (e) => {
        console.log(e);
        toast('Error while adding cart');
        setLoader(false);
      }
    );
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 p-7 bg-white text-black">
      <Image
        src={
          process.env.NEXT_PUBLIC_BACKEND_URL +
          product?.attributes?.image?.data[0]?.attributes?.url
        }
        alt="image"
        width={300}
        height={300}
        className=" bg-slate-200 p-3 h-[320px] w-[300px] object-contain rounded-xl"
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">{product?.attributes?.name}</h2>
        <h2 className="text-sm text-justify font-bold text-gray-600">
          {product?.attributes?.description}
        </h2>
        <div className="flex items-center  gap-2">
          {product?.attributes?.sellingPricce && (
            <h2 className="font-bold text-3xl">
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
        <div>
          <h2 className="font-bold text-lg">
            Quantity : {product?.attributes?.itemQualityType}
          </h2>
          <div className="flex flex-col items-baseline gap-3">
            <div className="flex items-center gap-4">
              <div className="flex gap-10 items-center p-2 border px-5 ">
                <button
                  disabled={quantity == 1}
                  onClick={() => setQuantity(quantity--)}
                >
                  -
                </button>
                <h2>{quantity}</h2>
                <button onClick={() => setQuantity(quantity++)}>+</button>
              </div>
              <h2>={quantity * productTotalPrice}</h2>
            </div>
            <Button
              className="flex items-center gap-3 bg-green-600"
              onClick={() => addToCart()}
              disabled={loader}
            >
              <ShoppingBasket />
              {loader ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                ' Add To Cart'
              )}
            </Button>
          </div>
          <h2 className="mt-2">
            <span className="font-bold text-lg">Category: </span>
            {product?.attributes?.categories?.data[0]?.attributes?.name}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ProductItemDetails;
