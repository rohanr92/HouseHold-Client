import React from 'react';
import Navbar from '../../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Footer/Footer';

const Auth = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-screen'>
     <Outlet></Outlet>
            </div>
       
            <Footer></Footer>
        </div>
    );
};

export default Auth;