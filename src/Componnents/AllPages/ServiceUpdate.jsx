import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router';
import Container from '../Container/Container';
import axios from 'axios';
import toast from 'react-hot-toast';
import PageTitle from '../PageTitle';

const ServiceUpdate = () => {
    const { id } = useParams();
    console.log(id);
       const [service, setService] = useState(null);

       console.log(service);
       
       const navigate = useNavigate();


   

  useEffect(() => {
    fetch(`https://household-server-gray.vercel.app/all-services/${id}`)
      .then(res => res.json())
      .then(data => setService(data));
  }, [id]);

if (!service) return <p>Loading...</p>;

  const  {
  ServiceName,
  Category,
  Availability,
  ServiceArea,
  Price,
  PricingType,
  ImageURL,
  ProviderName,
  ProviderEmail,
  ProviderPhoneNumber,
  Rating,
  ReviewCount,
  Description
} = service;

const formUpdate = (e) => {
    e.preventDefault();
   
const serviceName = e.target.ServiceName.value;
const category = e.target.Category.value;
const availability = e.target.Availability.value;
const serviceArea = e.target.ServiceArea.value;
const price = e.target.Price.value;
const pricingType = e.target.PricingType.value;
const imageURL = e.target.ImageURL.value;
const providerName = e.target.ProviderName.value;
const providerEmail = e.target.ProviderEmail.value;
const providerPhoneNumber = e.target.ProviderPhoneNumber.value;
const rating = e.target.Rating.value;
const reviewCount = e.target.ReviewCount.value;
const description = e.target.Description.value;

const formData = {
  ServiceName: serviceName,
  Category: category,
  Availability: availability,
  ServiceArea: serviceArea,
  Price: price,
  PricingType: pricingType,
  ImageURL: imageURL,
  ProviderName: providerName,
  ProviderEmail: providerEmail,
  ProviderPhoneNumber: providerPhoneNumber,
  Rating: rating,
  ReviewCount: reviewCount,
  Description: description,
};


    axios.patch(`https://household-server-gray.vercel.app/all-services/${id}`, formData)
    .then((res) => {
      console.log("SERVER RESPONSE:", res.data);
      toast.success('Updated Your Service');
      navigate('/all-services'); 
    })
    .catch((error) => {
      console.log("POST ERROR:", error);
    });


}



    
    return (
        <div>
          <PageTitle title="Update Service - Household App" />
            <Container>
  <div className="w-full min-h-screen py-12 flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Update <span className="text-[#0AB991]">A Service</span>
    </h1>

    <form onSubmit={formUpdate} className="w-full max-w-4xl shadow-xl border border-gray-200 rounded-2xl bg-white p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Service Name</label>
        <input type="text" defaultValue={ServiceName} placeholder="e.g. Home Cleaning Service" name="ServiceName" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label  className="font-medium dark:text-black">Category</label>
        <input type="text" defaultValue={Category} name="Category" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Availability</label>
        <input defaultValue={Availability} name="Availability" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Service Area</label>
        <input defaultValue={ServiceArea} name="ServiceArea" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Service Price ($)</label>
        <input defaultValue={Price} name="Price" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Pricing Type</label>
 <input defaultValue={PricingType} name="PricingType" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-medium dark:text-black">Service Image URL</label>
        <input defaultValue={ImageURL} name="ImageURL" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Provider Name</label>
        <input defaultValue={ProviderName} name="ProviderName" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Provider Email</label>
        <input value={ProviderEmail} name="ProviderEmail" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Provider Phone Number</label>
        <input defaultValue={ProviderPhoneNumber} name="ProviderPhoneNumber" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Rating (Optional)</label>
        <input defaultValue={Rating} name="Rating" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium dark:text-black">Review Count (Optional)</label>
        <input defaultValue={ReviewCount} name="ReviewCount" className="input input-bordered w-full" />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-medium dark:text-black">Description</label>
        <textarea defaultValue={Description} name="Description" className="textarea textarea-bordered h-32"></textarea>
      </div>

      <div className="md:col-span-2 mt-6">
        <button type="submit" className="btn w-full py-4 text-lg font-semibold text-white border-none" style={{ background: "#0AB991" }}>
          Update Your Services
        </button>
      </div>

    </form>
  </div>
</Container>
        </div>
    );
};

export default ServiceUpdate;