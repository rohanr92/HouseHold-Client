import React, { use, useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import Container from '../Container/Container';
import { FaArrowLeft, FaStar } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageTitle from '../PageTitle';

const SingleServices = () => {
  const product = useLoaderData();
  const { user } = use(AuthContext);

  const [reviews, setReviews] = useState([]);
  const [reviewMessage, setReviewMessage] = useState("");
  const [reviewRating, setReviewRating] = useState(5);

  useEffect(() => {
    if (product?._id) {
      fetch(`http://localhost:3000/reviews/${product._id}`)
        .then(res => res.json())
        .then(data => setReviews(data));
    }
  }, [product?._id]);

  if (!product) {
    return (
      <Container>
        <div className="py-20 text-center text-2xl font-semibold">Service Not Found</div>
      </Container>
    );
  }

  const {
    Availability,
    Category,
    Description,
    ImageURL,
    Price,
    PricingType,
    ProviderEmail,
    ProviderName,
    ProviderPhoneNumber,
    Rating,
    ReviewCount,
    ServiceArea,
    ServiceName,
    _id,
  } = product;

  console.log(product);

  const modalHandle = () => {
    document.getElementById('booking_modal').showModal();
  };

  const bookHandleButton = async (e) => {
    e.preventDefault();

    const email = e.target.emails.value;
    const serviceId = e.target.serviceId.value;
    const date = e.target.date.value;
    const price = e.target.price.value;
    const name = e.target.name.value;

    const bookingData = {
      userEmail: email,
      serviceId: serviceId,
      bookingDate: date,
      price: price,
      serviceName: name,
    };

    try {
      const res = await axios.post(
        "http://localhost:3000/bookings",
        bookingData
      );

      console.log("Booking saved:", res.data);
      if (res.data?.acknowledged === true && res.data?.insertedId) {
        Swal.fire({
          title: "Booked",
          text: "Thanks For Booking",
          icon: "success"
        });
        document.getElementById('booking_modal').close();
      } else {
        Swal.fire({
          title: "Failed",
          text: "Booking Failed",
          icon: "error"
        });
      }

    } catch (error) {
      console.error("Error saving booking:", error);
      Swal.fire({
        title: "Failed",
        text: "Booking Failed",
        icon: "error"
      });
    }
  };

  

  return (
    <div>
      <PageTitle title={`${ServiceName} - Household App`} />
      <Container>
        <div className="py-10 px-4 md:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            <div className="lg:col-span-2 space-y-6">

              <div className="w-full h-[480px] rounded-xl bg-gray-200 shadow-sm overflow-hidden">
                {ImageURL ? (
                  <img
                    src={ImageURL}
                    alt={ServiceName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-300"></div>
                )}
              </div>


              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-[#0f172a] mb-4">
                  Service Description
                </h3>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div>
                    <span className="text-[#0ab991] font-medium">Availability</span>
                    <span className="ml-2 text-gray-700">: {Availability}</span>
                  </div>

                  <div>
                    <span className="text-[#0ab991] font-medium">Usage Time</span>
                    <span className="ml-2 text-gray-700">: 3 Month</span>
                  </div>
                </div>

                <hr className="border-gray-200 mb-4" />

                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {Description}
                </p>
              </div>
            </div>


            <div className="space-y-6">

              <div>
                <div className='hidden md:block'>
                  <Link
                    to="/all-services"
                    className="flex items-center gap-2 light:text-gray-700 light:hover:text-black text-sm "
                  >
                    <FaArrowLeft size={18} /> Back To All Services
                  </Link>
                </div>

                <h1 className="text-4xl font-extrabold light:text-[#0f172a] dark:text-[#0ab991] mt-3">
                  {ServiceName}
                </h1>

                <span className="inline-block bg-[#0ab9901f] text-[#0ab991] px-3 py-1 rounded-full text-xs mt-3">
                  {Category}
                </span>
              </div>


              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <div className="text-2xl font-bold text-green-600">${Price} /hour</div>
                <p className="text-gray-500 text-sm mt-1">Price starts from</p>
              </div>


              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-3 dark:text-[#0ab991]">Service Details</h2>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><span className="font-semibold dark:text-black">Product ID:</span> {_id}</p>
                  <p><span className="font-semibold dark:text-black">Posted:</span> 10/19/2024</p>
                  <p><span className="font-semibold dark:text-black">Reviews:</span> {ReviewCount}</p>
                </div>
              </div>


              <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-3 dark:text-[#0ab991]">Company Information</h2>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full">{ }</div>
                  <div>
                    <p className="font-semibold dark:text-black">{ProviderName}</p>
                    <p className="text-sm text-gray-600">{ProviderEmail}</p>
                  </div>
                </div>

                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">Location:</span> {ServiceArea}
                  </p>
                  <p>
                    <span className="font-semibold">Contact:</span> {ProviderPhoneNumber}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Status:</span>
                    <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                      Available
                    </span>
                  </p>
                </div>
              </div>


              <button onClick={modalHandle}
                className={`w-full py-4 rounded-xl text-white font-semibold text-lg bg-[#0ab991] cursor-pointer shadow-md ${user?.email === ProviderEmail ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                disabled={user?.email === ProviderEmail}
              >
                Book This Service Now
              </button>

              <dialog id="booking_modal" className="modal">
                <div className="modal-box">

                 
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>

                  <h3 className="font-bold text-xl mb-4">Book This Service</h3>


                  <form className="space-y-4" onSubmit={bookHandleButton}>

                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">Service Name</span>
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={ServiceName}
                        name='name'
                        className="input input-bordered w-full text-black bg-gray-100"
                      />
                    </div>


                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">Your Email</span>
                      </label>
                      <input
                        type="email"
                        readOnly
                        value={user?.email}
                        name='emails'
                        className="input input-bordered w-full text-black bg-gray-100"
                      />
                    </div>


                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">Service ID</span>
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={_id}
                        name='serviceId'
                        className="input input-bordered text-black w-full bg-gray-100"
                      />
                    </div>


                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">Booking Date</span>
                      </label>
                      <input
                        type="date"
                        required
                        className="input light:text-black input-bordered w-full"
                        name='date'
                      />
                    </div>


                    <div>
                      <label className="label">
                        <span className="label-text font-semibold">Price</span>
                      </label>
                      <input
                        type="number"
                        readOnly
                        value={Price}
                        className="input input-bordered w-full  bg-gray-100"
                        name='price'
                      />
                    </div>


                    <button type='submit'
                      className="w-full py-3 rounded-lg text-white font-semibold text-lg shadow-md"
                      style={{ backgroundColor: "#0ab991" }}
                    >
                      Book Now
                    </button>

                  </form>


                </div>
              </dialog>


            </div>
          </div>
        </div>

        
        <div className="max-w-4xl mx-auto mt-14 mb-20">

          <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>

         
          {reviews.length === 0 && (
            <p className="text-gray-600 text-center">No reviews yet. Be the first to review!</p>
          )}

          {reviews.map((r) => (
            <div key={r._id} className="border-1 border-gray-300 rounded-xl p-4 mb-4 shadow-sm bg-white">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold dark:text-[#0ab991]">{r.userName}</h3>
                <p className="flex items-center gap-1 text-yellow-600">
                  <FaStar /> {r.rating}
                </p>
              </div>
              <p className="text-gray-700 mt-2">{r.message}</p>
            </div>
          ))}

         


          
        </div>
        

      </Container>

    </div>
  );
};

export default SingleServices;
