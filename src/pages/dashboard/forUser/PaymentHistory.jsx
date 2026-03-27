import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';

const PaymentHistory = () => {

    const {user}= useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: payments = {},isLoading} = useQuery({
            queryKey: ['payments',user?.email ],
            queryFn:  async()=>{                     
                const res = await axiosSecure.get(`/payments?email=${user?.email}`);
               console.log(res.data)
                return res.data;
            }
        });
 if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="p-4">
      <div className="rounded-2xl bg-white shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Payment History
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-left text-sm text-gray-600">
              <tr>
                <th className="p-4">Parcel Info</th>
                <th className="p-4">Transaction Id</th>
                <th className="p-4">Tracking Number</th>
                <th className="p-4">Payment Info</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {payments.map((payment) => (
                <tr
                  key={payment._id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  {/* Parcel Info */}
                  <td className="p-4">
                    <p className="font-semibold text-gray-800">
                      {payment.parcelName}
                    </p>
                  </td>

                  {/* transaction Id */}
                  <td>
                    {payment.transactionId}
                  </td>

                  {/* Recipient Info
                  <td className="p-4 text-sm text-gray-600">
                    <p>{payment.receiverName}</p>
                    <p>{payment.receiverAddress}</p>
                    <p>{payment.receiverPhone}</p>
                  </td> */}

                  {/* Tracking */}
                  <td className="p-4 font-medium text-gray-700">
                    {payment.trackingId}
                  </td>

                  {/* Payment */}
                  <td className="p-4">
                    <span className="text-primary font-semibold">
                      ৳ {payment.amount} (Paid)
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-4">
                    <Link
                      to={`/dashboard/payment-details/${payment._id}`}
                      className="px-4 py-1 rounded-lg bg-gray-200 text-sm hover:bg-gray-300"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {payments.length === 0 && (
            <p className="text-center py-10 text-gray-500">
              No payment history found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;