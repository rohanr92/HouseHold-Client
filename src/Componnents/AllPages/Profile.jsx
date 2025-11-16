import React, { useState, useContext } from 'react';


import { RxAvatar } from 'react-icons/rx';
import toast from 'react-hot-toast';
import { AuthContext } from '../Provider/AuthContext';
import Container from '../Container/Container';

const Profile = () => {
  const { user, setUser, loading, updatedProfile } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);

  console.log(user);
  

    if (loading || !user) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
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
        // console.error(err);
        toast.error("Failed to update profile: " + err.message);
      });
  };



  return (
    <div className="bg-gray-100 min-h-screen">
      <Container>
        <div className="flex justify-center pt-12 items-center min-h-screen">
          <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-6">

           


            <div className="flex justify-center mb-6">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-4 border-yellow-500 object-cover"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center rounded-full border-4 border-yellow-500 bg-gray-200">
                  <RxAvatar className="text-gray-400 w-16 h-16" />
                </div>
              )}
            </div>
<div className='mb-6 text-center'>
            <h2 className="text-2xl font-bold text-center ">User Profile</h2>
            <p>Last Login Time: {user?.metadata?.lastSignInTime}</p>
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
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="text"
                    name="displayName"
                    value={user.displayName || ""}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <input
                    type="email"
                    name="email"
                    value={user.email || ""}
                    readOnly
                    className="w-full p-2 border rounded-lg bg-gray-100 text-gray-600 cursor-not-allowed"
                  />
                  <textarea
                    name="bio"
                    value={user.bio || ""}
                    onChange={handleChange}
                    placeholder="Bio"
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <button
                    onClick={handleSave}
                    className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition font-semibold"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  

                  <p className="text-center font-semibold text-lg">{user.displayName}</p>
                  <p className="text-center text-gray-600">{user.email}</p>
                  <p className="text-center text-gray-600 mb-4">{user.bio}</p>
                  <button
                    onClick={handleEdit}
                    className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition font-semibold"
                  >
                    Edit Profile
                  </button>
                </>
              )}
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
