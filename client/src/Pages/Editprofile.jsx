import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import userlogo from "../../public/user-logo.png";

function EditProfilePage() {
  const [newProfilePic, setNewProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePic(reader.result);
        localStorage.setItem("profilePic", reader.result);
        toast.success("Profile picture updated!");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    navigate(`/profile/${localStorage.getItem("userId")}`);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <Toaster />
      <dialog className="modal modal-open">
        <div className="modal-box relative">
          <button 
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => navigate(`/profile/${localStorage.getItem("userId")}`)}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg text-center">Update Profile Picture</h3>
          <div className="form-control mt-6">
            <label className="label"><span className="label-text">New Profile Picture</span></label>
            <input 
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default EditProfilePage;
