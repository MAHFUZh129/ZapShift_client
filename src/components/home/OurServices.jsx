import React from 'react';

import serviceIcon from '../../assets/service.png'
const OurServices = () => {
    return (
        <div className='bg-secondary p-15'>
        <div className='space-y-10'>

        <div className='text-center space-y-2  text-[#DADADA]'>
            <h2 className='text-3xl font-bold text-white'>Our Services</h2>
            <p className='text-sm'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages <br /> to business shipments — we deliver on time, every time.</p>
        </div>
        <div className='grid grid-cols-3 gap-5'>
            {/* card 1 */}
            <div className='text-center  space-y-2 p-6 rounded-3xl bg-white'>
                <img className=' mx-auto' src={serviceIcon} alt="Express & Standard Delivery" />
                <h2 className='text-xl font-semibold text-secondary'>Express  & Standard Delivery</h2>
                <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi.<br/> Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>
            </div>
            {/* card 2 */}
            <div className='text-center space-y-2 p-6 rounded-3xl bg-white'>
                <img className=' mx-auto' src={serviceIcon} alt="Express & Standard Delivery" />
                <h2 className='text-xl font-semibold text-secondary'>Express  & Standard Delivery</h2>
                <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi.<br/> Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>
            </div>
            {/* card 3 */}
            <div className='text-center space-y-2 p-6 rounded-3xl bg-white'>
                <img className=' mx-auto' src={serviceIcon} alt="Express & Standard Delivery" />
                <h2 className='text-xl font-semibold text-secondary'>Express  & Standard Delivery</h2>
                <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi.<br/> Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>
            </div>
            {/* card 4 */}
            <div className='text-center space-y-2 p-6 rounded-3xl bg-white'>
                <img className=' mx-auto' src={serviceIcon} alt="Express & Standard Delivery" />
                <h2 className='text-xl font-semibold text-secondary'>Express  & Standard Delivery</h2>
                <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi.<br/> Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>
            </div>
            {/* card 5 */}
            <div className='text-center space-y-2 p-6 rounded-3xl bg-white'>
                <img className=' mx-auto' src={serviceIcon} alt="Express & Standard Delivery" />
                <h2 className='text-xl font-semibold text-secondary'>Express  & Standard Delivery</h2>
                <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi.<br/> Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>
            </div>
            {/* card 6 */}
            <div className='text-center space-y-2 p-6 rounded-3xl bg-white'>
                <img className=' mx-auto' src={serviceIcon} alt="Express & Standard Delivery" />
                <h2 className='text-xl font-semibold text-secondary'>Express  & Standard Delivery</h2>
                <p className='text-sm text-[#606060]'>We deliver parcels within 24–72 hours in Dhaka, <br /> Chittagong, Sylhet, Khulna, and Rajshahi.<br/> Express delivery available in Dhaka within 4–6 <br /> hours from pick-up to drop-off.</p>
            </div>
            
                                

        </div>
        </div>
        </div>
    );
};

export default OurServices;