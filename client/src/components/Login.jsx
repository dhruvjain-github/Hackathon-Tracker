import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.getElementById('login_modal').showModal();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const logindata = { email: Email, password: Password };

    try {
      const response = await axios.post("http://localhost:4000/api/auth/login", logindata);
      const { token, id, username, email } = response.data;

      // Store user data in local storage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", id);
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);

      toast.success("Login successful!");
      
      setTimeout(() => navigate('/'), 2000); // Redirect after toast displays
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed! Please try again.";
      toast.error(errorMessage);
    }
  };

  const handleCloseModal = () => {
    document.getElementById('login_modal').close();
  };

  return (
    <div>
      <Toaster />
      <dialog id="login_modal" className="modal">
        <div className="modal-box relative">
          <button onClick={handleCloseModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <h3 className="font-bold text-lg text-center">Login to Your Account</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-control mt-6">
              <label className="label"><span className="label-text">Email</span></label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-4">
              <label className="label"><span className="label-text">Password</span></label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>Don't have an account? <Link to="/signup" className="link link-primary ml-1">Sign up</Link></p>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
