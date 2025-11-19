import React, { useState, useContext, useEffect } from 'react';
import Container from '../Container/Container';
import { RxAvatar } from 'react-icons/rx';
import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import PageTitle from '../PageTitle';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Profile = () => {
  const { user, setUser, loading, updatedProfile } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [stats, setStats] = useState({
    servicesCount: 0,
    totalBookings: 0,
    totalRevenue: 0,
    averageRating: 0,
  });
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      if (!user?.email) return;

      try {
      
        const servicesRes = await axios.get(`http://localhost:3000/my-services?email=${user.email}`);
        const services = servicesRes.data || [];
        const servicesCount = services.length;

       
        let totalBookings = 0;
        let totalRevenue = 0;
        let totalRating = 0;
        let ratedServices = 0;

        for (const service of services) {
          const bookingsRes = await axios.get(`http://localhost:3000/bookings?serviceId=${service._id}`);
          const bookings = bookingsRes.data || [];
          totalBookings += bookings.length;
          totalRevenue += bookings.reduce((acc, b) => acc + (b.price || 0), 0);

          if (service.Rating) {
            totalRating += service.Rating;
            ratedServices++;
          }
        }

        const averageRating = ratedServices ? totalRating / ratedServices : 0;

        setStats({
          servicesCount,
          totalBookings,
          totalRevenue,
          averageRating: parseFloat(averageRating.toFixed(1)),
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, [user?.email]);

  if (loading || !user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-xl text-[#0AB991]"></span>
      </div>
    );
  }

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleEdit = () => setEditMode(true);

  const handleSave = () => {
    updatedProfile(user.displayName, user.photoURL)
      .then(() => {
        setEditMode(false);
        toast.success("Profile updated successfully!");
      })
      .catch((err) => {
        toast.error("Failed to update profile: " + err.message);
      });
  };

  
  const barData = {
    labels: ['Total Bookings', 'Total Revenue'],
    datasets: [
      {
        label: 'Stats',
        data: [stats.totalBookings, stats.totalRevenue],
        backgroundColor: ['#0AB991', '#0AB991'],
        borderRadius: 6,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.label === 'Total Revenue') {
              return `$${context.raw}`;
            }
            return context.raw;
          },
        },
      },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  
  const doughnutData = {
    labels: ['Rating', 'Remaining'],
    datasets: [
      {
        data: [stats.averageRating, 5 - stats.averageRating],
        backgroundColor: ['#0AB991', '#E5E7EB'],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: '70%',
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen pb-20">
      <PageTitle title="Profile - Household App" />
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 pt-12">
        
          <div className="bg-white shadow-xl rounded-2xl w-full lg:w-1/3 p-6">
            <div className="flex justify-center mb-6">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-[#0AB991] object-cover"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-[#0AB991] bg-gray-200">
                  <RxAvatar className="text-gray-400 w-16 h-16" />
                </div>
              )}
            </div>

            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold">{user.displayName}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-500">Last Login: {user?.metadata?.lastSignInTime}</p>
            </div>

            <div className="space-y-4">
              {editMode ? (
                <>
                  <input
                    type="text"
                    name="photoURL"
                    value={user.photoURL || ""}
                    onChange={handleChange}
                    placeholder="Profile Image URL"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0AB991]"
                  />
                  <input
                    type="text"
                    name="displayName"
                    value={user.displayName || ""}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0AB991]"
                  />
                  <textarea
                    name="bio"
                    value={user.bio || ""}
                    onChange={handleChange}
                    placeholder="Bio"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0AB991]"
                  />
                  <button
                    onClick={handleSave}
                    className="w-full bg-[#0AB991] text-white py-2 rounded-lg hover:bg-[#08a280] transition font-semibold"
                  >
                    Save
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="w-full bg-[#0AB991] text-white py-2 rounded-lg hover:bg-[#08a280] transition font-semibold"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>

          
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            {loadingStats ? (
              <div className="flex justify-center items-center col-span-2">
                <span className="loading loading-spinner loading-xl text-[#0AB991]"></span>
              </div>
            ) : (
              <>
             
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Services</h3>
                  <p className="text-4xl font-bold text-[#0AB991]">{stats.servicesCount}</p>
                </div>

               
                <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold text-gray-600 mb-2">Average Rating</h3>
                  <div className="relative w-32 h-32">
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                    <div className="absolute w-32 h-32 flex items-center justify-center top-0 left-0 text-2xl font-bold text-[#0AB991]">
                      {stats.averageRating}
                    </div>
                  </div>
                </div>

            
                <div className="bg-white rounded-2xl shadow p-6 col-span-2">
                  <h3 className="text-lg font-semibold text-gray-600 mb-4">Bookings & Revenue</h3>
                  <Bar data={barData} options={barOptions} />
                </div>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
