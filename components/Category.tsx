"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { data } from "@/data/categoryImages";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Overlay from "./Overlay";
import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <section className="py-20">
      <SectionTitle
        subTitle="Categories"
        title="Embark on a Flavorful Journey Through Our Foods"
      />
      <div className="w-full h-[50vh]">
        <Swiper
          grabCursor={true}
          speed={750}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full w-full relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  height={500}
                  width={500}
                  className="w-full h-full object-cover"
                />
                <Overlay />
                <div className="z-[2] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <h3 className="text-center text-white text-5xl font-semibold">
                    {item.name}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
