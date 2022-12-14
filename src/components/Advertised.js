import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useQuery } from "@tanstack/react-query";
import SlideCard from "./SlideCard";

const Advertised = () => {
  const { data: advertisedProducts = [] } = useQuery({
    queryKey: ["advertise"],
    queryFn: async () => {
      const res = await fetch(
        "https://budget-car-server.vercel.app/products/advertise"
      );
      const data = res.json();
      return data;
    },
  });
  console.log(advertisedProducts);
  return (
    <>
      {advertisedProducts.length !== 0 && (
        <>
          <div className="bg-yellow-300 w-2/3 mx-auto h-[16px] lg:h-[20px]"></div>
          <div className="bg-base-300 lg:p-16 pt-5 pb-36 lg:pb-40">
            <h1 className="text-4xl text-center lg:mb-16 mb-5 italic">
              {" "}
              <span className="text-yellow-500 text-6xl">Latest</span>{" "}
              Collections
            </h1>
            <div className="hidden md:block">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {advertisedProducts.map((advertisedProduct) => (
                  <SwiperSlide key={advertisedProduct._id}>
                    <SlideCard
                      advertisedProduct={advertisedProduct}
                    ></SlideCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="md:hidden">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {advertisedProducts.map((advertisedProduct) => (
                  <SwiperSlide key={advertisedProduct._id}>
                    <SlideCard
                      advertisedProduct={advertisedProduct}
                    ></SlideCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Advertised;
