import React from 'react';
import { useForm } from "react-hook-form"
import {  NavLink } from 'react-router';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const {register,
    handleSubmit,
    watch,
    formState: { errors }, }=useForm()

    const {loginUser}=useAuth()

    const handleLogin=(data)=>{
        // console.log(data);
        loginUser(data.email,data.password)
        .then(result=>{
            const user = result.user;
            console.log('succcc',user);
        })
        .catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="text-4xl font-extrabold text-black mb-2">Welcome Back</h1>
        <p className="text-gray-600 mb-6">Login with ZapShift</p>

         <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
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
              <p className="text-red-500 text-sm mt-1">{errors?.password.message}</p>
            )}
          </div>

          <div>
            <a href="#" className="text-sm text-gray-500 underline">
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-black font-medium py-3 rounded-md transition"
          >
            Login
          </button>
        </form>


        <p className="text-sm text-gray-500 text-center mt-4">
          Don&apos;t have any account?{' '}
          <span className="text-primary underline hover:text-primary/80 cursor-pointer"><NavLink to="/register">Register</NavLink></span>
        </p>

        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;