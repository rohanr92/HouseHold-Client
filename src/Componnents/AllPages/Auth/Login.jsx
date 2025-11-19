import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle, FaLock, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import Container from '../../Container/Container';
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import PageTitle from '../../PageTitle';

const Login = () => {
  const { user, setUser, login, loading, googleLogin } = use(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);
  

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-infinity loading-xl text-yellow-500"></span>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const email = event.target.email.value;
    const password = event.target.password.value;

    login(email, password)
      .then((userCredential) => {
        const users = userCredential.user;
        setUser(users);
        event.target.reset();
        toast.success('Logged In Successfully');
        navigate(location?.state || '/');
      })
      .catch((error) => {
        toast.error('Invalid Email Or Password');
        setError("Invalid Email Or Password");
      });
  };


      const googleSignUp = () => {
        googleLogin()
            .then((result) => {
                setUser(result.user);
                toast.success('Logged In Successfully')
                navigate(location?.state || '/');
            })
            .catch((error) => {
                toast.error(error.message)
            })
    }

  return (
    <div className='light:bg-gray-100 px-[15px]'>
      <PageTitle title="Login - Household App" />
      <Container>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center text-gray-800">Login</h1>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <div className="relative mt-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FaUser className="w-5 h-5 text-gray-400" />
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
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
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
                    autoComplete="current-password"
                    required
                    className="w-full py-3 pl-10 pr-10 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:border-yellow-5[#0ab991]"
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

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="w-4 h-4 text-[#0ab991] border-gray-300 rounded focus:ring-[#0ab991]"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                    Remember me
                  </label>
                </div>

                <Link to='/auth/forgot' className="font-medium text-[#0ab991] hover:text-[#23dfb3]">
                  Forgot your password?
                </Link>
              </div>

              {error && (
                <p className="text-sm text-red-600 text-left">{error}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 text-[13px] sm:text-lg font-semibold text-white bg-[#0ab991] rounded-md hover:bg-[#14d4a8] focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:ring-offset-2"
                >
                  Log In
                </button>
              </div>
            </form>

            <p className="text-sm text-center text-gray-600">
              Don't have an account?{' '}
              <Link to="/auth/register" className="font-medium text-[#0ab991] hover:text-[#0ab991]">
                Sign up
              </Link>
            </p>




                        <div>
                            <button
                                onClick={googleSignUp}
                                type="button"
                                className="w-full flex items-center justify-center py-3 px-4 text-[13px] sm:text-lg font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0ab991] focus:ring-offset-2 transition-colors"
                            >
                                <FaGoogle className="w-5 h-5 mr-3 text-red-500" />
                                Sign In with Google
                            </button>
                        </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
