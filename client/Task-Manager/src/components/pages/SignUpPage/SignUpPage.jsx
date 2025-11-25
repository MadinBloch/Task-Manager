import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form"

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {register,handleSubmit, watch, formState: { errors },} = useForm();
  const onSubmit = (data) => {
    
    fetch('http://localhost:3000/api/users/signin', {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    }).then((response) => console.log("Fonee"))
      .catch((error) => console.error('Error:', error));

  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">

        {/* Back Button */}
        <Link to="/" className="text-gray-400 hover:text-white text-sm">
          ← Back to Home
        </Link>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center my-6">
          Create Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Full Name */}
          <div className="mb-5">
            <label className="block mb-1 text-sm">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                {...register("name", { required: true })} 
                className="w-full bg-gray-700 pl-10 pr-3 py-3 rounded-lg border border-gray-600 focus:border-purple-500 outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block mb-1 text-sm">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                {...register("email", { required: true })} 
                placeholder="you@example.com"
                className="w-full bg-gray-700 pl-10 pr-3 py-3 rounded-lg border border-gray-600 focus:border-purple-500 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-5">
            <label className="block mb-1 text-sm">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                {...register("password", { required: true })} 
                className="w-full bg-gray-700 pl-10 pr-10 py-3 rounded-lg border border-gray-600 focus:border-purple-500 outline-none"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-7">
            <label className="block mb-1 text-sm">Confirm Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm password"
                className="w-full bg-gray-700 pl-10 pr-10 py-3 rounded-lg border border-gray-600 focus:border-purple-500 outline-none"
              />

              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-white"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
          >
            Create Account
          </button>
        </form>

        {/* Already Have Account */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already registered?{" "}
          <Link to="/signin" className="text-purple-400 hover:text-purple-300">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
}
