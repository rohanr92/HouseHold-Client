import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router'; 
import { FaUser, FaEnvelope, FaLock, FaGoogle, FaImage, FaEye, FaEyeSlash } from 'react-icons/fa6';
import Container from '../../Container/Container';
import { AuthContext } from '../../Provider/AuthContext';

import toast from 'react-hot-toast';
import axios from 'axios';
import PageTitle from '../../PageTitle';

const RegisterPage = () => {

    const { user, setUser, createUser, googleLogin, loading, updatedProfile } = use(AuthContext);

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();

    if(loading) {
       return <div className="min-h-screen flex justify-center items-center">
          <span className="loading loading-infinity loading-xl text-[#0ab991]"></span>
       </div>
    }

   const handleSubmit = (event) => {
  event.preventDefault(); 
  setError('');

  const name = event.target.name.value;
  const email = event.target.email.value;
  const imageUrl = event.target.imageUrl.value;
  const password = event.target.password.value;

  if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      toast.error('Password must be at least 6 characters long.');
      return;
  }
  if (!/[A-Z]/.test(password)) {
      setError('Password must contain at least one uppercase letter.');
      toast.error('Password must contain at least one uppercase letter.');
      return;
  }
  if (!/[a-z]/.test(password)) {
      setError('Password must contain at least one lowercase letter.');
      toast.error('Password must contain at least one lowercase letter.');
      return;
  }

  createUser(email, password)
    .then((result) => {
        setUser(result.user);
        toast.success('Account Created Successfully');

        const usersData = {
          displayName: name,
          email: result.user.email,
          emailVerified: result.user.emailVerified || false,
          phoneNumber: result.user.phoneNumber || '',
          photoURL: imageUrl || result.user.photoURL || ''
        };

        return axios.post('http://localhost:3000/users', usersData)
          .then(() => updatedProfile(name, imageUrl));
    })
    .then(() => {
        event.target.reset();
        navigate('/');
    })
    .catch((error) => {
        setError(error.message);
        toast.error(error.message);
    });
}

const googleSignUp = () => {
  googleLogin()
    .then((result) => {
        setUser(result.user);
        toast.success('Account Created Successfully');

        const usersData = {
          displayName: result.user.displayName || '',
          email: result.user.email,
          emailVerified: result.user.emailVerified || false,
          phoneNumber: result.user.phoneNumber || '',
          photoURL: result.user.photoURL || ''
        };

        return axios.post('http://localhost:3000/users', usersData)
          .then(() => navigate('/'));
    })
    .catch((error) => {
        toast.error(error.message);
    });
}

    return (
        <div className="flex items-center justify-center min-h-screen light:bg-gray-100 py-[80px] px-[15px]">
            <Container>
                <PageTitle title="Register - Household App" />
                <div className='place-items-center'>
                    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">

                        <h1 className="text-3xl font-bold text-center text-gray-800">
                            Create an Account
                        </h1>

                        <form className="space-y-6" onSubmit={handleSubmit}>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <div className="relative mt-1">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <FaUser className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:border-[#0ab991]"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <div className="relative mt-1">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <FaEnvelope className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:border-[#0ab991]"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Profile Image URL (Optional)
                                </label>
                                <div className="relative mt-1">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <FaImage className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <input
                                        id="imageUrl"
                                        name="imageUrl"
                                        type="url"
                                        className="w-full py-3 pl-10 pr-4 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:border-[#0ab991]"
                                        placeholder="https://example.com/image.png"
                                    />
                                </div>
                            </div>

                            
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="relative mt-1">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        <FaLock className="w-5 h-5 text-gray-400" />
                                    </span>
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="new-password"
                                        required
                                        className="w-full py-3 pl-10 pr-10 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:border-[#0ab991]"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>

                            {error && (
                                <p className="text-sm text-red-600 text-left">{error}</p>
                            )}

                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 px-4 text-[13px] sm:text-lg font-semibold text-white bg-[#0ab991] rounded-md hover:bg-[#18dcae] focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:ring-offset-2 transition-colors"
                                >
                                    Sign Up with Email
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-t border-gray-300" />
                            <span className="px-4 text-sm font-medium text-gray-500">OR</span>
                            <hr className="flex-grow border-t border-gray-300" />
                        </div>

                        <div>
                            <button
                                onClick={googleSignUp}
                                type="button"
                                className="w-full flex items-center justify-center py-3 px-4 text-[13px] sm:text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:ring-offset-2 transition-colors"
                            >
                                <FaGoogle className="w-5 h-5 mr-3 text-red-500" />
                                Sign Up with Google
                            </button>
                        </div>

                        <p className="text-sm text-center text-gray-600">
                            Already have an account?{' '}
                            <Link to="/auth/login" className="font-medium text-[#0ab991] hover:text-yellow-600">
                                Log in
                            </Link>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default RegisterPage;
