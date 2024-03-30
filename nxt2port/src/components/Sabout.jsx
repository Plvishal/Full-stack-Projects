import React from 'react';
import { man, vishal } from '@/utils';
import Image from 'next/image';
import { blue, red } from '@mui/material/colors';
import { Twitter, Instagram, LinkedIn, Download } from '@mui/icons-material';
import { a1 } from '@/utils/aboutData';
import { Button } from '@mui/material';
import Link from 'next/link';

function Sabout() {
  return (
    <>
      <div>
        <div>
          <Image
            src={vishal}
            alt="image"
            width={200}
            height={100}
            className="absolute top-[-90px] md:left-[30%] left-[33%] rounded-xl shadow-lg w-[130px] h-[150px] object-fill bg-no-repeat border-2 border-blue-900"
          />
        </div>
        <div className="md:relative  static mt-16 flex flex-col justify-center items-center w-[60%] m-auto">
          <h1 className="text-2xl font-bold font-serif text-justify">
            Vishal Pal
          </h1>
          <p className="text-[8px] font-bold bg-slate-200 p-2 rounded-lg">
            MERN Stack Developer
          </p>
          <div className=" w-[90%] flex justify-between items-center mt-3">
            <Twitter
              className="bg-slate-200 p-2 rounded-lg  hover:bg-blue-700 hover:text-white cursor-pointer transition-none ease-in-out"
              color="secondary"
              fontSize="large"
            />
            <Instagram
              className="bg-slate-200 p-2 rounded-lg hover:bg-blue-700 hover:text-white cursor-pointer duration-300"
              sx={{ color: red[900] }}
              fontSize="large"
            />
            <LinkedIn
              className="bg-slate-200 p-2  rounded-lg  hover:bg-blue-700 hover:text-white cursor-pointer"
              sx={{ color: blue[900] }}
              fontSize="large"
            />
          </div>
        </div>
        <div className="w-[90%] m-auto bg-slate-200 p-3 rounded-xl mt-4 flex flex-col gap-2">
          {a1.map((item, i) => (
            <div className="flex justify-start items-center gap-5" key={i}>
              <span className="bg-gray-300 p-2 text-xl rounded-lg hover:bg-blue-900 hover:text-white transition-all ease-in-out cursor-pointer">
                {item.icon}
              </span>
              <p className="flex flex-col justify-start items-start text-lg font-serif ">
                {item.name} <span className="text-sm ">{item.value}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="w-[90%] mt-4 flex justify-center items-center mb-5">
          <Button
            variant="contained"
            className=" rounded-xl hover:bg-gradient-to-r from-pink-500 to-blue-600"
          >
            <a
              href={'/vishal.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex justify-center items-cente "
            >
              <Download />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Sabout;
