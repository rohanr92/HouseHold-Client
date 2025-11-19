import React from 'react';
import Container from '../../Container/Container';
import { Link } from 'react-router';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';


const Talented = () => {
    return (
        <div className='my-[40px] px-[16px] md:px-[0]'>
            <Container>

                <div className='relative bg-[#b0e3d3] rounded-[14px] px-6 py-10 overflow-hidden 
               h-[300px] md:h-[400px] content-center'>


                    <div className='md:flex md:justify-between md:items-center gap-8'>
                        <motion.div
                        variants={fadeIn("up", 0.2)}
                                      initial="hidden"
                                      whileInView="show"
                                      viewport={{ once: false, amount: 0.7 }}
                        className='md:flex-1'>
                            <h2 className='text-4xl md:w-[35%] font-semibold text-[#222]'>
                                With talented freelancers do more work.
                            </h2>

                            <div className="mt-4 flex gap-4 sm:mt-6">
                                <Link
                                    to="/all-services"
                                    className="inline-block rounded border border-[#0ab991] bg-[#0ab991] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#3cc7ac] hover:border-[#3cc7ac]"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    to="/all-services"
                                    className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-[#0ab991] shadow-sm transition-colors hover:bg-[#0ab991] hover:text-white"
                                >
                                    Learn More
                                </Link>
                            </div>
                        </motion.div>
                    </div>


                    <img
                        src="https://creativelayers.net/themes/freeio-html/images/about/about-6.png"
                        alt=""
                        className="hidden md:block w-[500px] object-contain md:absolute md:bottom-0 md:right-6"
                    />
                </div>
            </Container>
        </div>
    );
};

export default Talented;
