import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GlobalApi from './_utils/GlobalApi';
import Slider from './_components/Slider';

export default async function Home() {
  const sliderList = await GlobalApi.getSlider();
  return (
    <div className=" p-5 md:p-12 px-10">
      <Slider sliderList={sliderList} />
    </div>
  );
}
