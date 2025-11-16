import React from 'react';
import Container from '../../Container/Container';
import { FaStar, FaEye, FaDollarSign, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from "framer-motion";
import { fadeIn } from '../../../variants';


const serviceCards = [
    {
        id: 1,
        image: 'https://media.istockphoto.com/id/1361116682/photo/plumber-fixing-a-leaking-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=THa1uoYgW4gGz0C8YMqenM58UFY-uD1X79dP3obYLLI=',
        provider: 'Sarah L.',
        views: '18500',
        title: 'Professional Home Cleaning',
        rating: 4.9,
        reviews: 850,
        price: 35,
        priceType: 'hr',
        location: 'Local',
        country: 'Canada',
        isOnline: false,
    },
    {
        id: 2,
        image: 'https://media.istockphoto.com/id/1361116682/photo/plumber-fixing-a-leaking-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=THa1uoYgW4gGz0C8YMqenM58UFY-uD1X79dP3obYLLI=',
        provider: 'John D.',
        views: '22000',
        title: 'Expert Lawn Mowing & Gardening',
        rating: 4.7,
        reviews: 1200,
        price: 50,
        priceType: 'hr',
        location: 'Local',
        country: 'United States',
        isOnline: false,
    },
    {
        id: 3,
        image: 'https://media.istockphoto.com/id/1361116682/photo/plumber-fixing-a-leaking-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=THa1uoYgW4gGz0C8YMqenM58UFY-uD1X79dP3obYLLI=',
        provider: 'Emily C.',
        views: '15100',
        title: 'Efficient Furniture Assembly',
        rating: 4.8,
        reviews: 620,
        price: 40,
        priceType: 'hr',
        location: 'Local',
        country: 'United Kingdom',
        isOnline: false,
    },
    {
        id: 4,
        image: 'https://media.istockphoto.com/id/1361116682/photo/plumber-fixing-a-leaking-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=THa1uoYgW4gGz0C8YMqenM58UFY-uD1X79dP3obYLLI=',
        provider: 'Michael B.',
        views: '19800',
        title: 'Home Appliance Repair',
        rating: 4.5,
        reviews: 910,
        price: 60,
        priceType: 'hr',
        location: 'Local',
        country: 'Australia',
        isOnline: false,
    },
    {
        id: 5,
        image: 'https://media.istockphoto.com/id/1361116682/photo/plumber-fixing-a-leaking-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=THa1uoYgW4gGz0C8YMqenM58UFY-uD1X79dP3obYLLI=',
        provider: 'Jessica T.',
        views: '25400',
        title: 'Interior Painting Service',
        rating: 4.9,
        reviews: 1500,
        price: 75,
        priceType: 'hr',
        location: 'Local',
        country: 'Germany',
        isOnline: false,
    },
    {
        id: 6,
        image: 'https://media.istockphoto.com/id/1361116682/photo/plumber-fixing-a-leaking-bathroom-faucet.jpg?s=612x612&w=0&k=20&c=THa1uoYgW4gGz0C8YMqenM58UFY-uD1X79dP3obYLLI=',
        provider: 'David K.',
        views: '17300',
        title: 'Plumbing Leak Fix',
        rating: 4.6,
        reviews: 780,
        price: 80,
        priceType: 'hr',
        location: 'Local',
        country: 'France',
        isOnline: false,
    },
];


const HomeCollection = () => {
    return (
        <div className=' md:my-[60px]'>
            <Container>
                <motion.div 
                variants={fadeIn("up", 0.2)}
                              initial="hidden"
                              whileInView="show"
                              viewport={{ once: false, amount: 0.7 }}
                className='text-center px-[16px] md:px-0'>
                    <h2 className='text-[40px] font-semibold'>Our Latest Services</h2>
                    <p className='md:w-2xl mx-auto'>Save yourself hours and get your to-do list completed.Save yourself hours and get your to-do list completedSave yourself hours and get your to-do list completed</p>

                </motion.div>


                <div className="container mx-auto px-4 md:px-0 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceCards.map((card) => (
                            <div
                                key={card.id}
                                className="bg-white rounded-lg overflow-hidden border border-gray-200
                                   transform transition-transform duration-300 hover:scale-102 hover:shadow-xl"
                            >

                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>


                                <div className="p-6">

                                    <div className="flex justify-between items-center mb-3">
                                        <p className="text-gray-700 font-semibold">{card.provider}</p>
                                        <div className="flex items-center text-gray-600 text-sm">
                                            <FaEye className="mr-1 text-gray-500" /> {card.views} views
                                        </div>
                                    </div>


                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{card.title}</h3>


                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex items-center text-sm text-gray-700">
                                            <FaStar className="text-yellow-400 mr-1" />
                                            {card.rating} ({card.reviews})
                                        </div>
                                        <p className="text-lg font-bold text-gray-800 flex items-center">
                                            <FaDollarSign className="text-gray-600 mr-1 text-base" />
                                            {card.price} /{card.priceType}
                                        </p>
                                    </div>


                                    <div className="flex items-center text-gray-600 text-sm mb-6">
                                        <FaMapMarkerAlt className="mr-2" />
                                        {card.location} {card.isOnline ? '(Online)' : ''}
                                        {card.country && <span className="ml-2">| {card.country}</span>}
                                    </div>


                                    <button
                                        className="w-full py-3 rounded-md text-white font-semibold
                                           bg-[#0ab991] hover:bg-[#08a280] transition-colors duration-300
                                           focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:ring-opacity-50"
                                    >
                                        View Details
                                    </button>
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