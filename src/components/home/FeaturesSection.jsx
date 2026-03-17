import safeDelivery from "../../assets/safe-delivery.png";
import trackingImg from "../../assets/live-tracking.png";


const FeaturesSection = () => {
    const features = [
        {
            img: trackingImg,
            title: "Live Parcel Tracking",
            desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
        },
        {
            img: safeDelivery,
            title: "100% Safe Delivery",
            desc: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        },
        {
            img: safeDelivery,
            title: "24/7 Call Center Support",
            desc: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        },
    ];

    return (
        <section className="py-4 bg-gray-100">
            <div className="h-10 border-t-2 max-w-5xl mx-auto border-dashed border-gray-300"></div>

            <div className="max-w-5xl mx-auto px-4 space-y-5">

                {features.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition"
                    >

                        {/* Image */}
                        <div className="w-28  flex-shrink-0">
                            <img src={item.img} alt={item.title} />
                        </div>

                        {/* Divider */}
                        <div className="h-20 border-l border-dashed border-gray-300"></div>

                        {/* Text */}
                        <div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}

            </div>
            <div className="mt-10 border-t-2 max-w-5xl mx-auto border-dashed border-gray-300"></div>
        </section>
    );
}

export default FeaturesSection;