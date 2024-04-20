import { projectData } from '@/utils/projectData';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ProjectById({ params }) {
  const data = projectData.find((d) => d.id === params.projectid);

  return (
    <div className=" h-full  bg-black/[0.9] rounded-lg p-4 text-white">
      <div className=" flex justify-center items-center  shadow">
        <Image
          src={data.image}
          alt="imge"
          width={100}
          height={100}
          layout="responsive"
          className=" w-[400px] h-[300px] object-contain rounded-xl"
        />
      </div>
      <div className="mt-5">
        <h1 className="text-xl font-bold font-sans text-neutral-300">
          {data.title}
        </h1>

        <p className="mt-2 text-justify text-sm font-senibold font-sans">
          {data?.description}
        </p>
        <div className="grid md:grid-cols-7 grid-cols-3 gap-4 mt-5">
          {data?.technology.map((t) => (
            <div
              key={t}
              className="bg-red-400 p-1 flex justify-center items-center rounded-xl shadow-2xl text-sm"
            >
              {t}
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-between">
          <Link
            className="bg-blue-600 p-2 px-4 text-sm font-sans font-bold uppercase rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-black transition-all ease-in-out"
            href={data?.github}
            target="_blank"
          >
            Github
          </Link>
          <Link
            className="bg-blue-600 p-2 px-4 text-sm font-sans font-bold uppercase rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-black transition-all ease-in-out"
            href={data?.liveLink}
            target="_blank"
          >
            Live
          </Link>
          <Link
            className="bg-blue-600 p-2 px-4 text-sm font-sans font-bold uppercase rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-black transition-all ease-in-out"
            href={data?.github}
            target="_blank"
          >
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectById;
