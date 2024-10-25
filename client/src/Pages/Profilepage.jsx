import { useState } from 'react';
import React from 'react';
import Navbar from '../components/Navbar';
import userlogo from "../../public/user-logo.png";

function Profilepage() {
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const [profilePic, setProfilePic] = useState(localStorage.getItem("profilePic") || userlogo);
    const [newProfilePic, setNewProfilePic] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewProfilePic(reader.result);
                localStorage.setItem("profilePic", reader.result); // Save new profile pic in local storage
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="container mx-auto p-6 flex flex-col md:flex-row">
                {/* Profile Picture Section */}
                <div className="flex-shrink-0 w-full md:w-1/3 flex items-center justify-center">
                    <div className="relative">
                        <img 
                            src={profilePic} 
                            alt="Profile"
                            className="rounded-full w-40 h-40 object-cover border-4 border-purple-600 transition-transform duration-200 ease-in-out transform hover:scale-110"
                        />
                        <label className="absolute bottom-2 right-2 bg-purple-800 text-white p-2 rounded-full cursor-pointer opacity-0 hover:opacity-100 transition-opacity duration-200">
                            <input 
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="opacity-0 w-0 h-0 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); }}
                            />
                            Edit
                        </label>
                    </div>
                </div>

                {/* User Information Section */}
                <div className="flex-grow pl-0 md:pl-6 mt-4 md:mt-0">
                    <h2 className="text-2xl font-bold text-purple-700">User Information</h2>
                    <div className="mt-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name:</span>
                            </label>
                            <input 
                                type="text"
                                value={username}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text">Email:</span>
                            </label>
                            <input 
                                type="text"
                                value={email}
                                readOnly
                                className="input input-bordered w-full bg-gray-100"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profilepage;
