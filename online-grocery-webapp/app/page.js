import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GlobalApi from './_utils/GlobalApi';
import Slider from './_components/Slider';
import CategoryList from './_components/CategoryList';

export default async function Home() {
  const sliderList = await GlobalApi.getSlider();
  const categoryList = await GlobalApi.getCategoryLiist();
  return (
    <div className=" p-5 md:p-12 px-10">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
    </div>
  );
}
