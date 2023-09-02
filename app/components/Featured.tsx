import Button from "./Button";
import Image from "next/image";

const Featured = () => {
  return (
    <main className='container flex md:flex-row flex-col bg-[#4b1449]  relative mt-20 py-10 mx-auto'>
      <div className='flex absolute top-0 left-0 h-[100px] bg-[#1c0a1c] w-full mb-4 px-5'>
        <h2 className='text-center py-10 md:font-bold md:text-2xl'>Top sales of the month</h2>
      </div>
      <div className='flex  md:flex-row flex-col  px-5'>
        <div className='flex flex-col  mt-20  md:mt-40'>
          <div className='mb-10'>
            <h3 className='capitalize font-semibold mb-3'>Rossy Lipstick</h3>
            <p className='tracking-wider leading-8'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem aliquam recusandae
              dolorem ex blanditiis numquam. Consequuntur non labore atque laborum?
            </p>
          </div>
          <div className='flex gap-4 items-center'>
            <p className='bg-[#0f0d0f] text-white w-[100px] my-3 h-[30px] text-center'>N6,000</p>
            <Button type title='Shop Now' />
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:mt-20 md:mt-40'>
          <Image src='/featured.png' width={400} height={300} alt='Pictures of ladies hairstyles' />
        </div>
      </div>
    </main>
  );
};

export default Featured;
