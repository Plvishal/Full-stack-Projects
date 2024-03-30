import { rightSidebarData } from '@/utils/rightSidebarData';
import Link from 'next/link';
import React from 'react';

function RightSidebar() {
  return (
    <>
      <div className="flex md:flex-col h-full justify-between">
        {rightSidebarData.map((item, i) => (
          <Link
            href={`#${item.name.toLowerCase()}`}
            className=" md:w-[60%] w-[70px] h-[70px] m-auto flex flex-col justify-end items-center bg-gray-100 p-4 rounded-xl hover:bg-gradient-to-b from-pink-400 via-red-400 to-blue-400  transition-all ease-in cursor-pointer group"
            key={i}
          >
            <span className={`${item.color} group-hover:text-white `}>
              {item.icon}
            </span>
            <span className="text-sm font-serif font-semibold group-hover:text-white">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}

export default RightSidebar;
