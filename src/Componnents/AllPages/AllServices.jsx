import React, { useContext, useState, useEffect } from 'react';
import { Link } from "react-router";
import { AuthContext } from '../Provider/AuthContext';
import Container from '../Container/Container';
import { HiSearch, HiFilter } from 'react-icons/hi';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import axios from 'axios';

const AllServices = () => {
  const { loading } = useContext(AuthContext);

  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [categories, setCategories] = useState(['All']);


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const params = {};
        if (searchQuery) params.search = searchQuery;
        if (selectedCategory && selectedCategory !== 'All') params.category = selectedCategory;
        if (minPrice) params.minPrice = minPrice;
        if (maxPrice) params.maxPrice = maxPrice;

        const res = await axios.get('http://localhost:3000/all-services/filter', { params });
        setServices(res.data);

        const allCategories = ['All', ...new Set(res.data.map(s => s.Category))];
        setCategories(allCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchServices();
  }, [searchQuery, selectedCategory, minPrice, maxPrice]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-[#0AB991]"></span>
      </div>
    );
  }

  return (
    <Container>
      <div className="min-h-screen py-12 font-sans">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold light:text-gray-900">Our Services</h1>
            <p className="light:text-gray-600 mt-2">Browse trusted professionals for every job.</p>
          </div>

          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-10">
            {/* Search */}
            <div className="relative md:w-1/3">
              <HiSearch className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0AB991] transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="relative md:w-1/3">
              <HiFilter className="absolute left-3 top-3.5 text-gray-400 text-xl" />
              <select
                className="w-full appearance-none pl-10 pr-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0AB991] transition light:bg-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'All' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div className="flex gap-2 md:w-1/3">
              <input
                type="number"
                placeholder="Min Price"
                className="w-1/2 pl-4 pr-2 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0AB991] transition"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Price"
                className="w-1/2 pl-4 pr-2 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0AB991] transition"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          {/* Services Grid */}
          {services.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map(service => (
                <div key={service._id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="overflow-hidden rounded-t-2xl">
                    <img
                      src={service.ImageURL || "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
                      alt={service.ServiceName}
                      className="h-56 w-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{service.ServiceName}</h2>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <p>By <span className="font-medium text-gray-700">{service.ProviderName}</span></p>
                      {service.Rating && (
                        <p className="flex items-center gap-1 text-yellow-500 font-medium">
                          <FaStar /> {service.Rating}
                        </p>
                      )}
                    </div>

                    <div className="text-sm text-gray-600 mb-3 space-y-1">
                      {service.Category && <p>Category: <span className="font-medium text-gray-800">{service.Category}</span></p>}
                      {service.Location && (
                        <p className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-[#0AB991]" />
                          {service.Location}
                        </p>
                      )}
                    </div>

                    {service.Price && (
                      <p className="text-lg font-bold text-[#0AB991] mb-5">${service.Price} /hr</p>
                    )}

                    <Link to={`/all-services/${service._id}`}
                      className="btn btn-primary bg-[#0ab991] border-none outline-0 w-full py-2.5 rounded-lg font-semibold text-white transition-all duration-300 hover:opacity-90"
                      style={{ backgroundColor: '#0AB991', boxShadow: '0 2px 8px rgba(10, 185, 145, 0.3)' }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg ">
              <h2 className="text-2xl font-bold text-gray-800">No Services Found</h2>
              <p className="text-gray-600 mt-2">Try changing your search, category, or price filters.</p>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AllServices;
