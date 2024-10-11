import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  // Automatically open the modal when the component mounts
  useEffect(() => {
    document.getElementById('login_modal').showModal();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logindata = {
      email: Email,
      password: Password,
    };
    console.log("Submitting login data");

    try {
      
      const response = await axios.post("http://localhost:4000/api/auth/login", logindata);
      console.log('Login successful:', response.data);
      toast.success("Login successful!");

      setEmail("");
      setPassword("");

      setTimeout(() => {
        navigate('/');  // Navigate to home page
      }, 2000);

    } catch (error) {
      // Log specific error or a generic error message
      const errorMessage = error.response?.data?.message || "Login failed! Please try again.";
      console.error('Login failed:', errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleCloseModal = () => {
    document.getElementById('login_modal').close();  // Close the modal
  };

  return (
    <div>
      <Toaster />
      {/* Modal Component */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box relative">
          {/* Close Button */}
          <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          {/* Modal Heading */}
          <h3 className="font-bold text-lg text-center">Login to Your Account</h3>

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required  // Add required for form validation
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
                required  // Add required for form validation
              />
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>

          {/* Signup Link */}
          <div className="text-center mt-4">
            <p>
              Don't have an account?
              <Link to="/signup" className="link link-primary ml-1">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
