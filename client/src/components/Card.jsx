import React from 'react';
import { Link } from 'react-router-dom';

function Card({ item }) {
    return (
        <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <div>
                    <h4>Location:</h4><h5>{item.location}</h5>
                    <h4>Start Date:</h4><h5>{item.startDate}</h5>
                    <h4>Participants:</h4><h5>{item.participants}</h5>
                    <h4>Prize:</h4><h5>{item.prize}</h5>
                    <h4>Team Size:</h4><h5>{item.teamSize}</h5>
                    <h4>Problem Statement:</h4><h5>{item.problemStatement}</h5>
                </div>
                <div className="card-actions justify-end">
                    <Link to="https://devfolio.co/hackathons" target="_blank">
                        <button className="btn btn-primary">Register Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Card;
