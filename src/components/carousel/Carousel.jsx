// librerias
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export const Carousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, EffectFade]}
      className="mySwiper"
      style={{ height: "auto" }}
    >
      <SwiperSlide>
        <img
          src="https://www.click.gt/img/razer/portada.jpg"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.click.gt/img/logitech/banner-logitech.jpg"
          style={{ width: "100%", height: "auto" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
