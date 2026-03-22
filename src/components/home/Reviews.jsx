import { useEffect, useState } from "react";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import './styles.css';

import customerTop from '../../assets/customer-top.png';

import {  Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./cards/ReviewCard";

const Reviews = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('/reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    // console.log(reviews)

    return (
        <div>
            <div className="text-center space-y-3 mb-10">
                <img className="mx-auto" src={customerTop} alt="" />
                <h1 className="text-secondary font-bold text-2xl">What our customers are sayings</h1>
                <p className=" text-sm">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br />pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
            loop={true}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: '50% ',
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={true}
                modules={[EffectCoverflow, Autoplay, Pagination]}
                className="mySwiper"
            >

                {
                    reviews.map(review => (
                        <SwiperSlide key={review.id}>
                            <div className="p-4 bg-white rounded-lg shadow-md">
                                <ReviewCard review={review} />
                            </div>
                        </SwiperSlide>
                    ))

                }

            </Swiper>
        </div>
    );
};

export default Reviews;