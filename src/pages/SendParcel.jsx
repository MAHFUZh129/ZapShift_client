import React, { use } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {

    const regions = useLoaderData()
    // console.log(regions);

    const regionsDuplicate = regions.map(region => region.region);
    const uniqueRegions = [...new Set(regionsDuplicate)];
    // console.log(uniqueRegions);

    const districtByRegion = (region) =>{
        const districts = regions.filter(r => r.region === region) 
        // console.log(districts); 
        const district = districts.map(d => d.district);
        return district;
              
    }

    
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document",
    },
  });

  const parcelType = watch("parcelType");

  const senderWarehouse = watch("senderWarehouse");
  const receiverWarehouse = watch("receiverWarehouse");

  const onSubmit = (data) => {
    console.log("Parcel Data:", data);
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-secondary mb-4">Add Parcel</h1>
        <hr className="mb-8" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800  mb-4">
              Enter your parcel details
            </h2>

            {/* document or non document */}
         <div className="flex items-center gap-8 mb-6">
              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  value="document"
                  {...register("parcelType")}
                  className="scale-150 accent-primary"
                />
                Document
              </label>

              <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                <input
                  type="radio"
                  value="non-document"
                  {...register("parcelType")}
                  className="scale-150 accent-primary"
                />
                Non-Document
              </label>
            </div>
           {/* parcel name */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Parcel Name
                </label>
                <input
                  type="text"
                  placeholder="Parcel Name"
                  {...register("parcelName", {
                    required: "Parcel name is required",
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.parcelName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.parcelName.message}
                  </p>
                )}
              </div>
                {/* parcel weight */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Parcel Weight (KG)
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="Parcel Weight (KG)"
                  {...register("parcelWeight", {
                    required:
                      parcelType === "non-document"
                        ? "Parcel weight is required"
                        : false,
                  })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                  disabled={parcelType === "document"}
                />
                {errors.parcelWeight && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.parcelWeight.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Sender Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Sender Details
              </h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Sender Name
                    </label>
                    <input
                      type="text"
                      placeholder="Sender Name"
                      {...register("senderName", {
                        required: "Sender name is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                    {errors.senderName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.senderName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Sender Pickup Wire house
                    </label>
                    <select
                      {...register("senderWarehouse", {
                        required: "Sender warehouse is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    >
                    <option value="">Select Warehouse</option>
                        {
                            uniqueRegions.map((region, index) => (
                                <option key={index} value={region}>
                                    {region}
                                </option>
                            ))

                        }
                      
                    </select>
                    {errors.senderWarehouse && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.senderWarehouse.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      {...register("senderAddress", {
                        required: "Sender address is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Sender Contact No
                    </label>
                    <input
                      type="text"
                      placeholder="Sender Contact No"
                      {...register("senderContact", {
                        required: "Sender contact number is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Your Region
                  </label>
                  <select
                    {...register("senderRegion", {
                      required: "Sender region is required",
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    {

                    }
                    <option value="">Select your region</option>
                    {
                        districtByRegion(senderWarehouse).map((d,i) => <option key={i} value={d}>{d}</option> )
                    }
                    
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Pickup Instruction
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Pickup Instruction"
                    {...register("pickupInstruction")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Receiver Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Receiver Details
              </h3>

              <div className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Receiver Name
                    </label>
                    <input
                      type="text"
                      placeholder="Receiver Name"
                      {...register("receiverName", {
                        required: "Receiver name is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Receiver Delivery Wire house
                    </label>
                    <select
                      {...register("receiverWarehouse", {
                        required: "Receiver warehouse is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    >
                      <option value="">Select Wire house</option>
                      {
                            uniqueRegions.map((region, index) => (
                              <option key={index} value={region}>
                                {region}
                              </option>
                            ))

                      }
                      
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Receiver Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address"
                      {...register("receiverAddress", {
                        required: "Receiver address is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-1">
                      Receiver Contact No
                    </label>
                    <input
                      type="text"
                      placeholder="Sender Contact No"
                      {...register("receiverContact", {
                        required: "Receiver contact number is required",
                      })}
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Receiver Region
                  </label>
                  <select
                    {...register("receiverRegion", {
                      required: "Receiver region is required",
                    })}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  >
                    <option value="">Select your region</option>
                    {
                        districtByRegion(receiverWarehouse).map((d,i) => <option key={i} value={d}>{d}</option> )
                    }
                   
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Delivery Instruction
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Delivery Instruction"
                    {...register("deliveryInstruction")}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mb-4">
              * PickUp Time 4pm-7pm Approx.
            </p>

            <button
              type="submit"
              className="bg-primary hover:bg-primary text-black font-medium px-8 py-3 rounded-md transition"
            >
              Proceed to Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;