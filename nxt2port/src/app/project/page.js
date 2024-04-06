import React from 'react';
import Image from 'next/image';
function ProjectMain() {
  return (
    <section className="mt-6">
      <div>
        <h1 className="text-2xl font-serif font-bold bg-clip-text bg-transparent  bg-gradient-to-b from-red-500 via-slate-300 to-slate-400">
          Projects
        </h1>
        <hr />
      </div>
      <div>
        <div className="border h-[300px] w-[250px]">
          <Image
            src={
              'https://res.cloudinary.com/de8rsflha/image/upload/v1704056271/wonderlust_DEV/computed-filename-using-request.webp'
            }
            alt="image"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectMain;
