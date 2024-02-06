"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Sito: React.FC = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const response = await axios.get('http://localhost:3003/houses');
        const decodedHouses = response.data.map((house) => ({
          ...house,
          image: `data:image/jpeg;base64,${house.image}`, // Decode base64 image
        }));
        setHouses(decodedHouses);
      } catch (error) {
        console.error('Error fetching houses:', error);
      }
    };

    fetchHouses();
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <div className="h-4/6 w-full bg-cyan-800">
        <div className="flex justify-center items-center">
          <img src="/Logo_Sito.png" className="mt-[50px]" />
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
    </div>
  );
};

export default Sito;
