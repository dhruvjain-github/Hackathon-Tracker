// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Role, setRole] = useState("user");
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically open the modal when the component mounts
    document.getElementById('signup_modal').showModal();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signupdata = {
      username: Name,         // Adjusted to 'name'
      email: Email,       // Adjusted to 'email'
      password: Password,  // Adjusted to 'password'
      role: Role          // Remains as 'role'
    };
    console.log('Submitting form with:', signupdata);
    try {
      const response = await axios.post("http://localhost:4000/api/auth/signup", signupdata);
      const {token,newuser}=response.data
      localStorage.setItem("token",token)
      localStorage.setItem("userId",newuser.id)
      localStorage.setItem("username",newuser.username)
      localStorage.setItem("email",newuser.email)


      console.log('Signup successful:', response.data);
      toast.success("Signup successful!");

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Signup failed:', error.response.data); // Log specific error response data
      toast.error("Signup Failed! Please try again.");
    }
  };

  return (
    <div>
      {/* Modal Component */}
      <dialog id="signup_modal" className="modal">
        <div className="modal-box relative">
          {/* Close Button */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </Link>

          {/* Modal Heading */}
          <h3 className="font-bold text-lg text-center">Sign Up for an Account</h3>

          {/* Signup Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Role Selection */}
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Enter your role for the website (Optional)</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    className="radio radio-primary"
                    checked={Role === 'user'}
                    onChange={() => setRole('user')}
                  />
                  <span className="label-text">User</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    className="radio radio-primary"
                    checked={Role === 'admin'}
                    onChange={() => setRole('admin')}
                  />
                  <span className="label-text">Admin</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary w-full">Sign Up</button>
            </div>
          </form>

          {/* Already have an account? */}
          <div className="text-center mt-4">
            <p>
              Already have an account?
              <Link to="/login" className="link link-primary ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </dialog>
      <Toaster />
    </div>
  );
}

export default Signup;
