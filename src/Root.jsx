import React from 'react';
import Navbar from './Componnents/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from './Componnents/Footer/Footer';
import { Toaster } from 'react-hot-toast';


const Root = () => {
    return (
        <div>
        <Navbar></Navbar>
        <section className='min-h-screen'>
<Outlet>   
</Outlet>
<Toaster />
        </section>
        
        <Footer></Footer>


        </div>
    );
};

export default Root;