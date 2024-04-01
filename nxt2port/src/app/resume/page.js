import { BackgroundBeams } from '@/components/ui/background-beams';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { ResumeContainer } from '@/components/ui/moving-border';
import { projects } from '@/utils/resumeData';
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
        <div>
          {}
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}

export default Resume;
