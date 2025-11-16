import React from 'react';
import { useNavigate } from 'react-router';
import ErrorImage from '../../assets/404.svg'
import Container from '../Container/Container';


const Error = () => {

        let navigate = useNavigate();

    const navigateBack = () => {
        navigate(-1)
    }
    return (
        <div className='py-[40px]'>
                    <div>
            <Container>

                <div className='flex flex-col min-h-screen justify-center items-center text-center'>
                    <img src={ErrorImage} alt="" srcset="" className='object-cover w-[500px]'/>
                    <div className='mt-[25px] mb-[10px]'>
                        <h2 className='light:text-[#001931] font-semibold text-[48px]'>Oops, page not found!</h2>
                        <p className='text-[20px] font-normal light:text-[#627382]'>The page you are looking for is not available.</p>
                    </div>
                    <div>
                      <a><button onClick={navigateBack} className='btn font-semibold text-[16px] px-[20px] bg-[#0AB991] text-white mr-[10px]'>Go Back</button></a>
                        <a  href='/' className='btn font-semibold text-[16px] border-2 border-yellow-500 text-black hover:bg-yellow-500 hover:text-white px-[20px]'>Go Home</a>
                    </div>
                </div>

            </Container>
        </div>
    
        </div>
    );
};

export default Error;