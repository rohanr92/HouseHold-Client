import React from 'react';
import { HiTag, HiUser, HiCash } from 'react-icons/hi';
import Rating from './Rating';
import { Link } from 'react-router';


const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col bg-white shadow-xl rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <img 
        className="h-56 w-full object-cover" 
        src={service.ImageURL} 
        alt={service.ServiceName} 
        onError={(e) => { e.target.src = 'https://placehold.co/600x400/e2e8f0/94a3b8?text=Image+Not+Found'; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-sm text-blue-600 font-semibold uppercase tracking-wide">
          <HiTag />
          <span>{service.Category}</span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-2">{service.ServiceName}</h3>
        <div className="flex items-center gap-2 text-gray-700 text-sm mb-4">
          <HiUser />
          <span>{service.ProviderName}</span>
        </div>

        <div className="flex items-baseline gap-2 text-gray-800 mb-4">
          <HiCash className="text-green-600" />
          <span className="text-3xl font-extrabold">${service.Price}</span>
          <span className="text-sm text-gray-600">/ {service.PricingType}</span>
        </div>

        <div className="mb-4">
          <Rating rating={service.Rating}></Rating>
        </div>

        <Link className="mt-auto w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
