import React, { useEffect, useState } from 'react';
import Container from '../../Container/Container';
import { FaStar, FaEye, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';
import axios from 'axios';
import { Link } from 'react-router';

const HomeCollection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(services);
  

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-services');
        const sortedServices = response.data
          .sort((a, b) => (b.ReviewCount || 0) - (a.ReviewCount || 0))
          .slice(0, 6);

        setServices(sortedServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className='md:my-[60px]'>
      <Container>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className='text-center px-[16px] md:px-0 mb-8'
        >
          <h2 className='text-[40px] font-semibold'>Our Top Reviewed Services</h2>
          <p className='md:w-2xl mx-auto'>
            Check out our most popular services with the highest reviews from users.
          </p>
        </motion.div>

        <div className="container mx-auto px-4 md:px-0 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((card) => (
              <div
                key={card._id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200
                  transform transition-transform duration-300 hover:scale-102 hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={card.ImageURL}
                    alt={card.ServiceName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-gray-700 font-semibold">{card.ProviderName}</p>
                    <div className="flex items-center text-gray-600 text-sm">
                      <FaEye className="mr-1 text-gray-500" /> 400 views
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">{card.ServiceName}</h3>

                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <FaStar className="text-yellow-400 mr-1" />
                      {card.Rating || 0} ({card.ReviewCount || 0})
                    </div>
                    <p className="text-lg font-bold text-gray-800 flex items-center">
                      <FaDollarSign className="text-gray-600 mr-1 text-base" />
                      {card.Price} / Hourly
                    </p>
                  </div>

                  <div className="flex items-center text-gray-600 text-sm mb-6">
                    <FaMapMarkerAlt className="mr-2" />
                    {card.ServiceArea} {card.isOnline ? '(Online)' : ''}
                    {/* {card.country && <span className="ml-2">| {card.ServiceArea}</span>} */}
                  </div>

                  <Link to={`/all-services/${card._id}`}
                    className="btn btn-secondary outline-0 border-0 shadow-none w-full py-3 rounded-md text-white font-semibold
                      bg-[#0ab991] hover:bg-[#08a280] transition-colors duration-300
                      focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:ring-opacity-50"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HomeCollection;
