import Image from "next/image";
import React from "react";

const About = () => {
  const teams = [
    {
      src: "/team/1.jpg",
      name: "Jazzmine",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem  possimus a delectus aperiam libero quae.",
    },
    {
      src: "/team/2.jpg",
      name: "Jate",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem .",
    },
    {
      src: "/team/3.jpg",
      name: "Jane",
      text: " adipisicing elit. Autem quidem magnam at exercitationem dolore possimus a delectus aperiam libero quae.",
    },
    {
      src: "/team/4.jpg",
      name: "Jessy",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem magnam ",
    },
  ];
  return (
    <section className='container flex flex-col  min-h-screen items-center  py-20 mx-auto px-5'>
      <div className='flex flex-col '>
        <h2 className='text-[3rem] '>ABOUT US</h2>
        <p className='mb-10 text-justify'>
          we believe that beauty is an art form, and every individual deserves to feel confident and
          empowered in their own unique skin. Our makeup website is dedicated to bringing you a
          comprehensive range of services, top-quality makeup products, and an enriching beauty
          school experience, all designed to elevate your beauty journey to new heights.
        </p>
      </div>
      <div>
        <Image
          src='/about_image.png'
          width={1312}
          height={883}
          alt='Pictures of ladies hairstyles'
          className='object-cover'
        />
        <h2 className='md:text-[3rem] py-4'>MEET OUR AMAZING TEAM</h2>
      </div>

      <div className='md:grid lg:grid-cols-4 md:grid-cols-3 mb-20'>
        {teams.map(({ src, name, text }) => {
          return (
            <div key={src} className=''>
              <div className='px-5 md:grid'>
                <Image
                  src={`${src}`}
                  width={400}
                  height={200}
                  alt='Pictures of ladies hairstyles'
                  className='object-cover  py-5'
                />
                <p className='py-2'>{name}</p>
                <p className='mt-2'>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
