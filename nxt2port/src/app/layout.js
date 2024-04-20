import { Inter } from 'next/font/google';
import './globals.css';
import Sabout from '@/components/Sabout';
import RightSidebar from '@/components/RightSidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Vishal Portfolios',
  description:
    'Full Stack Developer | MERN Full Stack Developer | Web Developer ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex  md:flex-row flex-col justify-between w-full gap-2 md:p-20 p-4 bg-gradient-to-l from-blue-500 to-pink-500 ">
          <div className="md:w-[23%]  p-2 md:h-[500px] bg-white md:sticky  relative left-0 md:top-32 md:mt-0 mt-48 border-2 border-red-900 rounded-xl shadow-2xl">
            <Sabout />
          </div>
          <div className="md:w-[65%]  bg-white  md:order-none order-last border-2 border-red-900 rounded-xl relative md:mt-12 mt-2 shadow-2xl">
            {children}
          </div>
          <div className="md:w-[10%] w-full md:h-[500px] p-2 md:bg-white bg-white md:sticky fixed right-0 md:top-32 top-2  border-blue-900 rounded-xl md:order-none order-first z-40">
            <RightSidebar />
          </div>
        </div>
      </body>
    </html>
  );
}
