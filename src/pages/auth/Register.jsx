import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowRoundUp } from "react-icons/io";
import { NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import axios from 'axios';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth()

  const handleRegister = (data) => {
    console.log(data);

    const profileImg = data.photoUrl[0];
    console.log(profileImg);
    const formData = new FormData();
    formData.append("image", profileImg);

    registerUser(data.email, data.password, data.name)
      .then(result => {
        const user = result.user;
        console.log(user);
        // 1. Upload image to imgbb
        const image_Api_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_upload_key}`;

        axios.post(image_Api_Url, formData)
          .then((response) => {
            const imageUrl = response.data.data.display_url;
            // console.log("Image URL:", imageUrl);

            // 2. Update user profile with name and photo URL
            const updateProfile = {
              displayName: data.name,
              photoURL: imageUrl,
            }
            updateUserProfile(updateProfile)
              .then(() => {
                console.log("User profile updated successfully");
              })
              .catch((error) => {
                console.error("Error updating user profile:", error);
              });

          })
          .catch((error) => {
            console.error("Error uploading image:", error);
          });




      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-extrabold text-black mb-2">
          Create an Account
        </h1>
        <p className="text-gray-600 mb-6">Register with ZapShift</p>

        <div className="mb-6">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center relative">
            <FaUserCircle className="text-3xl text-gray-400" />
            <div className="absolute -bottom-1 -right-1 bg-gray-100 rounded-full">
              <IoIosArrowRoundUp className="text-primary" size={20} />
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(handleRegister)} className="space-y-3">
          {/* name */}
          <div>

            <label className="block text-sm font-medium text-black mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          {/* photo url */}
          <div>

            <label className="block text-sm font-medium text-black mb-1">
              Photo URL
            </label>
            <input
              type="file"
              placeholder="photo url"
              {...register("photoUrl", {
                required: "Photo URL is required",
              })}


              className="w-full file-input px-4  border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.photoUrl && (
              <p className="text-red-500 text-sm mt-1">{errors.photoUrl.message}</p>
            )}
          </div>



          {/* email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          {/* password */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/80 text-black font-medium py-3 rounded-md transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-4">
          Already have an account?{" "}
          <NavLink
            to="/login"
            className="text-primary underline hover:text-primary/80"
          >
            Login
          </NavLink>
        </p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Register;