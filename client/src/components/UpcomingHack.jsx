import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

function UpcomingHack() {
    const [Hackathons, setHackathons] = useState([]);

    useEffect(() => {
        const fetchHackathons = async () => {
            try {
                const response = await axios.get("http://localhost:4000/api/hackathons");
                setHackathons(response.data);
            } catch (error) {
                console.log("Error:", error);
            }
        };
        fetchHackathons();
    }, []);

    return (
        <>
            <h1 className="text-5xl font-extrabold text-purple-600 underline ml-16 mb-12 mt-5 ">Hackathons </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {Hackathons.map((item) => (
                    <Card item={item} key={item._id} />
                ))}
            </div>
        </>
    );
}

export default UpcomingHack;
