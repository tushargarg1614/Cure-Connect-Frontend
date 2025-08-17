import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
      
      {/* Carousel */}
      <div id="default-carousel" className="relative w-full h-full" data-carousel="slide">
        {/* Wrapper */}
        <div className="relative h-full overflow-hidden rounded-lg">
          
          {/* Slide 1 */}
          <div className="duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img
              src="https://cdn.pixabay.com/photo/2022/12/17/14/20/vitamins-7661774_1280.jpg"
              className="w-full h-full object-cover"
              alt="Slide 1"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
           {/* <h2 className="text-4xl font-bold">Donate Unused Medicines</h2> */}
           <p className="mt-72  md:mt-32 text-xl max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)"> Don’t let extra medicines go to waste — turn them into hope.</p>
           </div>
        
          </div>

          {/* Slide 2 */}
          <div className="hidden  duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img
              // src="https://i.pinimg.com/736x/81/58/f7/8158f70ba1f01473cbe7c12109538e2d.jpg"
              src="https://i.pinimg.com/736x/3f/57/fb/3f57fb03f9364469c2f94c2192696e09.jpg"
              className="w-full h-full object-cover "
              alt="Slide 2"
            />
            <div className="absolute inset-0 bg-black/50"></div>
             <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
           {/* <h2 className="text-4xl font-bold">Donate Unused Medicines</h2> */}
           <p className="mt-72  md:mt-32 text-lg max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)">Donate unused medicines and help create a healthier world</p>
           </div>
          </div>

          {/* Slide 3 */}
          <div className="hidden duration-700 ease-in-out absolute inset-0" data-carousel-item>
            <img
              src="https://i.pinimg.com/736x/5b/af/52/5baf52faf55e3a31d752889f7d43da23.jpg"
              className="w-full h-full object-cover object-center "
              alt="Slide 3"
            />
             
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
           {/* <h2 className="text-4xl font-bold">Donate Unused Medicines</h2> */}
           <p className="mt-72  md:mt-32 text-lg max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)">Your small step can save someone's life.</p>
           </div>
          </div>
        </div>
      </div>

      {/* Bright & Sharp Text Overlay */}
      <div className="absolute z-40 px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)]">
          Welcome to <span className="text-green-600">CureConnect</span>
        </h1>
        {/* <p className="mt-4 text-lg max-w-2xl mx-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          Donate unused medicines and help create a healthier world.
        </p> */}
      </div>
    </section>
  );
}
