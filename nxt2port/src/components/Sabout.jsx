import React from 'react';
import { man, vishal } from '@/utils';
import Image from 'next/image';
function Sabout() {
  return (
    <>
      <div>
        <Image
          src={vishal}
          alt="image"
          width={200}
          height={100}
          className="relative top-[-90px] md:left-[25%] left-[33%] rounded-xl shadow-2xl w-[120px] h-[150px] object-fill bg-no-repeat"
        />
      </div>
    </>
  );
}

export default Sabout;
