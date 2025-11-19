import React, { use } from "react";
import Container from "../Container/Container";
import { Link } from "react-router";
import axios from "axios";
import { AuthContext } from "../Provider/AuthContext";
import PageTitle from "../PageTitle";
import Swal from "sweetalert2";



export default function CreateService() {

  const {user} = use(AuthContext);
  console.log(user);
  

const handleSubmitForm = (e) => {
  e.preventDefault();

  const serviceName = e.target.ServiceName.value.trim();
  const category = e.target.Category.value.trim();
  const availability = e.target.Availability.value.trim();
  const serviceArea = e.target.ServiceArea.value.trim();
  const price = e.target.Price.value.trim();
  const pricingType = e.target.PricingType.value.trim();
  const imageURL = e.target.ImageURL.value.trim();
  const providerName = e.target.ProviderName.value.trim();
  const providerEmail = e.target.ProviderEmail.value.trim();
  const providerPhoneNumber = e.target.ProviderPhoneNumber.value.trim();
  const rating = e.target.Rating.value.trim();
  const reviewCount = e.target.ReviewCount.value.trim();
  const description = e.target.Description.value.trim();

 
  if (
    !serviceName ||
    !category ||
    !availability ||
    !serviceArea ||
    !price ||
    !pricingType ||
    !imageURL ||
    !providerName ||
    !providerEmail ||
    !providerPhoneNumber
  ) {
    Swal.fire("Error", "Please fill in all required fields", "error");
    return;
  }

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

  axios.post("http://localhost:3000/all-services", formData)
    .then((res) => {
      console.log("SERVER RESPONSE:", res.data);
      if (res.data.insertedId) {
        Swal.fire("Success", "Service Added", "success").then(() => {
          e.target.reset(); 
        });
      }
    })
    .catch((error) => {
      console.log("POST ERROR:", error);
      Swal.fire("Error", "Something went wrong", "error");
    });
};

  return (
  <Container>
    <PageTitle title="Create Services - Household App" />
  <div className="w-full min-h-screen  py-12 flex flex-col items-center">
    <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Create <span className="text-[#0AB991]">A Service</span>
    </h1>

    <form onSubmit={handleSubmitForm} className="w-full max-w-4xl shadow-xl border border-gray-200 rounded-2xl bg-white dark:text-black p-8 grid grid-cols-1  md:grid-cols-2 gap-6">

      <div className="flex flex-col gap-2">
        <label className="font-medium">Service Name</label>
        <input type="text" placeholder="e.g. Home Cleaning Service" name="ServiceName" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Category</label>
        <select name="Category" className="select select-bordered w-full dark:text-white">
          <option disabled selected>Select a Category</option>
          <option>Cleaning</option>
          <option>Repair</option>
          <option>Beauty</option>
          <option>Moving & Shifting</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Availability</label>
        <input placeholder="e.g. 24/7, Weekends only" name="Availability" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Service Area</label>
        <input placeholder="City, Country" name="ServiceArea" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Service Price ($)</label>
        <input placeholder="e.g. 49.99" name="Price" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Pricing Type</label>
        <select name="PricingType" className="select select-bordered w-full dark:text-white">
          <option disabled selected>Select Pricing Type</option>
          <option>Fixed Price</option>
          <option>Hourly Rate</option>
          <option>Starts From</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-medium">Service Image URL</label>
        <input placeholder="https://..." name="ImageURL" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Provider Name</label>
        <input placeholder="e.g. John Doe Services" name="ProviderName" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Provider Email</label>
        <input  name="ProviderEmail" value={user.email} className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Provider Phone Number</label>
        <input placeholder="e.g. +1-555-1234" name="ProviderPhoneNumber" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Rating (Optional)</label>
        <input placeholder="e.g. 4.8" name="Rating" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">Review Count (Optional)</label>
        <input placeholder="e.g. 120" name="ReviewCount" className="input input-bordered w-full dark:text-white" />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-medium">Description</label>
        <textarea placeholder="Describe your service here..." name="Description" className="textarea textarea-bordered h-32 dark:text-white"></textarea>
      </div>

      <div className="md:col-span-2 mt-6">
        <button type="submit" className="btn w-full py-4 text-lg font-semibold text-white border-none" style={{ background: "#0AB991" }}>
          Create Service
        </button>
      </div>

    </form>
  </div>
</Container>

  );
}