import React, { use, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import Container from '../../Container/Container';
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import PageTitle from '../../PageTitle';

const Forgot = () => {
    const [message, setMessage] = useState('');
    const { forgotPass } = use(AuthContext);

     const handleForgetSubmit = (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        forgotPass(email)
        .then(() => {
            e.target.reset();
            setMessage('Check your email to reset your password.');
            toast.success('Check your email to reset your password.');
             window.location.href = 'https://mail.google.com/';
  })
  .catch((error) => {
    alert(error.message);
    
    // ..
  });

        
    }

    return (
      <div className='light:bg-gray-100 min-h-screen px-[13px]'>
        <PageTitle title="Forgot Password - Household App" />
       <Container>

            <div  className="flex items-center justify-center min-h-screen">

            
            <div className=' w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md'>


                <form className="space-y-6" onSubmit={handleForgetSubmit}>
                    <div className='text-center text-black text-[30px] font-medium'>
                        <h2>Forget Password</h2>
                    </div>
                          
                         
                          <div>
                            <label 
                              htmlFor="email" 
                              className="block text-sm font-medium text-gray-700"
                            >
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

                             {message && (
            <p className="text-green-600 text-sm text-left font-medium">
              {message}
            </p>
          )}
                
                         
                          <div>
                            <button
                              type="submit"
                              className="w-full py-3 px-4 text-[13px] sm:text-lg font-semibold text-white bg-[#0ab991] rounded-md cursor-pointer hover:bg-[#18d1a6] focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2"
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                

            </div>
            </div>
            </Container>
        </div>
    );
};

export default Forgot;