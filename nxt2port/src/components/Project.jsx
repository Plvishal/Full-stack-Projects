import { projectData } from '@/utils/projectData';
import Image from 'next/legacy/image';
import Link from 'next/link';
import React from 'react';

function Project() {
  return (
    <div>
      <div className="">
        <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 font-bold font-serif">
          Projects
        </h1>
        <hr />
      </div>

      <div className="mt-5 grid md:grid-cols-2 grid-cols-1 gap-5">
        {projectData.map((d) => (
          <div
            className="flex flex-col border w-[320px] h-[400px] p-2 rounded-xl"
            key={d.id}
          >
            <Image
              src={d.image}
              alt="image"
              width={90}
              height={100}
              layout="responsive"
              className="w-full h-[300px] object-contain rounded-2xl hover:scale-95 cursor-pointer transition-all ease-in-out"
            />
            <div className="mt-1 w-full h-full flex flex-col justify-between">
              <div className="mt-1">
                <h1 className="text-xl font-bold font-sans text-slate-300">
                  {d.title}
                </h1>
                <p className="text-sm text-justify text-neutral-300 font-normal font-sans">
                  {d.description.substring(0, 200)}....
                </p>
              </div>
              <div className="flex justify-between ">
                <Link
                  className="bg-blue-600 p-2 px-4 text-sm font-sans font-bold uppercase rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-black transition-all ease-in-out"
                  href={d.github}
                  target="_blank"
                >
                  Github
                </Link>

                <Link
                  className="bg-blue-600 p-2 px-4 text-sm font-sans font-bold uppercase rounded-lg hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 hover:text-black transition-all ease-in-out"
                  href={`/project/${d.id}`}
                >
                  More Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
