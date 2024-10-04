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
        <div className="grid grid-cols-2 gap-4">
            {Hackathons.map((item) => (
                <Card item={item} key={item._id} />
            ))}
        </div>
    );
}

export default UpcomingHack;
