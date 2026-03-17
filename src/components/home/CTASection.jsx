import React from 'react';

import bgWave from "../../assets/be-a-merchant-bg.png";
import boxImg from "../../assets/location-merchant.png";

const CTASection = () => {
    return (
        <div className="px-4 py-16 bg-gray-100">
            <div
                className="max-w-6xl bg-secondary mx-auto rounded-2xl p-10 relative overflow-hidden text-white"
                
            >
                {/* Top Wave Background */}
                <img
                    src={bgWave}
                    alt="bg"
                    className="absolute top-0 left-0 w-full opacity-30"
                />

                <div className="grid md:grid-cols-2 items-center gap-8 relative z-10">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">
                            Merchant and Customer Satisfaction <br />
                            is Our First Priority
                        </h2>

                        <p className="text-sm text-gray-200 mb-6 max-w-md">
                            We offer the lowest delivery charge with the highest value along
                            with 100% safety of your product. ZapShift courier delivers your
                            parcels in every corner of Bangladesh right on time.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-primary transition">
                                Become a Merchant
                            </button>

                            <button className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-black transition">
                                Earn with ZapShift Courier
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={boxImg}
                            alt="box"
                            className="w-72 md:w-80"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CTASection;