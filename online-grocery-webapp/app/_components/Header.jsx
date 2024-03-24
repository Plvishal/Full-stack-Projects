'use client';
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import {
  CircleUserRound,
  LayoutGrid,
  Search,
  ShoppingBasket,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import GlobalApi from '../_utils/GlobalApi';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { UpdateCartContext } from '../_context/UpdateCartContext';
import CartItemList from './CartItemList';
import { toast } from 'sonner';

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const isLoggedIn = sessionStorage.getItem('jwt') ? true : false;
  const user = JSON.parse(sessionStorage.getItem('user'));

  const jwt = sessionStorage.getItem('jwt');
  const [totalCartItem, setTotalCartItem] = useState(0);
  const { updateCart, setUpdateCart } = useContext(UpdateCartContext);
  const [cartItemList, setCartItemList] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const router = useRouter();
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };
  useEffect(() => {
    getCartItems();
  }, [updateCart]);
  const onSignOut = () => {
    sessionStorage.clear();
    router.push('/sign-in');
  };
  const getCartItems = async () => {
    const cartItemList_ = await GlobalApi.getCartItems(user.id, jwt);
    setTotalCartItem(cartItemList_?.length);
    setCartItemList(cartItemList_);
  };
  const onDeleteItem = (id) => {
    GlobalApi.deleteCartItem(id, jwt).then((resp) => {
      toast('Item removed from the cart');
      getCartItems();
    });
  };
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cartItemList.forEach((element) => {
      total = total + element.amount;
    });
    setSubTotal(total);
  }, [cartItemList]);
  return (
    <div className="p-5 shadow-sm flex justify-between">
      <div className="flex items-center gap-8">
        <Image src="/logo.png" width={150} height={100} alt="logo" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="md:flex  hidden gap-2 items-center border rounded-full p-2 px-10 bg-slate-200 cursor-pointer">
              <LayoutGrid className="w-5 h-5" />
              Category
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((ctList, i) => (
              <Link
                key={i}
                href={'/products-category/' + ctList.attributes.name}
              >
                <DropdownMenuItem className="flex gap-2 items-center cursor-pointer">
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_BACKEND_URL +
                      ctList?.attributes?.icon?.data[0]?.attributes?.url
                    }
                    alt="image"
                    width={22}
                    height={22}
                    unoptimized={true}
                  />
                  <h2 className="text-large">{ctList?.attributes?.name}</h2>
                </DropdownMenuItem>
              </Link>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="md:flex gap-3 items-center border rounded-full p-2 px-5 hidden">
          <Search />
          <input type="text" placeholder="Search" className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Sheet>
          <SheetTrigger>
            <h2 className="flex gap-2 items-center font-large">
              <ShoppingBasket className="h-7 w-7" />
              <span className="bg-green-500 text-white px-2 rounded-full">
                {totalCartItem}
              </span>
            </h2>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="bg-green-500 text-white font-bold text-lg p-2 mt-10 rounded-xl text-center">
                My Cart
              </SheetTitle>
              <SheetDescription>
                <CartItemList
                  cartItemList={cartItemList}
                  onDeleteItem={onDeleteItem}
                />
              </SheetDescription>
            </SheetHeader>
            <SheetClose asChild>
              <div className="absolute w-[90%] bottom-6 flex flex-col">
                <h2 className="text-lg font-bold flex justify-between">
                  Subtotal <span>&#8377;{subTotal}</span>
                </h2>
                <Button
                  onClick={() => router.push(jwt ? '/checkout' : '/sign-in')}
                >
                  Checkout
                </Button>
              </div>
            </SheetClose>
          </SheetContent>
        </Sheet>

        {!isLoggedIn ? (
          <Link href={'/sign-in'}>
            <Button>Login</Button>
          </Link>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <CircleUserRound className="w-7 h-7 bg-green-900 rounded-full text-white cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <Link href={'/my-order'}>
                <DropdownMenuItem>My Order</DropdownMenuItem>
              </Link>
              <DropdownMenuItem onClick={() => onSignOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}

export default Header;
