import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Container from '../Container/Container';
import axios from 'axios';
// import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const MyBookings = () => {


      const { user } = use(AuthContext);
        const [data, setData] = useState([]);
    
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

        console.log(data);
        


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


    return (
<div className='md:my-30 my-15'>
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
                <td>
                  <button onClick={() => handleDelete(item._id)}  className="btn btn-ghost btn-xs bg-red-500 text-white">
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