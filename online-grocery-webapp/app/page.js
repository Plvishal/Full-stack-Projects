import Image from 'next/image';
import { Button } from '@/components/ui/button';
import GlobalApi from './_utils/GlobalApi';
import Slider from './_components/Slider';
import CategoryList from './_components/CategoryList';
import ProductList from './_components/ProductList';

export default async function Home() {
  const sliderList = await GlobalApi.getSlider();
  const categoryList = await GlobalApi.getCategoryLiist();
  const productList = await GlobalApi.getAllProducts();
  return (
    <div className=" p-5 md:p-12 px-10">
      <Slider sliderList={sliderList} />
      <CategoryList categoryList={categoryList} />
      <ProductList productList={productList} />
      <Image
        src="/banner.png"
        width={400}
        height={300}
        alt="bannner"
        className="w-full h-[400px] object-contain"
      />
    </div>
  );
}
