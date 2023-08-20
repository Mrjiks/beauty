import Image from "next/image";
import Featured from "./components/Featured";
import Button from "./components/Button";
import Cta from "./components/Cta";

export default function Home() {
  return (
    <section
      className='container mx-auto flex flex-col  min-h-screen
    '>
      <main className='flex flex-col justify-between mt-20  w-full px-10 items-center md:flex-row'>
        <div className='flex  items-left  flex-col text-left'>
          <h1 className='text-2xl tracking-wide leading-8 mb-3'>
            Discover your <span>perfect look</span>
          </h1>
          <p>
            Unleash Your Beauty with our <br /> Stunning Makeup Collection
          </p>
          <Button type title='Shop Now' />
        </div>
        <div className='ml-4'>
          <Image
            src='/hero_images.png'
            width={500}
            height={500}
            alt='Pictures of ladies hairstyles'
          />
        </div>
      </main>
      <Featured />
      <Cta />
    </section>
  );
}
