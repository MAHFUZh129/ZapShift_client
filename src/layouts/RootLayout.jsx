import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/shared/Footer';
import Navbar from '../components/shared/Navbar';

const RootLayout = () => {
    return (
        <div className='  bg-gray-100'>
            <Navbar />
            <Outlet /> 
            <Footer />
            
        </div>
    );
};

export default RootLayout;