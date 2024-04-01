import RightSidebar from '@/components/RightSidebar';
import Sabout from '@/components/Sabout';

import Image from 'next/image';
import About from './about/page';
import Resume from './resume/page';

export default function Home() {
  return (
    <>
      <About />
      <Resume />
    </>
  );
}
