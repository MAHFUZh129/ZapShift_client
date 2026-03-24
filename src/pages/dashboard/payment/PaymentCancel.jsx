import React from 'react';
import { Link } from "react-router";
import { XCircle, RefreshCcw, House } from "lucide-react";

const PaymentCancel = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white via-[#fff7f7] to-[#ffe9e9] px-4 py-10">
      <div className="w-full max-w-2xl rounded-[32px] border border-white/60 bg-white/95 p-8 shadow-2xl backdrop-blur-md md:p-12">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 shadow-lg shadow-red-200">
            <XCircle className="h-14 w-14 text-red-500" />
          </div>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400"></span>
            Payment Not Completed
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-primary md:text-5xl">
            Payment Cancelled
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Your payment was cancelled before completion. No worries — your
            parcel request is still safe, and you can try the payment again
            anytime.
          </p>

          <div className="mt-8 w-full rounded-3xl border border-red-100 bg-red-50 p-5 text-left">
            <h3 className="text-lg font-bold text-secondary">
              What you can do now
            </h3>
            <p className="mt-2 text-gray-600">
              Go back to your parcel payment page and retry the payment, or
              return to the dashboard to review your parcel details.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/dashboard/my-parcels"
              className="inline-flex items-center justify-center rounded-2xl bg-primary px-6 py-3 font-semibold text-secondary transition hover:scale-[1.02]"
            >
              <RefreshCcw className="mr-2 h-5 w-5" />
              Try Again
            </Link>

            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-2xl bg-secondary px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              <House className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PaymentCancel;