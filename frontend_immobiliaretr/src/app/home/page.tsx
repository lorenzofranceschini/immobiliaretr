"use client";
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const home: React.FC = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('http://localhost:3003/houses');
        setHouses(response.data);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="w-full h-full ">
        <div className="flex justify-between items-center px-4">
          <img src="/Logo_Sito.png" className="mt-[50px]" />
          <Link href="/accesso">
            <button className="bg-indigo-500 text-white px-3 py-1.5 rounded-md shadow-md hover:bg-indigo-600">Vai al Gestionale</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {houses.map((house) => (
            <div key={house.name} className="bg-white rounded-lg shadow-md">
              <img src={house.image} alt={house.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{house.name}</h3>
                <p className="text-gray-600">Location: {house.location}</p>
                <p className="text-gray-600">Price: {house.price}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default home;
