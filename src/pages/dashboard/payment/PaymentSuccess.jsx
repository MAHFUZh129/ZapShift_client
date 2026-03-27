import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { CheckCircle2, ArrowRight, PackageCheck } from "lucide-react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentSuccess = () => {

    const [searchParams]=useSearchParams()
    const sessionId = searchParams.get('session_id')
    // console.log(sessionId)

    const axiosSecure = useAxiosSecure()
    // const[paymentInfo,setPaymentInfo] = useState({})

    const {data: payments = {}} = useQuery({
        queryKey: ['payments',sessionId ],
        queryFn:  async()=>{                     
            const res = await axiosSecure.patch(`/session-status?session_id=${sessionId}`);
           console.log(res.data)
            return res.data;
        }
    });

    console.log(payments)
    
    // useEffect(()=>{
    //     axiosSecure.patch(`/session-status?session_id=${sessionId}`)
    //     .then(res=>{
    //         console.log(res.data)
    //         setPaymentInfo(res.data)
    //     })

    // },[sessionId,axiosSecure])

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-[#f7fbe8] to-[#eef7d2] p-6 ">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-2xl backdrop-blur-md md:p-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary] shadow-lg shadow-primary/40">
            <CheckCircle2 className="h-14 w-14 text-secondary" />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondray px-4 py-2 text-sm font-semibold text-white">
            <PackageCheck className="h-4 w-4 text-primary" />
            Payment Completed
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-secondary md:text-5xl">
            Payment Successful
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Your parcel payment was completed successfully. We have received
            your payment and your shipment is now moving to the next step.
          </p>

          <div className="mt-8 grid w-full gap-4 rounded-3xl bg-secondary p-5 text-left text-white md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-white/70">Status</p>
              <h3 className="mt-1 text-lg font-bold text-primary">Paid</h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-white/70">Next Step</p>
              <h3 className="mt-1 text-lg font-bold">Processing</h3>
            </div>

            <div className="rounded-2xl bg-white/10 p-4">
              <p className="text-sm text-white/70">Tracking</p>
              <h3 className="mt-1 text-lg font-bold">Available Soon</h3>
            </div>
            
          </div>
 
            <div className="flex mt-5 gap-3">
                
            <div className="rounded-lg bg-primary/50 py-2 px-4">
              <p className="text-md border-b border-dotted text-red-900">Transaction ID</p>
              <h3 className="mt-1 text-[15px] font-bold">{payments.transactionId}</h3>
            </div>
            <div className="rounded-lg bg-primary/40 py-2 px-4">
              <p className="text-md border-b border-dotted text-red-900">Tracking ID</p>
              <h3 className="mt-1 text-[15px] font-bold">{payments.trackingId}</h3>
            </div>
            </div>
            {/* <div className="flex mt-5 gap-3">
                
            <div className="rounded-lg bg-primary/50 py-2 px-4">
              <p className="text-md border-b border-dotted text-red-900">Transaction ID</p>
              <h3 className="mt-1 text-[15px] font-bold">{paymentInfo.transactionId}</h3>
            </div>
            <div className="rounded-lg bg-primary/40 py-2 px-4">
              <p className="text-md border-b border-dotted text-red-900">Tracking ID</p>
              <h3 className="mt-1 text-[15px] font-bold">{paymentInfo.trackingId}</h3>
            </div>
            </div> */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/dashboard/my-parcels"
              className="inline-flex items-center justify-center rounded-2xl bg-secondary px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Go to My Parcels
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-primary bg-primary px-6 py-3 font-semibold text-secondary transition hover:scale-[1.02]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;