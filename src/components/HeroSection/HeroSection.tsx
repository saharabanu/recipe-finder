import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import SliderDesign from "./SliderDesign";
import { sliderData } from "../../data/recipes";





const HeroSection = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <SliderDesign text={sliderData[0].title} img={sliderData[0].image} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderDesign text={sliderData[1].title} img={sliderData[1].image} />
        </SwiperSlide>

        <SwiperSlide>
          <SliderDesign text={sliderData[2].title} img={sliderData[2].image} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
