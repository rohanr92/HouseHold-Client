import React from 'react';
import Container from '../Container/Container';
import bannerImage from '/banner-img.jpg';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { fadeIn } from '../../../src/variants';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        speed={800}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        <div className="absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 bg-[#0ab991] text-white flex items-center justify-center rounded-full z-10 cursor-pointer custom-prev">
          <IoIosArrowBack />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 bg-[#0ab991] text-white flex items-center justify-center rounded-full z-10 cursor-pointer custom-next">
          <IoIosArrowForward />
        </div>
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index}>
            <section
              className="relative bg-cover bg-center bg-no-repeat lg:grid lg:h-screen lg:place-content-center"
              style={{ backgroundImage: `url(${bannerImage})` }}
            >
              <Container>
                <div className="mx-auto w-screen max-w-7xl py-16 px-4 md:px-0 sm:py-24 lg:py-32">
                  <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className="max-w-prose text-left"
                  >
                    <h1 className="text-4xl font-bold text-white sm:text-5xl">
                      Understand user flow and
                      <strong className="text-[#0ab991]"> increase </strong>
                      conversions
                    </h1>

                    <p className="mt-4 text-base text-[#FFFFFFCC] sm:text-lg/relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus, provident
                      accusamus impedit minima harum corporis iusto.
                    </p>

                    <div className="mt-4 flex gap-4 sm:mt-6">
                      <Link className="inline-block rounded border border-[#0ab991] bg-[#0ab991] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#3cc7ac] hover:border-[#3cc7ac]">
                        Get Started
                      </Link>

                      <Link className="inline-block rounded border border-gray-200 hover:border-[#0ab991] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#0ab991] hover:text-white">
                        Learn More
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </Container>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
