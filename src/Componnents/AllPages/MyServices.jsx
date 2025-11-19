import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Container from '../Container/Container';
import { Link } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageTitle from '../PageTitle';

const MyServices = () => {
    const { user } = use(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://household-server-gray.vercel.app/my-services?email=${user.email}`)
                .then(response => response.json())
                .then(json => {
                    setData(json);
                })
                .catch(err => console.log(err));
        }
    }, [user?.email]);


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

      axios.delete(`https://household-server-gray.vercel.app/all-services/${id}`)
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
            <PageTitle title="My Services - Household App" />
            <Container>
                <div className='mb-15 text-center'>

                    <h2 className='text-[36px] font-bold'>My Services</h2>

                </div>
                

                {
                    data.length == 0 ? <h2 className='text-center'>You Do not have any services.</h2> : <>
                    
                    
                    <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Services</th>
                                <th>Provider</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((item, index) => (
                                <tr key={item._id}>
                                    
                                    <th>{index + 1}</th>

                                    
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.ImageURL}
                                                        alt={item.ServiceName}
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {item.ServiceName}
                                                </div>
                                                <div className="text-sm opacity-50">
                                                    {item.ServiceArea}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    
                                    <td>{item.ProviderName}</td>

                                    
                                    <td>${item.Price}</td>

                                    
                                    <th className='space-x-2'>
                                        <Link to={`/my-services-update/${item._id}`} className="btn btn-ghost btn-xs bg-[#0ab991] text-white outline-none">
                                            Edit
                                        </Link>
                                         <button onClick={() => handleDelete(item._id)}  className="btn btn-ghost btn-xs bg-red-500 text-white">
                    Delete
                  </button>
                                    </th>

                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
                    
                    
                    
                    </>
                }
            </Container>
        </div>
    );
};

export default MyServices;
