"use client";

import LearnMore2 from "../ui/learn-more-2";
import Line from "../Layout/line";
import DrawOutlineButton from "../ui/draw-outline-button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import resources from "../../Data/resources";
export default function ResourcesSection() {
  return (
    <>
      <section className="bg-white relative w-full">
        <h1 className="text-black uppercase absolute text-xl mt-4 md:-ml-2 md:mt-14 ml-4  md:-rotate-90">
          Testmonails
        </h1>
        <div className="flex md:flex-row flex-col xl:items-center justify-between w-full md:pl-25 lg:pl-32 xl:pl-40">
          <div className="flex flex-col w-full relative ml-5 md:ml-0">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium xl:font-bold mt-20 text-gray-900 mb-6 leading-tight  md:max-w-[250px] lg:max-w-[360px] xl:max-w-2xl xl:h-full">
              Discover resources shaping Satalia’s direction and influencing
              industry trends.
            </h1>
            <div>
              <LearnMore2
                bgColor="black"
                textColor="white"
                arrowBg="white"
                hoverBg="white"
                hoverText="black"
                className="flex gap-10"
              >
                Learn More{" "}
              </LearnMore2>
            </div>
            <div className="hidden md:flex justify-center absolute bottom-0 xl:-bottom-84 right-32">
              <button className="custom-next relative overflow-hidden group cursor-pointer border-r-0 border border-b-0 border-gray-500 p-4 lg:p-6 transition-colors duration-300">
                <span className="absolute inset-0 bg-[#140d25] scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                <SlArrowLeft className="w-4 h-4 relative z-10 group-hover:!text-white" />
              </button>

              <button className="custom-prev relative overflow-hidden group cursor-pointer border border-gray-500 border-b-0 p-4 lg:p-6 transition-colors duration-300">
                <span className="absolute inset-0 bg-[#140d25] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                <SlArrowRight className="w-4 h-4 relative z-10 group-hover:!text-white" />
              </button>
            </div>
          </div>

          <div className="flex items-center w-full md:-ml-32 md:border-l-[0.5px] justify-center scrol-thin overflow-x-auto h-full cursor-grab ">
            <Swiper
              spaceBetween={50}
              slidesPerView={1.8}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1.2,
                  spaceBetween: 40,
                },
                1280: {
                  slidesPerView: 1.8,
                  spaceBetween: 40,
                },
              }}
              scrollbar={{ draggable: true }}
              loop={true}
              modules={[Pagination, Navigation]}
            >
              {resources.map((resource, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col px-4 md:pl-10 w-full items-center justify-center md:border-l-[1px] pt-20 relative">
                    <img
                      src={resource.imageUrl}
                      alt={resource.title}
                      className="rounded-full w-60 h-60 md:w-52 md:h-52 lg:w-68 lg:h-68 xl:w-80 xl:h-80"
                    />
                    <div className="mt-10">
                      <span className="text-base pt-20 pb-5">
                        {resource.date}
                      </span>
                      <h1 className="text-3xl lg:text-4xl xl:text-5xl font-semibold h-[150px]">
                        {resource.title}
                      </h1>
                      <p className="text-lg lg:text-xl lg:pt-10 h-[200px]">
                        {resource.description}
                      </p>
                    </div>
                    <div className="self-start mt-10 mb-14">
                      <DrawOutlineButton strokeColor="#000000">
                        Learn More
                      </DrawOutlineButton>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <Line direction="horizontal" thickness={1} />
      </section>
      <Line direction="horizontal" thickness={1} color="white" />
    </>
  );
}
