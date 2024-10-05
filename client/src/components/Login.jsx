import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Login() {

  // Automatically open the modal when the component mounts
  useEffect(() => {
    document.getElementById('login_modal').showModal();
  }, []);

  return (
    <div>
      {/* Modal Component */}
      <dialog id="login_modal" className="modal">
        <div className="modal-box relative">
          {/* Close Button */}
          <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >
          ✕
          </Link>
          

          {/* Modal Heading */}
          <h3 className="font-bold text-lg text-center">Login to Your Account</h3>

          {/* Email Input */}
          <div className="form-control mt-6">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="input input-bordered w-full"
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
            />
            <label className="label">
              <Link 
                to="/forgot-password" 
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>

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
