import React from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { about, whatido } from '@/utils/aboutData';
import Resume from '../resume/page';
import ProjectMain from '../project/page';
export default function About() {
  return (
    <div className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col antialiased p-5 text-white">
      {about.map((ab, i) => (
        <div key={i}>
          <h1 className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400">
            {ab.name}
          </h1>
          <hr className="rounded-xl mt-1" />
          <p className="mt-5 text-neutral-300 font-bold font-serif text-sm text-justify">
            {ab.para1}
          </p>
        </div>
      ))}
      <h2 className="mt-6 text-2xl bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 font-bold font-serif ">
        What i do ?
      </h2>
      <div className="mt-4">
        {whatido.map((w, i) => (
          <div className="mt-2 flex gap-4" key={i}>
            <span className="text-red-700">{w.icon}</span>
            <p className='text-md text-neutral-300 font-bold font-serif text-sm text-justify"'>
              {w.description}
            </p>
          </div>
        ))}
      </div>

      <BackgroundBeams />
      <div className="mt-10">
        <Resume />
      </div>
      <div>
        <ProjectMain />
      </div>
    </div>
  );
}
