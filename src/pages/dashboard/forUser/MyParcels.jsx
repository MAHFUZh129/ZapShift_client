import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { PenOff, SearchX, Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const MyParcels = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();

    const {data: parcels = [],isError,isLoading,refetch} = useQuery({
        queryKey: ['parcels', user?.email],
        queryFn:  async()=>{                     
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
           
            return res.data;
        }
    });

    // console.log(parcels)

    // handleDelete
    const handleDelete = async (id) => {
        // console.log("Delete parcel with id:", id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed){
    axiosSecure.delete(`/parcels/${id}`)
    .then(res=>{
        
        if(res.data.deletedCount){
            refetch();
            Swal.fire({
                title: "Deleted!",
                text: "Your parcel has been deleted.",
                icon: "success"
              });
        }
    })
  }
   

});

    }

    // loading
    if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-xl t font-medium">Loading parcels...</p>
      </div>
    );
  }

//   Error
if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-red-500 text-xl font-medium">Failed to load parcels.</p>
      </div>
    );
  }

    return (
        <div className="p-3">
      <div className="mb-2">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          My Parcels
        </h2>
        <p className="text-secondary mt-1">
          Total Parcels: {parcels.length}
        </p>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-md border border-gray-100">
        <table className="table w-full">
          <thead className="bg-secondary/60 text-white">
            <tr>
              <th># #</th>
              <th>Parcel Name</th>
              <th>Parcel Type</th>
              <th>Receiver Name</th>              
              <th>Payment Status</th>
              <th>Cost</th>
              <th>Creation Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.length > 0 ? (
              parcels.map((parcel, index) => (
                <tr key={parcel._id} className='hover:bg-primary/60'>
                  <td>{index + 1}</td>
                  <td  className='font-semibold'>{parcel.parcelName}</td>
                  <td>{parcel.parcelType}</td>
                  <td>{parcel.receiverName}</td>
                  <td>{parcel.paymentStatus === "paid" ? <span className='text-primary  hover:text-white font-bold text-[16px]'>{parcel.paymentStatus}</span> :(<Link className="btn btn-sm btn-outline" to={`/dashboard/my-payments/${parcel._id}`}>Pay</Link>)
                    }
                    </td>
                  <td>৳ {parcel.cost}</td>
                  <td>{parcel.createdAt}</td>
                  <td>
                    <div className='flex gap-2'>
                    <button className="btn btn-sm btn-outline"><PenOff size={14} /></button>
                    <button className="btn btn-sm btn-outline"><SearchX size={16} /></button>
                    <button onClick={()=>handleDelete(parcel._id)} className="btn btn-sm btn-outline"><Trash2 size={14} /></button>
                    </div>
                    
                    {/* <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        parcel.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : parcel.status === "Delivered"
                          ? "bg-green-100 text-green-700"
                          : parcel.status === "Cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {parcel.status || "Pending"}
                    </span> */}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-10 text-gray-500">
                  No parcels found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyParcels;