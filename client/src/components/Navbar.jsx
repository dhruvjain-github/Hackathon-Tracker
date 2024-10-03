import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <div className="navbar bg-[#171717]">
            <div className="flex-none">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-square btn-ghost hover:bg-[#3A3A3A]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current text-[#C4C4C4]">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#1B1B1B] rounded-box w-52 text-[#C4C4C4]">
                        <li>
                            <Link to="/" className="hover:bg-[#3A3A3A]">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/map" className="hover:bg-[#3A3A3A]">
                                Map
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="flex-1">
                <Link className="btn btn-ghost text-xl text-[#FFFFFF] hover:bg-[#3A3A3A]" to="/">Hackathon Tracker</Link>
            </div>

            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#1B1B1B] rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#C4C4C4]">
                        <li>
                            <a className="justify-between hover:bg-[#3A3A3A]">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a className="hover:bg-[#3A3A3A]">Settings</a></li>
                        <li><a className="hover:bg-[#3A3A3A]">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
