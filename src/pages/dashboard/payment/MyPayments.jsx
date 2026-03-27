import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { CreditCard, Package, Mail, BadgeDollarSign } from 'lucide-react';


const MyPayments = () => {
    const {parcelId} = useParams()
    const axiosSecure = useAxiosSecure();

    const {data: parcels, isError ,isLoading} = useQuery({
        queryKey:['payment', parcelId],
        queryFn: async ()=>{
          const res = await axiosSecure.get(`/parcels/${parcelId}`)
           
            return res.data
        }
    })

    const handlePayment =async() =>{

        const paymentInfo ={
            cost: parcels.cost,
            parcelName: parcels.parcelName,
            parcelId:parcels._id,
            senderEmail: parcels.senderEmail,
            

        }

        const res = await axiosSecure.post('/create-checkout-session',paymentInfo)
        if(res.data?.url){
            window.location.replace(res.data.url)
        }
    }


    // loading
     if (isLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-secondary"></span>
      </div>
    );
  }


//   error
  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="rounded-2xl bg-red-50 px-6 py-4 font-medium text-red-500">
          Failed to load payment details.
        </p>
      </div>
    );
  }
    return (
        <div className="min-h-[80vh] bg-gradient-to-br from-white via-[#f8fbe9] to-[#eef6d7] p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold text-secondary md:text-4xl">
            Complete Your Payment
          </h2>
          <p className="mt-2 text-sm text-gray-600 md:text-base">
            Secure your parcel delivery by completing the payment below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[28px] bg-secondary p-6 text-white shadow-2xl lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/70">Payment For</p>
                <h3 className="mt-1 text-2xl font-bold text-primary">
                  {parcels?.parcelName}
                </h3>
              </div>

              <div className="rounded-2xl bg-white/10 p-3">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Package className="h-5 w-5" />
                  <span className="text-sm font-medium">Parcel Name</span>
                </div>
                <p className="text-lg font-semibold">{parcels?.parcelName}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <div className="mb-2 flex items-center gap-2 text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-medium">Sender Email</span>
                </div>
                <p className="break-all text-lg font-semibold">
                  {parcels?.senderEmail}
                </p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4 md:col-span-2">
                <p className="text-sm text-white/70">Parcel ID</p>
                <p className="mt-2 break-all text-base font-medium">{parcelId}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e8efcf] bg-white p-6 shadow-xl">
            <div className="mb-5 inline-flex rounded-full bg-primary px-4 py-2 text-sm font-bold text-secondary">
              Payment Summary
            </div>

            <div className="rounded-3xl bg-[#f8faef] p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-2xl bg-secondary p-3">
                  <BadgeDollarSign className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Amount</p>
                  <h3 className="text-3xl font-extrabold text-secondary">
                    ৳ {parcels?.cost}
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-[#dce7b0] bg-white px-4 py-3 text-sm text-gray-600">
                Your payment is securely processed through Stripe.
              </div>
            </div>

            <button
              onClick={handlePayment}
              className="mt-6 w-full rounded-2xl bg-primary px-5 py-4 text-lg font-bold text-secondary shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Pay Now
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Fast, secure and protected payment gateway.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default MyPayments;