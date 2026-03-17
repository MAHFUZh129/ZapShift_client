
import bokkingIcon from '../../assets/bookingicon.png';

const HowItWorks = () => {
    return (
        <section className="py-16  ">
            <h2 className="text-2xl text-secondary font-bold mb-4 ms-17">How ZapShift Works</h2>
            <div className="max-w-6xl mx-auto px-4 ">


                <div className="grid md:grid-cols-4 gap-5">

                    {/* Card 1 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">

                        <img src={bokkingIcon} alt="Create Delivery" className="w-10 mb-2 " />
                        <h3 className="text-secondary 
                         font-semibold ">Booking Pick & Drop</h3>
                        <p className="text-gray-600 text-sm">
                            From personal packages to business shipments — we deliver on time, every time.                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">

                        <img src={bokkingIcon} alt="Rider Picks Up" className="w-10 mb-2" />
                        <h3 className="text-secondary 
                             font-semibold ">Cash On Delivery</h3>
                        <p className="text-sm text-gray-600">
                            From personal packages to business shipments — we deliver on time, every time.                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">

                        <img src={bokkingIcon} alt="Fast Delivery" className="w-10 mb-2" />
                        <h3 className="text-secondary 
                         font-semibold ">Delivery Hub</h3>
                        <p className="text-gray-600 text-sm">
                            From personal packages to business shipments — we deliver on time, every time.                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition">

                        <img src={bokkingIcon} alt="Fast Delivery" className="w-10 mb-2" />
                        <h3 className="text-secondary 
                         font-semibold ">Booking SME & Corporate</h3>
                        <p className="text-gray-600 text-sm">
                            From personal packages to business shipments — we deliver on time, every time.                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HowItWorks;