import { BackgroundBeams } from '@/components/ui/background-beams';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { ResumeContainer } from '@/components/ui/moving-border';
import { certi } from '@/utils';
import { projects, technicalsSkills } from '@/utils/resumeData';
import Image from 'next/image';
import React from 'react';

function Resume() {
  return (
    <div className=" w-full rounded-md bg-neutral-950 relative flex flex-col antialiased p-5 text-white">
      <div className="flex justify-center items-center">
        <ResumeContainer
          borderRadius="1.75rem"
          className="bg-black dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800 border-1 text-white shadow-lg"
        >
          <h1 className="text-xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-red-300 via-pink-400 to-blue-400">
            Resume
          </h1>
        </ResumeContainer>
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400">
          Education
        </h1>
        <hr />
        <HoverEffect items={projects} />
        <h1 className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400">
          Technicals Skills
        </h1>
        <hr />
        <div className="grid md:grid-cols-4 grid-cols-3 mt-6 gap-4 ">
          {technicalsSkills.map((lg) => (
            <div
              key={lg.name}
              className="flex flex-col justify-center items-center bg-slate-800 p-3 rounded-lg"
            >
              <Image
                src={lg.icon}
                alt={lg.name}
                width={40}
                height={40}
                className="w-[60px]"
              />
              <p className="text-sm font-serif font-bold text-neutral-200 ">
                {lg.name}
              </p>
            </div>
          ))}
        </div>
        <h1 className=" mt-10 text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400">
          Certification
        </h1>
        <hr />
        <div className="mt-10 grid justify-center items-center">
          <Image
            src={certi}
            alt="h"
            width={400}
            height={200}
            className="border-2 border-green-500 p-1 rounded-lg shadow-lg"
          />
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}

export default Resume;
