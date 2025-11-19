import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Container from '../Container/Container';
import axios from 'axios';
// import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import PageTitle from '../PageTitle';

const MyBookings = () => {

  const { user } = use(AuthContext);
  const [data, setData] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/user-bookings?email=${user.email}`)
        .then(response => response.json())
        .then(json => {
          setData(json);
        })
        .catch(err => console.log(err));
    }
  }, [user?.email]);

  const openReviewModal = (id) => {
    setSelectedServiceId(id);
    setReviewRating(5);
    setReviewText("");
    document.getElementById('review_modal').showModal();
  };

  const submitReview = async (e) => {
    e.preventDefault();

    if (!selectedServiceId) return;

    try {
      await axios.post(`http://localhost:3000/reviews`, {
        serviceId: selectedServiceId,
        userEmail: user.email,
        userName: user.displayName || "Hong Pong Kong",
        rating: reviewRating,
        message: reviewText,
        createdAt: new Date()
      });




      Swal.fire("Success", "Review submitted!", "success");
      document.getElementById('review_modal').close();
      setReviewText("");
      setReviewRating(5);

    } catch (err) {

      
      console.error(err);
      Swal.fire("Error", "Failed to submit review", "error");
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`http://localhost:3000/bookings/${id}`)
          .then((res) => {
            console.log("Deleted successfully:", res.data);
            setData((prev) => prev.filter((item) => item._id !== id));
          })
          .catch((err) => {
            console.error("Error deleting booking:", err);
          });

        Swal.fire("Deleted!", "Your item has been deleted.", "success");
      }
    });
  };

  console.log(data);

  return (
    <div className='md:my-30 my-15'>
       <PageTitle title="My Bookings - Household App" />
      <Container>

        <div className="mb-15 text-center">
          <h2 className="text-[36px] font-bold">My Bookings</h2>
        </div>
        {data.length === 0 ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-medium">You have not booked anything yet</h2>
          </div>
        ) : (
          <>

            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Service Name</th>
                    <th>User Email</th>
                    <th>Booking Date</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>{item.serviceName}</td>
                      <td>{item.userEmail}</td>
                      <td>{item.bookingDate}</td>
                      <td>${item.price}</td>
                      <td className='space-x-3'>

                     
                        <button
                          onClick={() => openReviewModal(item.serviceId)}
                          className="btn btn-ghost btn-xs bg-green-600 text-white"
                        >
                          Review
                        </button>

                        <dialog id="review_modal" className="modal">
                          <div className="modal-box">

                            <form method="dialog">
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>

                            <h3 className="font-bold text-xl mb-4">Write a Review</h3>

                            <form onSubmit={submitReview} className="space-y-4">
                              <label className="block font-medium">Rating (1-5)</label>
                              <input
                                type="number"
                                name="rating"
                                min="1"
                                max="5"
                                value={reviewRating}
                                onChange={(e) => setReviewRating(e.target.value)}
                                className="input input-bordered w-full"
                              />

                              <label className="block font-medium">Your Review</label>
                              <textarea
                                name="reviewText"
                                placeholder="Write your review..."
                                value={reviewText}
                                onChange={(e) => setReviewText(e.target.value)}
                                className="textarea textarea-bordered w-full"
                              ></textarea>

                              <button className="btn bg-[#0ab991] text-white w-full">Submit</button>
                            </form>

                          </div>
                        </dialog>
                        <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs bg-red-500 text-white">
                          Delete
                        </button>

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export default MyBookings;