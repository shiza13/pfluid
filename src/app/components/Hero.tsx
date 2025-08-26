"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";


export default function Hero() {
  return (
    <section className="relative w-full h-[90vh]">
      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {/* Slide 1 */}
<SwiperSlide>
  <div className="relative w-full h-[500px]">
    <Image
      src="/hs1.png"
      alt="Industrial & Commercial Ro Plants"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">
        Industrial & Commercial Ro Plants
      </h1>
    </div>
  </div>
</SwiperSlide>


        {/* Slide 2 */}
<SwiperSlide>
  <div className="relative w-full h-[500px]">
    <Image
      src="/hs5.png"
      alt="Industrial Water Treatment"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">
        Industrial Water Treatment
      </h1>
    </div>
  </div>
</SwiperSlide>

{/* Slide 3 */}
<SwiperSlide>
  <div className="relative w-full h-[500px]">
    <Image
      src="/hs3.png"
      alt="Sustainable & Green Future"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">
        Sustainable & Green Future
      </h1>
    </div>
  </div>
</SwiperSlide>

{/* Slide 4 */}
<SwiperSlide>
  <div className="relative w-full h-[500px]">
    <Image
      src="/about.png"
      alt="Pure & Safe Water Solutions"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <h1 className="text-white text-5xl font-bold">
        Pure & Safe Water Solutions
      </h1>
    </div>
  </div>
</SwiperSlide>

      </Swiper>

      

      {/* Overlay Text (Optional) */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-white text-lg tracking-wide">
          Fluid Management Service – Total Water & Waste Solutions
        </p>
      </div>
    </section>
  );
}