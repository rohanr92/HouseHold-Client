import React, { useRef } from 'react';
import Container from '../../../Container/Container';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight, Star, ArrowUpRight } from "lucide-react";
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { fadeIn } from '../../../../variants';


const HighestService = () => {
  const swiperRef = useRef(null);


  const serviceProviders = [
    {
      name: "Maria Gonzalez",
      role: "Professional House Cleaner",
      img: "https://creativelayers.net/themes/freeio-html/images/team/team-2.jpg",
      rating: 4.9,
      reviews: 620,
      skills: ["Deep Cleaning", "Eco-friendly"],
      location: "Miami",
      rate: 45,
      jobSuccess: 99,
      online: true,
    },
    {
      name: "David Lee",
      role: "Landscaper & Gardener",
      img: "https://creativelayers.net/themes/freeio-html/images/team/team-1.jpg",
      rating: 4.8,
      reviews: 310,
      skills: ["Mowing", "Garden Design"],
      location: "Austin",
      rate: 55,
      jobSuccess: 97,
      online: true,
    },
    {
      name: "Sarah Chen",
      role: "Handyman Services",
      img: "https://creativelayers.net/themes/freeio-html/images/team/team-3.jpg",
      rating: 4.9,
      reviews: 750,
      skills: ["Plumbing", "Electrical", "Painting"],
      location: "Chicago",
      rate: 60,
      jobSuccess: 98,
      online: false,
    },
    {
      name: "Mike Johnson",
      role: "Pool Maintenance",
      img: "https://creativelayers.net/themes/freeio-html/images/team/team-4.jpg",
      rating: 4.7,
      reviews: 200,
      skills: ["Cleaning", "Chemicals", "Repair"],
      location: "Phoenix",
      rate: 50,
      jobSuccess: 95,
      online: true,
    },
    {
      name: "Emily White",
      role: "Pet Sitter & Walker",
      img: "https://creativelayers.net/themes/freeio-html/images/team/team-5.jpg",
      rating: 5.0,
      reviews: 810,
      skills: ["Dog Walking", "Pet Sitting"],
      location: "Seattle",
      rate: 30,
      jobSuccess: 100,
      online: true,
    },
  ];


  return (
    <div className='my-[40px] px-4 md:px-0'>
      <Container>
        <motion.div 
        variants={fadeIn("up", 0.2)}
                                              initial="hidden"
                                              whileInView="show"
                                              viewport={{ once: false, amount: 0.7 }}
        className='text-center px-[16px] md:px-0'>
          <h2 className='text-[40px] font-semibold'>Our Talented Companies Employee</h2>
          <p className='md:w-2xl mx-auto'>Save yourself hours and get your to-do list completed.Save yourself hours and get your to-do list completedSave yourself hours and get your to-do list completed</p>
        </motion.div>

        <div className="w-full flex flex-col items-center my-[30px]">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ el: ".custom-pagination", clickable: true }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            className="w-full py-4" 
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
            }}
            
          >
            
            {serviceProviders.map((s, i) => (
              <SwiperSlide key={i} className="h-full">
                

                <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        
                  <div className="relative inline-block self-start mb-3">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    {s.online && (
                      <span className="absolute top-0 right-0 block w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                    )}
                  </div>

           
                  <h3 className="font-semibold text-xl text-gray-900">{s.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{s.role}</p>

               
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-3">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-gray-800">{s.rating}</span>
                    <span className="text-gray-500">({s.reviews} reviews)</span>
                  </div>

                
                  <div className="flex flex-wrap gap-2 mb-4">
                    {s.skills.map((skill, s_idx) => (
                      <span
                        key={s_idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

              
                  <div className="flex justify-between items-center border-t border-gray-100 pt-4 mb-4">
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="font-semibold text-gray-800 text-sm">{s.location}</p>
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Rate</p>
                      <p className="font-semibold text-gray-800 text-sm">${s.rate}/hr</p>
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Job Success</p>
                      <p className="font-semibold text-gray-800 text-sm">{s.jobSuccess}%</p>
                    </div>
                  </div>

                  
                  <Link className="flex items-center justify-center gap-2 w-full mt-auto py-2.5 px-4 border border-gray-300 rounded-full dark:text-black hover:bg-[#0ab991] hover:border-[#0ab991] transition text-sm font-semibold cursor-pointer hover:text-white">
                    View Profile
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
       
              </SwiperSlide>
            ))}
          </Swiper>


          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={() => swiperRef.current.slidePrev()}
              className="p-2 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100 transition dark:hover:bg-[#0ab991]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="custom-pagination flex gap-2"></div>

            <button
              onClick={() => swiperRef.current.slideNext()}
              className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition dark:hover:bg-[#0ab991] cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HighestService;