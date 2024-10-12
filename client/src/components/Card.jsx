import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
    return (
        <div className="card bg-gray-100 shadow-2xl rounded-lg overflow-hidden hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-3xl">
            <div className="card-body h-full overflow-auto">
                <h2 className="text-3xl font-bold text-purple-700 mb-2 sticky top-0 bg-gray-100 p-2 underline font-montserrat">
                    {item.name}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="font-semibold text-purple-500 font-roboto">Location:</div>
                    <div className="font-roboto">{item.location}</div>
                    <div className="font-semibold text-purple-500 font-roboto">Start Date:</div>
                    <div className="font-roboto">{new Date(item.startDate).toLocaleDateString()}</div>
                    <div className="font-semibold text-purple-500 font-roboto">Participants:</div>
                    <div className="font-roboto">{item.participants}</div>
                    <div className="font-semibold text-purple-500 font-roboto">Prize:</div>
                    <div className="font-roboto">{item.prize}</div>
                    <div className="font-semibold text-purple-500 font-roboto">Team Size:</div>
                    <div className="font-roboto">{item.teamSize}</div>
                    <div className="font-semibold text-purple-500 font-roboto">Problem Statement:</div>
                    <div className="font-roboto">{item.problemStatement}</div>
                </div>
                <div className="card-actions justify-end mt-4">
                    <Link to="https://devfolio.co/hackathons" target="_blank">
                        <button className="btn btn-primary bg-purple-700 text-white hover:bg-purple-600">
                            Register Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
