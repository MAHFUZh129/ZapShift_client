import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from '../../assets/banner/banner1.png';
import bannerImg2 from '../../assets/banner/banner2.png';
import bannerImg3 from '../../assets/banner/banner3.png';
import { GoArrowUpRight } from 'react-icons/go';
import { GiPowerLightning } from "react-icons/gi";
import { LiaSuperpowers } from "react-icons/lia";


const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
        >
            <div className='relative '>
                <img className="w-full" src={bannerImg1} />
                {/* <div className="absolute inset-0 bg-black/40"></div> */}

                <div className="absolute top-110 left-22 text-gray-800 z-10">
                    <p >
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.
                    </p>
                    <div className="flex mt-5  ">

                        <button className='btn bg-primary rounded-3xl' >
                            Track Your Parcel
                        </button>
                        <button className='btn bg-black btn-circle' >
                            <GoArrowUpRight size={20} className='text-primary stroke-1' />
                        </button>

                        <button className="btn ml-5">
                            Be A Rider
                        </button>

                    </div>
                </div>

            </div>
            <div className='relative '>
                <img className='' src={bannerImg2} />
                <div className='absolute  top-105 left-22  '>
                    <h4 className='text-3xl font-semibold italic flex items-center gap-2 my-3'><span className='text-amber-600 '><GiPowerLightning size={40} /></span>Easy Pickup, Lightning-Fast Delivery
                    </h4>
                    <p className='text-gray-700' >ZapShift is a role-based delivery management system where customers can request <br />pickups, riders quickly accept nearby deliveries, and packages are delivered <br /> in the fastest and most efficient way.</p>
                </div>

            </div>
            <div>
                <img src={bannerImg3} />
                <div className='absolute  top-105 left-22  '>
                    <h4 className='text-3xl text-teal-600 font-semibold italic flex items-center gap-2 my-3'><span className='text-amber-600 '><LiaSuperpowers size={48} />
                    </span>Fastest Delivery in Your City
                    </h4>
                    <p className='text-gray-800' >Create a delivery request in seconds. A rider will arrive at your location and pick up your package without any hassle.</p>
                </div>
                

            </div>
        </Carousel>
    );
};

export default Banner;