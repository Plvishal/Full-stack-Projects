'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, Search, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import GlobalApi from '../_utils/GlobalApi';
import Link from 'next/link';

function Header() {
  const [categoryList, setCategoryList] = useState([]);
  const isLoggedIn = sessionStorage.getItem('jwt') ? true : false;
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.data.data);
    });
  };
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
        <h2 className="flex gap-2 items-center font-large">
          <ShoppingBag /> 0
        </h2>
        {!isLoggedIn && (
          <Link href={'/sign-in'}>
            <Button>Login</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
