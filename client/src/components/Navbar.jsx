import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../public/user-logo.png'
function Navbar() {

    const [Scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            }
            else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <div className={`navbar bg-white shadow-md sticky top-0 transition-colors duration-300 ${Scrolled ? 'bg-gray-200' : 'bg-white'}`}>
            {/* Dropdown menu for smaller screens */}
            <div className="flex-none">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-square btn-ghost hover:bg-purple-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current text-purple-700">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-purple-700">
                        <li>
                            <Link to="/" className="hover:bg-purple-100">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/map" className="hover:bg-purple-100">
                                Map
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Logo/Title in the center */}
            <div className="flex-1 text-center">
                <Link className="btn btn-ghost normal-case text-2xl text-purple-700 hover:bg-purple-100 font-fredoka" to="/">
                    Track-Hack
                </Link>
            </div>

            {/* User avatar dropdown */}
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="User Avatar"
                                src={user}/>
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-purple-700">
                        <li>
                            <Link to={`/profile/:id`} className="hover:bg-purple-100 cursor-pointer">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link className="bg-red-600 text-white font-bold cursor-pointer hover:bg-red-700 mt-2 " to="/">
                                Logout
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Navbar;
