import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function ImageSwiper(props) {
  const { swiperImagePaths } = props;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        waitForTransition: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {swiperImagePaths.map((imagePath, index) => (
        <SwiperSlide key={index}>
          <Image
            loading="lazy"
            className={styles["c-band-logo"]}
            src={imagePath}
            alt="Band Image"
            width={1920}
            height={800}
            style={{ objectFit: "cover", objectPosition: "40% 75%" }}
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
