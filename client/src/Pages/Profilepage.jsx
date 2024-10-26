import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import userlogo from "../../public/user-logo.png";
import Navbar from '../components/Navbar';

function ProfileCard() {
  const { id } = useParams();
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || userlogo);
  const [age, setAge] = useState('');
  const [mobile, setMobile] = useState('');
  const [instagram, setInstagram] = useState('');
  const [github, setGithub] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/api/users/${id}`);
        const { age, mobile, instagram, github, profilePic } = response.data;
        setAge(age || '');
        setMobile(mobile || '');
        setInstagram(instagram || '');
        setGithub(github || '');
        setProfilePic(profilePic || userlogo);
        localStorage.setItem("profilePic", profilePic || userlogo);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    fetchData();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { age, mobile, instagram, github, profilePic };
      await axios.put(`/api/users/${id}`, updatedUser);
      toast.success("Profile updated successfully!");
      localStorage.setItem("profilePic", profilePic);
      navigate(`/profile/${id}`);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleEditClick = () => {
    navigate(`/profile/edit/${id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center p-6 flex-grow">
        <Toaster />
        <div className="card bg-gray-100 shadow-xl rounded-lg overflow-hidden w-full max-w-3xl transition-transform duration-300 transform hover:scale-105 hover:shadow-3xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 flex justify-center items-center p-4">
              <img 
                src={profilePic} 
                alt="Profile"
                className="rounded-full w-32 h-32 object-cover border-4 border-purple-600 transition-transform duration-200 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="md:w-2/3 p-4">
              <h2 className="text-2xl font-bold text-purple-700 mb-2">{username}</h2>
              <p className="text-gray-600 font-semibold mb-4">Email: {email}</p>
              <form onSubmit={handleUpdate} className="space-y-4">
                <div className="form-control">
                  <label className="label text-purple-500 font-semibold">Age:</label>
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label text-purple-500 font-semibold">Mobile:</label>
                  <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label text-purple-500 font-semibold">Instagram:</label>
                  <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="form-control">
                  <label className="label text-purple-500 font-semibold">GitHub:</label>
                  <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} className="input input-bordered w-full" />
                </div>
                <div className="card-actions justify-end mt-6">
                  <button type="submit" className="btn bg-purple-700 text-white hover:bg-purple-600 mr-2">Save Changes</button>
                  <button type="button" onClick={handleEditClick} className="btn btn-secondary">Edit Profile-pic</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
