import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Slider1 from "./slider1/Slider1";
import Slider2 from "./slider2/Slider2";

function Hero() {
  return (
    <section className="hero">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Scrollbar,
          Autoplay,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        cssMode={true}
        mousewheel={true}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        <SwiperSlide>
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Hero;
