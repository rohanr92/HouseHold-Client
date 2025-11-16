import React from 'react';
import Marquee from "react-fast-marquee";
import fedex from "../../../assets/fedex.svg"
import abbott from "../../../assets/abbott.svg"
import google from "../../../assets/google.svg"
import netflix from "../../../assets/netflix.svg"
import paypal from "../../../assets/paypal.svg"
import toyota from "../../../assets/toyota.svg"
import visa from "../../../assets/visa.svg"
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';

const Marquees = () => {
    return (
        <div className='py-[40px]'>
            <motion.h3 variants={fadeIn("up", 0.2)}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ once: false, amount: 0.7 }} className='text-center font-bold text-[16px] md:[20px] light:text-gray-600 mb-5'>Trusted By With These Best Companies</motion.h3>
<div className="relative overflow-hidden w-full">
  
  <div className="absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-white to-transparent z-10"></div>

  <Marquee>
    <div className="w-[200px] mx-auto">
        <img src={fedex} alt="" className="w-[143px] h-[55px]" /></div>


    <div className="w-[200px] mx-auto"><img src={abbott} alt="" className="w-[143px] h-[55px]" />
    </div>



    <div className="w-[200px] mx-auto">
        <img src={google} alt="" className="w-[143px] h-[55px]" />
        </div>


    <div className="w-[200px] mx-auto">
        <img src={netflix} alt="" className="w-[143px] h-[55px]" />
        </div>


    <div className="w-[200px] mx-auto">
        <img src={paypal} alt="" className="w-[143px] h-[55px]" />
        </div>


    <div className="w-[200px] mx-auto">
        <img src={toyota} alt="" className="w-[143px] h-[55px]" /></div>


    <div className="w-[200px] mx-auto">
        <img src={visa} alt="" className="w-[143px] h-[55px]" />
    </div>
  </Marquee>

 
  <div className="absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-white to-transparent z-10"></div>
</div>
            
        </div>
    );
};

export default Marquees;